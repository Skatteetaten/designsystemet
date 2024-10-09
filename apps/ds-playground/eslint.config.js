import nxPlugin from '@nx/eslint-plugin';
import storybookPlugin from 'eslint-plugin-storybook';

// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
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
  {
    files: ['**/*.test.stories.tsx'],
    rules: {
      'testing-library/no-await-sync-events': 'off',
    },
  },
  //TODO hvorfor må jeg ha denne her når den allerede ligger i rotnivå
  {
    files: ['**/*.stories.tsx', '**/test-runner.ts'],
    rules: {
      'jest/no-standalone-expect': 'off',
      //'sonarjs/no-identical-functions': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
