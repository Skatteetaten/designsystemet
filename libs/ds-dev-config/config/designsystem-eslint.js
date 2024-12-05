import eslint from '@eslint/js';
import tseslintParser from '@typescript-eslint/parser';
import jestPlugin from 'eslint-plugin-jest';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';

// nødvendig grunnet denne feilen: https://github.com/sindresorhus/globals/issues/239
const GLOBALS_BROWSER_FIX = {
  ...globals.browser,
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
};

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

//TODO rydde vekk alt som ikke er i bruk
//TODO gå gjennom alle plugins og se om de tilbyr flat config
export default [
  //...nxPlugin.configs['flat/react'],
  //...nxPlugin.configs['flat/react-typescript'],
  eslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      jest: jestPlugin,
      'jest-dom': jestDomPlugin,
      'testing-library': testingLibraryPlugin,
      sonarjs: sonarjsPlugin,
      jsdoc: jsdocPlugin,
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
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      jest: {
        version: 29,
      },
    },

    rules: {
      //...reactPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      ...jestPlugin.configs.style.rules,
      ...jestDomPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs['react'].rules,
      //...sonarjsPlugin.configs.recommended.rules,
      ...jsdocPlugin.configs.recommended.rules,
      //...reactHooks.configs.recommended.rules,
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
            { pattern: '{@designsystem/**}', group: 'internal' },
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
