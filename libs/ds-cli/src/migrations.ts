import chalk from 'chalk';

export const migrations: {
  [key: string]: {
    description: string;
    value: string;
    path: string;
    warning?: string;
  }[];
} = {
  '2.0.0': [
    {
      description: 'Update TextField to new TextArea component',
      value: 'v2-textarea',
      path: 'v2.0.0/split-textfield-textarea/split-textfield-textarea.js',
    },
    {
      description: 'Alert: change variant "neutral" to "info"',
      value: 'v2-alert',
      path: 'v2.0.0/alert-remove-variant-neutral/alert-remove-variant-neutral.js',
    },
  ],
};

export function getMigrationPath(str: string): string | undefined {
  return Object.values(migrations)
    .flat()
    .find((x) => x.value === str)?.path;
}

export function getWarning(str: string): string | undefined {
  return Object.values(migrations)
    .flat()
    .find((x) => x.value === str)?.warning;
}

export function getMigrationNames(): string[] {
  return Object.values(migrations)
    .flat()
    .map((x) => x.value);
}

export function getMigrationString(): string {
  let str = '';

  Object.entries(migrations).forEach(([version, vMigrations]) => {
    str += `\n${chalk.underline(version)}\n`;
    vMigrations.forEach((migration) => {
      str += `${chalk.blue(migration.value)}: ${migration.description}\n`;
    });
  });

  return str;
}
