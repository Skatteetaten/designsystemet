import noInlineStyles from 'eslint-plugin-no-inline-styles';
import parser from 'jsonc-eslint-parser';
import devConfig from './libs/ds-dev-config/config/designsystem-eslint.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
  {
    ignores: ['**/node_modules'],
  },
  ...fixupConfigRules(devConfig),
  {
    plugins: {
      // '@nx': nx,
      'no-inline-styles': noInlineStyles,
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
      'no-inline-styles/no-inline-styles': 2,
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
