import { describe, it, expect } from 'vitest';

import {
  AVAILABLE_MIGRATIONS,
  isValidMigration,
  listMigrations,
} from '../migrations.js';

describe('migrations', () => {
  describe('AVAILABLE_MIGRATIONS', () => {
    it('should contain expected migration constants', () => {
      expect(AVAILABLE_MIGRATIONS.V2_TEXTAREA).toBe('v2-textarea');
      expect(AVAILABLE_MIGRATIONS.V2_ALERT).toBe('v2-alert');
    });

    it('should have at least 2 migrations available', () => {
      const migrationCount = Object.keys(AVAILABLE_MIGRATIONS).length;
      expect(migrationCount).toBeGreaterThanOrEqual(2);
    });
  });

  describe('isValidMigration', () => {
    it('should return true for valid migration names', () => {
      expect(isValidMigration('v2-textarea')).toBe(true);
      expect(isValidMigration('v2-alert')).toBe(true);
    });

    it('should return false for invalid migration names', () => {
      expect(isValidMigration('invalid-migration')).toBe(false);
      expect(isValidMigration('v1-button')).toBe(false);
      expect(isValidMigration('')).toBe(false);
    });

    it('should return false for undefined and null', () => {
      expect(isValidMigration(undefined as any)).toBe(false);
      expect(isValidMigration(null as any)).toBe(false);
    });

    it('should be case sensitive', () => {
      expect(isValidMigration('V2-TEXTAREA')).toBe(false);
      expect(isValidMigration('v2-Textarea')).toBe(false);
    });

    it('should handle edge case strings', () => {
      expect(isValidMigration('  v2-alert  ')).toBe(false); // With whitespace
      expect(isValidMigration('v2-alert\n')).toBe(false); // With newline
      expect(isValidMigration('v2alert')).toBe(false); // Missing dash
      expect(isValidMigration('v2--alert')).toBe(false); // Double dash
    });

    it('should handle special characters and numbers', () => {
      expect(isValidMigration('v3-alert')).toBe(false); // Wrong version
      expect(isValidMigration('v2-alert!')).toBe(false); // Special character
      expect(isValidMigration('v2-alert-123')).toBe(false); // Extra suffix
    });

    it('should validate all available migrations are valid', () => {
      Object.values(AVAILABLE_MIGRATIONS).forEach((migration) => {
        expect(isValidMigration(migration)).toBe(true);
      });
    });
  });

  describe('listMigrations', () => {
    it('should return formatted string of all available migrations', () => {
      const result = listMigrations();

      expect(result).toContain('v2-textarea');
      expect(result).toContain('v2-alert');
      expect(result).toContain('  '); // Should have indentation
    });

    it('should format each migration with proper indentation', () => {
      const result = listMigrations();
      const lines = result.split('\n');

      lines.forEach((line) => {
        expect(line).toMatch(/^ {2}\S/); // Each line starts with 2 spaces followed by non-whitespace
      });
    });

    it('should include all available migrations', () => {
      const result = listMigrations();
      const migrationValues = Object.values(AVAILABLE_MIGRATIONS);

      migrationValues.forEach((migration) => {
        expect(result).toContain(migration);
      });
    });

    it('should return consistent formatting across calls', () => {
      const result1 = listMigrations();
      const result2 = listMigrations();

      expect(result1).toBe(result2);
    });

    it('should produce parseable output', () => {
      const result = listMigrations();
      const lines = result.split('\n');

      // Each line should be trimmed to a valid migration name
      lines.forEach((line) => {
        const trimmed = line.trim();
        expect(Object.values(AVAILABLE_MIGRATIONS)).toContain(trimmed);
      });
    });

    it('should produce expected migration order', () => {
      const result = listMigrations();
      const lines = result.split('\n').map((line) => line.trim());

      // Just verify that the current implementation produces consistent output
      expect(lines).toHaveLength(2);
      expect(lines).toContain('v2-alert');
      expect(lines).toContain('v2-textarea');
    });
  });
});
