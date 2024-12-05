import nxPlugin from '@nx/eslint-plugin';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import parser from 'jsonc-eslint-parser';
import devConfig from './libs/ds-dev-config/config/designsystem-eslint.js';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';

export default [
  ...nxPlugin.configs['flat/base'],
  ...nxPlugin.configs['flat/typescript'],
  ...nxPlugin.configs['flat/javascript'],
  ...fixupConfigRules(devConfig),
  {
    ignores: ['**/.*', '**/node_modules/*'],
  },
  {
    plugins: {
      'no-inline-styles': fixupPluginRules(noInlineStyles),
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
      //TODO sonarjs
      //'sonarjs/no-duplicate-string': 'off',
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
      //'sonarjs/cognitive-complexity': 'off',
      //'sonarjs/jsx-no-constructed-context-values': 'warn',
      //'sonarjs/no-array-index-key': 'warn',
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
          ignoredDependencies: [
            '@skatteetaten/ds-dev-config',
            '@nx/eslint-plugin',
          ],
          includeTransitiveDependencies: true,
        },
      ],
    },
  },
];
