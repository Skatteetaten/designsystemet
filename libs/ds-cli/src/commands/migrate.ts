import chalk from 'chalk';
import { Project } from 'ts-morph';

import { resolve, normalize } from 'path';

import { type MigrateCLI } from '../cli.js';
import { isValidMigration, listMigrations } from '../migrate/migrations.js';
import { getTransform } from '../migrate/transforms/v2.0.0/index.js';
import { validateTypeScriptForMigrations } from '../utils/typescript-checker.js';

export async function handleMigrate(cli: MigrateCLI): Promise<void> {
  const [migrationName, targetPath] = cli.input;
  const { dry, exclude } = cli.flags;

  if (!migrationName) {
    console.error(chalk.red('Error: Migration name is required'));
    console.info(chalk.yellow('Available migrations:'));
    console.info(listMigrations());
    console.info(chalk.gray('Try "ds-cli migrate --help" for usage'));
    process.exit(1);
  }

  // Check TypeScript availability before proceeding
  if (!validateTypeScriptForMigrations()) {
    process.exit(1);
  }

  if (!isValidMigration(migrationName)) {
    console.error(chalk.red(`Error: Migration "${migrationName}" not found`));
    console.info(chalk.yellow('Available migrations:'));
    console.info(listMigrations());
    process.exit(1);
  }
  if (!targetPath) {
    console.error(chalk.red('Error: Target path is required'));
    console.info(chalk.gray('Try "ds-cli migrate --help" for usage'));
    process.exit(1);
  }

  const sanitizedPath = normalize(resolve(targetPath));
  if (!sanitizedPath.startsWith(process.cwd())) {
    console.error(chalk.red('Error: Path must be within current directory'));
    process.exit(1);
  }

  try {
    const project = new Project();

    const excludePatterns = exclude
      ? Array.isArray(exclude)
        ? exclude.map((pattern) => `!${sanitizedPath}/**/${pattern}/**`)
        : [`!${sanitizedPath}/**/${exclude}/**`]
      : [];

    const sourceFiles = project.addSourceFilesAtPaths(
      [
        `${sanitizedPath}/**/*.{ts,tsx,js,jsx}`,
        `!${sanitizedPath}/**/node_modules/**`,
        ...excludePatterns,
      ].filter(Boolean)
    );

    if (sourceFiles.length === 0) {
      console.info(chalk.yellow('No files found to transform.'));
      return;
    }

    if (sourceFiles.length > 10000) {
      console.error(
        chalk.red('Error: Too many files to process safely (limit: 10,000)')
      );
      console.info(
        chalk.yellow(
          `Found ${sourceFiles.length} files. Consider using --exclude to reduce scope.`
        )
      );
      process.exit(1);
    }

    console.info(`Found ${sourceFiles.length} files to process.`);

    const transform = getTransform(migrationName);
    if (!transform) {
      console.error(`Migration "${migrationName}" not implemented.`);
      process.exit(1);
    }

    if (dry) {
      console.info(
        chalk.cyan('Running in dry mode - no files will be modified')
      );
    }

    const result = await transform.run(sourceFiles, { dry, exclude });

    console.info(`\n${chalk.green('Migration completed!')}`);
    console.info(`Files processed: ${result.filesProcessed}`);
    console.info(`Files changed: ${result.filesChanged}`);

    if (result.changes.length > 0) {
      console.info('\nChanges made:');
      result.changes.forEach(
        ({ file, changes }: { file: string; changes: string[] }) => {
          console.info(`\n${chalk.blue(file)}:`);
          changes.forEach((change: string) => console.info(`  • ${change}`));
        }
      );
    }

    if (!dry && result.filesChanged > 0) {
      await project.save();
      console.info(chalk.green('Changes saved to disk.'));
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(chalk.red(`Error running transform: ${errorMessage}`));
    process.exit(1);
  }
}
