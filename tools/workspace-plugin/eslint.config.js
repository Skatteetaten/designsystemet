import nxPlugin from '@nx/eslint-plugin';
import parser from 'jsonc-eslint-parser';

// eslint-disable-next-line @nx/enforce-module-boundaries
import baseConfig from '../../eslint.config.js';

//TODO rydde
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const compat = new FlatCompat({
//  baseDirectory: __dirname,
//  recommendedConfig: js.configs.recommended,
//  allConfig: js.configs.all,
//});

export default [
  ...baseConfig,
  ...nxPlugin.configs['flat/react'],
  {
    ignores: ['!**/*'],
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
  {
    files: ['./package.json', './generators.json'],

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
  },
];
