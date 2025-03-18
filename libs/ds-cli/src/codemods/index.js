#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const [, , codemodName, ...restArgs] = process.argv;
const transformPath = join(__dirname, `transforms/${codemodName}.js`);

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
