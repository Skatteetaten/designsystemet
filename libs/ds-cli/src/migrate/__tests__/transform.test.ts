import { SourceFile } from 'ts-morph';
import { describe, it, expect } from 'vitest';

import {
  BaseTransform,
  type TransformOptions,
  type TransformResult,
} from '../transform.js';

class TestTransform extends BaseTransform {
  name = 'test-transform';
  description = 'Test transform for unit testing';

  async run(
    sourceFiles: SourceFile[],
    _options: TransformOptions
  ): Promise<TransformResult> {
    const result = this.createResult();
    result.filesProcessed = sourceFiles.length;

    if (sourceFiles.length > 0) {
      this.logChange(result, 'test-file.ts', 'Updated component');
      result.filesChanged = 1;
    }

    return result;
  }
}

describe('transform', () => {
  describe('BaseTransform', () => {
    let transform: TestTransform;

    beforeEach(() => {
      transform = new TestTransform();
    });

    describe('createResult', () => {
      it('should create empty transform result', () => {
        const result = transform['createResult']();

        expect(result).toEqual({
          filesProcessed: 0,
          filesChanged: 0,
          changes: [],
        });
      });
    });

    describe('logChange', () => {
      it('should add new change entry when file not exists', () => {
        const result = transform['createResult']();

        transform['logChange'](result, 'file1.ts', 'First change');

        expect(result.changes).toHaveLength(1);
        expect(result.changes[0]).toEqual({
          file: 'file1.ts',
          changes: ['First change'],
        });
      });

      it('should append change to existing file entry', () => {
        const result = transform['createResult']();

        transform['logChange'](result, 'file1.ts', 'First change');
        transform['logChange'](result, 'file1.ts', 'Second change');

        expect(result.changes).toHaveLength(1);
        expect(result.changes[0]).toEqual({
          file: 'file1.ts',
          changes: ['First change', 'Second change'],
        });
      });

      it('should handle multiple files', () => {
        const result = transform['createResult']();

        transform['logChange'](result, 'file1.ts', 'Change in file 1');
        transform['logChange'](result, 'file2.ts', 'Change in file 2');

        expect(result.changes).toHaveLength(2);
        expect(result.changes[0].file).toBe('file1.ts');
        expect(result.changes[1].file).toBe('file2.ts');
      });
    });

    describe('run method implementation', () => {
      it('should process source files and return result', async () => {
        const mockSourceFiles = [
          { getFilePath: (): string => 'test.ts' },
        ] as any[];

        const result = await transform.run(mockSourceFiles, {});

        expect(result.filesProcessed).toBe(1);
        expect(result.filesChanged).toBe(1);
        expect(result.changes).toHaveLength(1);
        expect(result.changes[0].file).toBe('test-file.ts');
      });

      it('should handle empty source files array', async () => {
        const result = await transform.run([], {});

        expect(result.filesProcessed).toBe(0);
        expect(result.filesChanged).toBe(0);
        expect(result.changes).toHaveLength(0);
      });
    });
  });

  describe('Transform interfaces', () => {
    it('should have correct TransformOptions structure', () => {
      const options: TransformOptions = {
        dry: true,
        exclude: ['*.test.ts'],
      };

      expect(options.dry).toBe(true);
      expect(options.exclude).toEqual(['*.test.ts']);
    });

    it('should handle optional TransformOptions', () => {
      const options: TransformOptions = {};

      expect(options.dry).toBeUndefined();
      expect(options.exclude).toBeUndefined();
    });

    it('should have correct TransformResult structure', () => {
      const result: TransformResult = {
        filesProcessed: 5,
        filesChanged: 3,
        changes: [
          {
            file: 'component.ts',
            changes: ['Updated import', 'Fixed prop type'],
          },
        ],
      };

      expect(result.filesProcessed).toBe(5);
      expect(result.filesChanged).toBe(3);
      expect(result.changes[0].changes).toHaveLength(2);
    });
  });
});
