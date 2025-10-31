export const AVAILABLE_MIGRATIONS = {
  V2_TEXTAREA: 'v2-textarea',
  V2_ALERT: 'v2-alert',
} as const;
export type MigrationName =
  (typeof AVAILABLE_MIGRATIONS)[keyof typeof AVAILABLE_MIGRATIONS];

export function isValidMigration(name: string): name is MigrationName {
  return Object.values(AVAILABLE_MIGRATIONS).includes(name as MigrationName);
}

export function listMigrations(): string {
  return Object.values(AVAILABLE_MIGRATIONS)
    .map((name) => `  ${name}`)
    .join('\n');
}
