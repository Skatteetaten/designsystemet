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
  passWithNoTests: true,
  optimizeDeps: {
    include: ['react/jsx-dev-runtime'],
  },
  test: {
    passWithNoTests: true,
    watch: false,
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
          passWithNoTests: true,
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            api: {
              //port: 13337,
              // host: 'host.docker.internal',
            },
            instances: [
              {
                browser: 'chromium',
                // connect: {
                //   wsEndpoint: 'ws://127.0.0.1:3000/playwright',
                //   exposeNetwork: '*',
                // },
                // context: {
                //   baseURL: 'http://host.docker.internal:63315',
                // },
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
