#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const config = JSON.parse(
  readFileSync(join(process.cwd(), 'config/codemod.config.json'), 'utf8')
);

const [, , codemodName, ...restArgs] = process.argv;

if (config.codemods[codemodName]) {
  const transformPath = config.codemods[codemodName];
  const args = [
    `-s ${transformPath} --engine jscodeshift --format true -t`,
    ...restArgs,
  ].join(' ');

  execSync(`npx codemod ${args}`, { stdio: 'inherit' });
} else {
  console.error(`Codemod "${codemodName}" not found in configuration.`);
  process.exit(1);
}
