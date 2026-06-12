import nxPlugin from '@nx/eslint-plugin';
import compat from 'eslint-plugin-compat';

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
];
