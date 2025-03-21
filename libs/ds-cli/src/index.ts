#!/usr/bin/env node
import chalk from 'chalk';

import { execSync } from 'child_process';
import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { helpCommand } from './help';

run();

async function run(): Promise<void> {
  if (!process.argv[2] || process.argv[2] === 'help') {
    helpCommand();
    return;
  }

  if (process.argv[2] === 'codemod') {
    if (process.argv[3] === '--help' || !process.argv[3]) {
      console.info(
        `Usage: npx @skatteetaten/ds-cli ${chalk.green('codemod')} ${chalk.gray('<migration_name> <path>')}
  Options:
  ${chalk.green('--dry, -d')}      Run without making any changes
  ${chalk.green('--exclude, -e')}  Exclude files or folders
`
      );

      return;
    }
    // run codemod
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const [, , , codemodName, ...restArgs] = process.argv;
    const transformPath = join(
      __dirname,
      `src/codemods/transforms/${codemodName}.js`
    );

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
    const pkg = JSON.parse(
      fs.readFileSync('./package.json').toString()
    ).version;
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
