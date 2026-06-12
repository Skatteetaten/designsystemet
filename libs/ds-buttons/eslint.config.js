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
    ignores: ['!**/*', '**/storybook-static'],
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    ignores: ['!**/*', '**/storybook-static'],
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    ignores: ['!**/*', '**/storybook-static'],
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
];
