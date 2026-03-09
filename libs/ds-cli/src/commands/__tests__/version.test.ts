import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

import { handleVersion } from '../version.js';

const { mockReadFileSync, mockDirname, mockJoin } = vi.hoisted(() => ({
  mockReadFileSync: vi.fn(),
  mockDirname: vi.fn(),
  mockJoin: vi.fn(),
}));

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  return {
    ...actual,
    default: { ...actual, readFileSync: mockReadFileSync },
    readFileSync: mockReadFileSync,
  };
});

vi.mock('path', async (importOriginal) => {
  const actual = await importOriginal<typeof import('path')>();
  return {
    ...actual,
    default: { ...actual, dirname: mockDirname, join: mockJoin },
    dirname: mockDirname,
    join: mockJoin,
  };
});

describe('handleVersion', () => {
  const consoleSpy = vi.spyOn(console, 'info').mockImplementation(() => {
    /* no-op */
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockDirname.mockReturnValue('/mocked/dir');
    mockJoin.mockReturnValue('/mocked/dir/package.json');
  });

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it('should read package.json and output version', () => {
    const mockPackage = {
      name: '@skatteetaten/ds-cli',
      version: '1.2.3',
      description: 'Design system CLI',
    };
    mockReadFileSync.mockReturnValue(JSON.stringify(mockPackage));

    handleVersion();

    expect(mockReadFileSync).toHaveBeenCalledWith(
      '/mocked/dir/package.json',
      'utf8'
    );
    expect(consoleSpy).toHaveBeenCalledWith('1.2.3');
  });

  it('should handle semver version formats', () => {
    const testCases = ['2.1.0-beta.1', '1.0.0-alpha.2', '3.4.5', '0.1.0-rc.1'];

    testCases.forEach((version) => {
      vi.clearAllMocks();
      mockDirname.mockReturnValue('/mocked/dir');
      mockJoin.mockReturnValue('/mocked/dir/package.json');
      const mockPackage = { version };
      mockReadFileSync.mockReturnValue(JSON.stringify(mockPackage));

      handleVersion();

      expect(consoleSpy).toHaveBeenCalledWith(version);
    });
  });

  it('should handle file read errors gracefully', () => {
    mockReadFileSync.mockImplementation(() => {
      throw new Error('ENOENT: no such file or directory');
    });

    expect(() => handleVersion()).toThrow('ENOENT: no such file or directory');
  });

  it('should handle invalid JSON in package.json', () => {
    mockReadFileSync.mockReturnValue('invalid json content');

    expect(() => handleVersion()).toThrow();
  });

  it('should handle package.json without version field', () => {
    const mockPackage = { name: '@skatteetaten/ds-cli' }; // No version field
    mockReadFileSync.mockReturnValue(JSON.stringify(mockPackage));

    handleVersion();

    expect(consoleSpy).toHaveBeenCalledWith(undefined);
  });
});
