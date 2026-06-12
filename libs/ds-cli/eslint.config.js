import nxPlugin from '@nx/eslint-plugin';
import compat from 'eslint-plugin-compat';
import parser from 'jsonc-eslint-parser';

import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
  {
    ...compat.configs['flat/recommended'],
    files: ['**/*.{ts,tsx,js,jsx}'],
  },
  {
    ignores: ['!**/*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.json'],

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@nx/dependency-checks': ['off'],
    },
  },
];
