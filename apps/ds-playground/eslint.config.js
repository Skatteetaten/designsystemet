import nxPlugin from '@nx/eslint-plugin';
import storybookPlugin from 'eslint-plugin-storybook';

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
  {
    files: ['**/*.stories.tsx', '**/test-runner.ts'],
    rules: {
      'jest/no-standalone-expect': 'off',
      //'sonarjs/no-identical-functions': 'off',
      /* CSF-3 render() funksjoner oppdages ikke som react-komponenter */
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
