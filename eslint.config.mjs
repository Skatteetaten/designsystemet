import nx from '@nx/eslint-plugin';
import { fixupPluginRules } from '@eslint/compat';
import parser from 'jsonc-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/*', '**/node_modules'],
  },
  ...fixupPluginRules(
    compat.extends('./libs/ds-dev-config/config/designsystem-eslintrc.yml')
  ),
  {
    plugins: {
      '@nx': nx,
    },
  },
  {
    files: ['**/*.stories.tsx', '**/test-runner.ts'],

    rules: {
      'jest/no-standalone-expect': 'off',
      'sonarjs/no-identical-functions': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: [
      '**/__tests__/*.test.ts',
      '**/__tests__/*.test.tsx',
      '**/__tests__/*.test.stories.tsx',
      '**/__tests__/*.test.storiesof.stories.tsx',
      '**/*.stories.tsx',
    ],

    rules: {
      'sonarjs/no-duplicate-string': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],

    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],

          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],

      'sonarjs/cognitive-complexity': 'off',
    },
  },
  {
    files: ['**/*.json'],

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          buildTargets: ['build'],
          checkMissingDependencies: true,
          checkObsoleteDependencies: true,
          checkVersionMismatches: true,
          ignoredDependencies: ['@skatteetaten/ds-dev-config'],
          includeTransitiveDependencies: true,
        },
      ],
    },
  },
];
