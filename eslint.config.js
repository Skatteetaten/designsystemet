import nxPlugin from '@nx/eslint-plugin';
import reactCompiler from 'eslint-plugin-react-compiler';
import parser from 'jsonc-eslint-parser';

import devConfig from './libs/ds-dev-config/config/designsystem-eslint.js';

export default [
  ...nxPlugin.configs['flat/base'],
  ...nxPlugin.configs['flat/typescript'],
  ...nxPlugin.configs['flat/javascript'],
  reactCompiler.configs.recommended,
  ...devConfig,
  {
    ignores: [
      '**/.*',
      '**/node_modules/*',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    plugins: {},
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
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],

          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'react/forbid-component-props': ['error', { forbid: ['style'] }],
      'react/forbid-dom-props': ['error', { forbid: ['style'] }],
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
