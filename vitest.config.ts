import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { defineConfig } from 'vitest/config';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  },
  test: {
    passWithNoTests: true,
    watch: false,
    coverage: {
      reporter: ['json'],
      reportsDirectory: 'coverage/storybook',
      provider: 'v8' as const,
    },
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          //TODO bedre config av tags. Exclude vs skip
          storybookTest({
            configDir: path.join(dirname, 'apps/ds-playground/.storybook'),
            storybookUrl: 'http://127.0.0.1:4400',
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          globals: false,
          setupFiles: ['apps/ds-playground/.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
