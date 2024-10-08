// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';
import storybookPlugin from 'eslint-plugin-storybook';

export default [
  ...baseConfig,
  {
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['./.storybook/main.js', './.storybook/main.ts'],
    rules: {
      'no-uninstalled-addons': [
        'error',
        {
          ignore: ['@nx/react/plugins/storybook'],
        },
      ],
    },
  },
  {
    ignores: ['src/puppeteer.d.ts'],
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    ignores: ['src/puppeteer.d.ts'],
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
];
