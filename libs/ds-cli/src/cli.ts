#!/usr/bin/env node
import meow from 'meow';

import { handleMigrate } from './commands/migrate.js';
import { handleVersion } from './commands/version.js';
import { listMigrations } from './migrate/migrations.js';

export const CLI_HELP = `
  Skatteetatens Designsystem CLI

  Usage
    $ ds-cli <command> [options]

  Commands
    migrate <name> <path>       Apply code transformation
    version                     Show version

  Global Options
    --help, -h                  Show help for command

  Examples
    $ ds-cli migrate --help
    $ ds-cli migrate --list
    $ ds-cli migrate v2-textarea src/
    $ ds-cli migrate v2-alert src/ --dry
`;

export const MIGRATE_HELP = `
  migrate - Apply code transformations

  Usage
    $ ds-cli migrate <migration_name> <path> [options]

  Arguments
    <migration_name>        Name of migration (use --list to see available)
    <path>                  Path to transform

  Options
    --list, -l              List available migrations
    --dry, -d               Preview changes without applying
    --exclude, -e <pattern> Exclude files/folders (can be used multiple times)

  Examples
    $ ds-cli migrate --list
    $ ds-cli migrate v2-alert src/
    $ ds-cli migrate v2-textarea src/ --dry
    $ ds-cli migrate v2-alert src/ --exclude "*.test.js" --exclude node_modules
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createCLI(importMeta: ImportMeta) {
  return meow(CLI_HELP, {
    importMeta,
    autoHelp: false,
    autoVersion: false,
    allowUnknownFlags: false,
    booleanDefault: undefined,
    flags: {
      help: {
        type: 'boolean',
        shortFlag: 'h',
      },
      version: {
        type: 'boolean',
        shortFlag: 'v',
      },
      // Migrate-specific flags (allowed at root level for parsing)
      list: {
        type: 'boolean',
        shortFlag: 'l',
      },
      dry: {
        type: 'boolean',
        shortFlag: 'd',
      },
      exclude: {
        type: 'string',
        shortFlag: 'e',
        isMultiple: true,
      },
    },
  });
}

export type CLI = ReturnType<typeof createCLI>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createMigrateCLI(cli: CLI) {
  return {
    input: cli.input.slice(1), // Remove command from input
    flags: {
      list: cli.flags.list || false,
      dry: cli.flags.dry || false,
      exclude: cli.flags.exclude || [],
    },
    help: MIGRATE_HELP,
    showHelp: (): void => {
      console.log(MIGRATE_HELP);
      process.exit(0);
    },
  };
}

export type MigrateCLI = ReturnType<typeof createMigrateCLI>;

// Validate flag combinations before processing
export function validateFlagCombinations(cli: CLI): void {
  const [command] = cli.input;

  // Check for conflicting global flags
  if (cli.flags.help && cli.flags.version) {
    console.error('Error: Cannot use --help and --version together');
    process.exit(1);
  }

  // Check if global flags are used with commands
  if (cli.flags.version && command) {
    console.error('Error: --version flag cannot be used with commands');
    console.log('Use "ds-cli --version" without any command');
    process.exit(1);
  }

  // Check migrate-specific flag usage without migrate command
  if (command !== 'migrate') {
    if (cli.flags.list) {
      console.error('Error: --list flag can only be used with migrate command');
      process.exit(1);
    }
    if (cli.flags.dry) {
      console.error('Error: --dry flag can only be used with migrate command');
      process.exit(1);
    }
    if (cli.flags.exclude && cli.flags.exclude.length > 0) {
      console.error(
        'Error: --exclude flag can only be used with migrate command'
      );
      process.exit(1);
    }
  }

  // Check migrate command specific flag combinations
  if (command === 'migrate') {
    if (
      cli.flags.list &&
      (cli.flags.dry || (cli.flags.exclude && cli.flags.exclude.length > 0))
    ) {
      console.error(
        'Error: --list cannot be combined with --dry or --exclude flags'
      );
      console.log(
        'Use "ds-cli migrate --list" by itself to see available migrations'
      );
      process.exit(1);
    }
  }
}

export async function runCLI(cli: CLI): Promise<void> {
  const [command] = cli.input;
  const migrateCli = createMigrateCLI(cli);

  validateFlagCombinations(cli);

  // Handle global flags first
  if (cli.flags.help && !command) {
    console.log(CLI_HELP);
    process.exit(0);
  }

  if (cli.flags.version && !command) {
    handleVersion();
    process.exit(0);
  }

  switch (command) {
    case 'migrate': {
      // Show migrate help if requested
      if (cli.flags.help) {
        console.log(MIGRATE_HELP);
        process.exit(0);
      }

      // Show migration list if requested
      if (migrateCli.flags.list) {
        console.info('Available migrations:');
        console.info(listMigrations());
        process.exit(0);
      }

      await handleMigrate(migrateCli);
      break;
    }

    case 'version':
      handleVersion();
      break;
    default:
      if (!command) {
        console.log(CLI_HELP);
        process.exit(0);
      } else {
        console.error(`Unknown command: ${command}`);
        console.log(CLI_HELP);
        process.exit(1);
      }
  }
}

// Only run CLI if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const cli = createCLI(import.meta);
  runCLI(cli);
}
