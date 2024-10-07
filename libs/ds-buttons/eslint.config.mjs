import baseConfig from '../../eslint.config.mjs';

export default [
  baseConfig,
  {
    ignores: ['!**/*', '**/storybook-static'],
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
