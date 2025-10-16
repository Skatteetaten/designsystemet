import eslint from '@eslint/js';
import tseslintParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
//import sonarjsPlugin from 'eslint-plugin-sonarjs';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';

// nødvendig grunnet denne feilen: https://github.com/sindresorhus/globals/issues/239
const GLOBALS_BROWSER_FIX = {
  ...globals.browser,
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
};

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

export default [
  eslint.configs.recommended,
  //sonarjsPlugin.configs.recommended, TODO Denne har nå en del flere regler slått på fra reccomended. Vurdere å droppe denne hvis folk uansett har sonar-plugin i editor
  jsdoc.configs['flat/recommended-typescript-error'],

  {
    files: ['__tests__/**/*'],
    ...testingLibraryPlugin.configs['flat/react'],
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    plugins: {
      'testing-library': testingLibraryPlugin,
      'react-hooks': reactHooks,
      react: reactPlugin,
      import: importPlugin,
      jsdoc,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
      globals: {
        ...GLOBALS_BROWSER_FIX,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      //TODO nx setter allerede recommended regler fra reactHooks. burde vi bare arve derfra eller er det ønskelig å sette dette eksplisitt
      // Det er nok flere ting vi arver fra nx som er litt dobbelt opp, men nx sin config er ikke dokumentert så det er kronglete å lette fram reglene
      ...reactHooks.configs.recommended.rules,
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'always', children: 'always' },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          shorthandLast: true,
          callbacksLast: true,
          reservedFirst: ['key', 'ref'],
          ignoreCase: true,
          noSortAlphabetically: true,
        },
      ],
      'prefer-template': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['index'],
              message: 'Unnecessary use of index in import',
            },
          ],
        },
      ],
      'import/order': [
        'warn',
        {
          groups: ['external', 'internal', 'builtin', 'index'],
          pathGroups: [
            {
              pattern: '{react*,redux*}',
              group: 'external',
              position: 'before',
            },
            { pattern: '@skatteetaten/**', group: 'internal' },
            { pattern: './*.scss', group: 'sibling', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
      'jsdoc/require-jsdoc': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'jsx-a11y/no-access-key': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
