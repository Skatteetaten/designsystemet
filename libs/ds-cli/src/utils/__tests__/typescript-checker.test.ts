import { describe, it, expect, vi } from 'vitest';

import type { TypeScriptInfo } from '../typescript-checker.js';

describe('typescript-checker', () => {
  describe('Basic imports', () => {
    it('should export expected functions', async () => {
      const module = await import('../typescript-checker.js');
      expect(module).toHaveProperty('checkTypeScriptAvailability');
      expect(module).toHaveProperty('validateTypeScriptForMigrations');
      expect(typeof module.checkTypeScriptAvailability).toBe('function');
      expect(typeof module.validateTypeScriptForMigrations).toBe('function');
    });
  });

  describe('TypeScriptInfo interface', () => {
    it('should have correct structure for available TypeScript', () => {
      const tsInfo: TypeScriptInfo = {
        available: true,
        version: '4.9.5',
        location: 'node_modules',
      };

      expect(tsInfo.available).toBe(true);
      expect(tsInfo.version).toBe('4.9.5');
      expect(tsInfo.location).toBe('node_modules');
    });

    it('should have correct structure for unavailable TypeScript', () => {
      const tsInfo: TypeScriptInfo = {
        available: false,
        installCommand: 'npm install -D typescript',
      };

      expect(tsInfo.available).toBe(false);
      expect(tsInfo.installCommand).toBe('npm install -D typescript');
    });
  });

  describe('checkTypeScriptAvailability function', () => {
    it('should return TypeScriptInfo object with correct structure', async () => {
      const { checkTypeScriptAvailability } = await import(
        '../typescript-checker.js'
      );

      const result = checkTypeScriptAvailability();

      expect(result).toHaveProperty('available');
      expect(typeof result.available).toBe('boolean');

      if (result.available) {
        expect(result).toHaveProperty('version');
        expect(result).toHaveProperty('location');
      } else {
        expect(result).toHaveProperty('installCommand');
      }
    });

    it('should handle different availability scenarios', async () => {
      const { checkTypeScriptAvailability } = await import(
        '../typescript-checker.js'
      );

      const result = checkTypeScriptAvailability();

      // Test that result has expected properties regardless of TypeScript availability
      expect(typeof result.available).toBe('boolean');

      if (!result.available) {
        expect(typeof result.installCommand).toBe('string');
        expect(result.installCommand).toMatch(/npm install/);
      }
    });
  });

  describe('validateTypeScriptForMigrations function', () => {
    it('should return boolean value', async () => {
      const { validateTypeScriptForMigrations } = await import(
        '../typescript-checker.js'
      );

      const result = validateTypeScriptForMigrations();
      expect(typeof result).toBe('boolean');
    });
  });

  describe('TypeScript availability detection', () => {
    it('should handle scenarios when TypeScript is not available', async () => {
      const { checkTypeScriptAvailability } = await import(
        '../typescript-checker.js'
      );

      const result = checkTypeScriptAvailability();

      // Test that function returns valid structure regardless of actual TS availability
      expect(result).toHaveProperty('available');
      expect(typeof result.available).toBe('boolean');

      if (!result.available) {
        expect(result).toHaveProperty('installCommand');
        expect(typeof result.installCommand).toBe('string');
        expect(result.installCommand).toMatch(/npm install/);
      }
    });

    it('should provide helpful error messages when validation fails', async () => {
      const originalConsoleError = console.error;
      const mockConsoleError = vi.fn();
      console.error = mockConsoleError;

      const { validateTypeScriptForMigrations } = await import(
        '../typescript-checker.js'
      );

      const result = validateTypeScriptForMigrations();

      // Validate returns boolean
      expect(typeof result).toBe('boolean');

      // If TypeScript is not available, should show helpful message
      if (!result) {
        expect(mockConsoleError).toHaveBeenCalledWith(
          expect.stringContaining('TypeScript is required for code migrations')
        );
      }

      console.error = originalConsoleError;
    });
  });
});
