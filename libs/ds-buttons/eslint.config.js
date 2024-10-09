import nxPlugin from '@nx/eslint-plugin';

// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
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
