import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

import * as fs from 'node:fs';
import * as path from 'node:path';

import { handleVersion } from '../version.js';

vi.mock('fs');
vi.mock('path');

describe('handleVersion', () => {
  const consoleSpy = vi.spyOn(console, 'info').mockImplementation(() => {
    /* no-op */
  });
  const mockReadFileSync = vi.mocked(fs.readFileSync);
  const mockDirname = vi.mocked(path.dirname);
  const mockJoin = vi.mocked(path.join);

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
