// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
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
