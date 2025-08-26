import nxPlugin from '@nx/eslint-plugin';
import storybookPlugin from 'eslint-plugin-storybook';

import baseConfig from '../../eslint.config.js';

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
  ...storybookPlugin.configs['flat/recommended'],
  {
    rules: {
      'storybook/no-uninstalled-addons': [
        'error',
        {
          ignore: ['@nx/react/plugins/storybook'],
          packageJsonLocation: '../.././package.json',
        },
      ],
    },
  },
  {
    ignores: ['src/puppeteer.d.ts', '!.storybook'],
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
    files: ['**/*.stories.tsx'],
    rules: {
      'jest/no-standalone-expect': 'off',
      //'sonarjs/no-identical-functions': 'off',
      /* CSF-3 render() funksjoner oppdages ikke som react-komponenter */
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
