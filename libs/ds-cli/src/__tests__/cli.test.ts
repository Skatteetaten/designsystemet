import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('CLI', () => {
  let originalConsoleLog: typeof console.log;
  let originalConsoleError: typeof console.error;
  let originalConsoleInfo: typeof console.info;
  let originalProcessExit: typeof process.exit;

  const mockConsoleLog = vi.fn();
  const mockConsoleError = vi.fn();
  const mockConsoleInfo = vi.fn();
  const mockProcessExit = vi.fn();

  beforeEach(() => {
    originalConsoleLog = console.log;
    originalConsoleError = console.error;
    originalConsoleInfo = console.info;
    originalProcessExit = process.exit;

    console.log = mockConsoleLog;
    console.error = mockConsoleError;
    console.info = mockConsoleInfo;
    process.exit = mockProcessExit as any;

    vi.clearAllMocks();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
    console.info = originalConsoleInfo;
    process.exit = originalProcessExit;
  });

  describe('CLI module exports', () => {
    it('should export all required functions and constants', async () => {
      const cliModule = await import('../cli.js');

      expect(cliModule).toHaveProperty('createCLI');
      expect(cliModule).toHaveProperty('createMigrateCLI');
      expect(cliModule).toHaveProperty('validateFlagCombinations');
      expect(cliModule).toHaveProperty('runCLI');
      expect(cliModule).toHaveProperty('CLI_HELP');
      expect(cliModule).toHaveProperty('MIGRATE_HELP');

      expect(typeof cliModule.createCLI).toBe('function');
      expect(typeof cliModule.validateFlagCombinations).toBe('function');
      expect(typeof cliModule.runCLI).toBe('function');
    });
  });

  describe('validateFlagCombinations', () => {
    it('should exit with error when --help and --version are used together', async () => {
      const { createCLI, validateFlagCombinations } = await import('../cli.js');

      // Mock a CLI with conflicting flags
      const mockCLI = {
        input: [],
        flags: { help: true, version: true },
      } as any;

      validateFlagCombinations(mockCLI);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error: Cannot use --help and --version together'
      );
      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should exit with error when --version is used with a command', async () => {
      const { validateFlagCombinations } = await import('../cli.js');

      const mockCLI = {
        input: ['migrate'],
        flags: { version: true },
      } as any;

      validateFlagCombinations(mockCLI);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error: --version flag cannot be used with commands'
      );
      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should exit with error when --list is used without migrate command', async () => {
      const { validateFlagCombinations } = await import('../cli.js');

      const mockCLI = {
        input: ['version'],
        flags: { list: true },
      } as any;

      validateFlagCombinations(mockCLI);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error: --list flag can only be used with migrate command'
      );
      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should exit with error when --dry is used without migrate command', async () => {
      const { validateFlagCombinations } = await import('../cli.js');

      const mockCLI = {
        input: ['version'],
        flags: { dry: true },
      } as any;

      validateFlagCombinations(mockCLI);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error: --dry flag can only be used with migrate command'
      );
      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should exit with error when --list is combined with --dry in migrate command', async () => {
      const { validateFlagCombinations } = await import('../cli.js');

      const mockCLI = {
        input: ['migrate'],
        flags: { list: true, dry: true },
      } as any;

      validateFlagCombinations(mockCLI);

      expect(mockConsoleError).toHaveBeenCalledWith(
        'Error: --list cannot be combined with --dry or --exclude flags'
      );
      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should pass validation for valid flag combinations', async () => {
      const { validateFlagCombinations } = await import('../cli.js');

      const validCombinations = [
        { input: [], flags: { help: true } },
        { input: [], flags: { version: true } },
        { input: ['migrate'], flags: { dry: true } },
        { input: ['migrate'], flags: { list: true } },
        { input: ['version'], flags: {} },
      ];

      validCombinations.forEach((mockCLI) => {
        vi.clearAllMocks();

        // Should not call process.exit for valid combinations
        validateFlagCombinations(mockCLI as any);
        expect(mockProcessExit).not.toHaveBeenCalled();
      });
    });
  });

  describe('createMigrateCLI', () => {
    it('should create migrate CLI with correct structure', async () => {
      const { createMigrateCLI } = await import('../cli.js');

      const mockCLI = {
        input: ['migrate', 'v2-alert', 'src/'],
        flags: { list: true, dry: false, exclude: ['*.test.js'] },
      } as any;

      const migrateCLI = createMigrateCLI(mockCLI);

      expect(migrateCLI.input).toEqual(['v2-alert', 'src/']);
      expect(migrateCLI.flags).toEqual({
        list: true,
        dry: false,
        exclude: ['*.test.js'],
      });
      expect(typeof migrateCLI.showHelp).toBe('function');
    });

    it('should handle undefined flags gracefully', async () => {
      const { createMigrateCLI } = await import('../cli.js');

      const mockCLI = {
        input: ['migrate'],
        flags: {},
      } as any;

      const migrateCLI = createMigrateCLI(mockCLI);

      expect(migrateCLI.flags).toEqual({
        list: false,
        dry: false,
        exclude: [],
      });
    });
  });

  describe('Help text constants', () => {
    it('should contain expected CLI help content', async () => {
      const { CLI_HELP, MIGRATE_HELP } = await import('../cli.js');

      expect(CLI_HELP).toContain('Skatteetatens Designsystem CLI');
      expect(CLI_HELP).toContain('migrate <name> <path>');
      expect(CLI_HELP).toContain('version');

      expect(MIGRATE_HELP).toContain('migrate - Apply code transformations');
      expect(MIGRATE_HELP).toContain('--list, -l');
      expect(MIGRATE_HELP).toContain('--dry, -d');
      expect(MIGRATE_HELP).toContain('--exclude, -e');
    });
  });
});
