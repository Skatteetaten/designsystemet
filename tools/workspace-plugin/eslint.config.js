import nxPlugin from '@nx/eslint-plugin';
import parser from 'jsonc-eslint-parser';

// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
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
    files: ['./package.json', './generators.json'],

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
  },
];
