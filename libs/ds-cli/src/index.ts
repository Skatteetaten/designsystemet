#!/usr/bin/env node
import chalk from 'chalk';

import { execSync } from 'child_process';
import fs from 'fs';
import { dirname, join } from 'path';

import { helpCommand } from './help';
import { getMigrationPath, getMigrationString } from './migrations';

run();

async function run(): Promise<void> {
  const __dirname = dirname(new URL(import.meta.url).pathname);

  if (!process.argv[2] || process.argv[2] === 'help') {
    helpCommand();
    return;
  }

  if (process.argv[2] === 'codemod') {
    if (process.argv[3] === '--list' || process.argv[3] === '-l') {
      console.info('Available codemods:');
      console.info(getMigrationString());
      return;
    }

    if (process.argv[3] === '--help' || !process.argv[3]) {
      console.info(
        `Usage: npx @skatteetaten/ds-cli ${chalk.green('codemod')} ${chalk.gray('<migration_name> <path>')}
  Options:
  ${chalk.green('--dry, -d')}      Run without making any changes
  ${chalk.green('--exclude, -e')}  Exclude files or folders
  ${chalk.green('--list, -l')}  List available codemods
`
      );

      return;
    }
    // run codemod
    const [, , , codemodName, ...restArgs] = process.argv;

    const transformPath = join(
      __dirname,
      'src/codemods/transforms',
      getMigrationPath(codemodName) ?? ''
    );

    if (!transformPath) {
      console.error(`Codemod "${codemodName}" not found in configuration.`);
      process.exit(1);
    }

    if (fs.existsSync(transformPath)) {
      const args = [
        `-s ${transformPath} --engine jscodeshift --format true -t`,
        ...restArgs,
      ].join(' ');

      execSync(`npx codemod ${args}`, { stdio: 'inherit' });
    } else {
      console.error(`Codemod "${codemodName}" not found in configuration.`);
      process.exit(1);
    }
    return;
  }

  if (process.argv[2] === '-v' || process.argv[2] === '--version') {
    const packagePath = join(__dirname, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath).toString()).version;
    console.info(pkg);
    return;
  }

  console.info(
    chalk.red(
      `Unknown command: ${process.argv[2]}.\nRun ${chalk.cyan(
        'npx @skatteetaten/ds-cli help'
      )} for all available commands.`
    )
  );
}
