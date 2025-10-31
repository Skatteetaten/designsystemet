import chalk from 'chalk';

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { createRequire } from 'module';
import { resolve } from 'path';

// Create require function for ESM
const require = createRequire(import.meta.url);

export interface TypeScriptInfo {
  available: boolean;
  version?: string;
  location?: string;
  installCommand?: string;
}

export function checkTypeScriptAvailability(): TypeScriptInfo {
  // Check 1: Try to resolve typescript directly
  try {
    require.resolve('typescript');
    const ts = require('typescript');
    return {
      available: true,
      version: ts.version,
      location: 'node_modules',
    };
  } catch (error) {
    // TypeScript not available locally
  }

  // Check 2: Check global TypeScript installation
  try {
    const version = execSync('tsc --version', {
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 5000,
    }).trim();

    return {
      available: true,
      version: version.replace('Version ', ''),
      location: 'global',
    };
  } catch (error) {
    // Not available globally either
  }

  // Check 3: Check if npx can find it
  try {
    const version = execSync('npx tsc --version', {
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 10000,
    }).trim();

    return {
      available: true,
      version: version.replace('Version ', ''),
      location: 'npx',
    };
  } catch (error) {
    // Not available via npx
  }

  // Suggest installation options
  return {
    available: false,
    installCommand: getInstallCommand(),
  };
}

function getInstallCommand(): string {
  // Check if in npm project
  if (existsSync(resolve(process.cwd(), 'package.json'))) {
    return 'npm install -D typescript';
  }

  // Default to global install
  return 'npm install -g typescript';
}

export function validateTypeScriptForMigrations(): boolean {
  const tsInfo = checkTypeScriptAvailability();

  if (tsInfo.available) {
    return true;
  }

  console.error(
    chalk.yellow(` TypeScript is required for code migrations but was not found.

 To install TypeScript:
   ${tsInfo.installCommand}

 Or use npx (no installation required):
   npx ds-cli migrate <migration> <path>
   
 Why TypeScript? Code migrations need to parse and transform TypeScript/JSX syntax safely.
`)
  );

  return false;
}
