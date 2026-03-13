import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const browserslistPath = path.resolve(configDir, '../../.browserslistrc');

const browsers = readFileSync(browserslistPath, 'utf8')
  .split(/\r?\n/u)
  .map((line) => line.trim())
  .filter((line) => line.length > 0 && !line.startsWith('#'));

export default {
  overrides: [
    {
      files: ['../../**/*.css'],
      plugins: ['stylelint-no-unsupported-browser-features'],
      rules: {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers,
            ignorePartialSupport: true,
          },
        ],
      },
    },
  ],
};
