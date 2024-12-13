import nxPlugin from '@nx/eslint-plugin';

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
];
