import { Project } from 'ts-morph';
import { describe, it, expect } from 'vitest';

import fs from 'node:fs';
import path from 'node:path';

import { TextFieldTextAreaTransform } from '../textfieldTextarea.js';

const fixturesDir = path.join(__dirname, '../__testfixtures__');

const testCases = [
  'textfield-as-textarea-change-component',
  'textfield-and-textarea-in-same-file',
];

describe('TextFieldTextAreaTransform', () => {
  testCases.forEach((testCase) => {
    it(`should transform ${testCase}`, async () => {
      const inputPath = path.join(fixturesDir, `${testCase}.input.js`);
      const outputPath = path.join(fixturesDir, `${testCase}.output.js`);

      const inputCode = fs.readFileSync(inputPath, 'utf-8');
      const expectedOutput = fs.readFileSync(outputPath, 'utf-8');

      const project = new Project({
        useInMemoryFileSystem: true,
        compilerOptions: {
          jsx: 1,
          allowJs: true,
        },
      });

      const sourceFile = project.createSourceFile('test.js', inputCode);

      const transform = new TextFieldTextAreaTransform();
      const result = await transform.run([sourceFile], { dry: false });

      const transformedCode = sourceFile.getFullText();

      const normalizeCode = (code: string): string =>
        code.trim().replace(/\s+/g, ' ').replace(/;\s*}/g, '; }');

      expect(normalizeCode(transformedCode)).toBe(
        normalizeCode(expectedOutput)
      );

      expect(result.filesProcessed).toBe(1);
      if (
        testCase.includes('change-component') ||
        testCase.includes('same-file')
      ) {
        expect(result.filesChanged).toBe(1);
        expect(result.changes.length).toBeGreaterThan(0);
      }
    });
  });
});
