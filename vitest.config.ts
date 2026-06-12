import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { UserConfig } from 'vite';
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
          storybookTest({
            configDir: path.join(dirname, 'apps/ds-playground/.storybook'),
            storybookUrl: 'http://127.0.0.1:4400',
          }),
          // Workaround: addon-vitest 10.2.13 sets root to the storybook project dir
          // but generates include/exclude globs relative to the workspace root,
          // causing a doubled path. This post-order plugin overrides root back.
          {
            name: 'fix-storybook-root',
            config: {
              order: 'post' as const,
              handler: (): UserConfig => ({ root: dirname }),
            },
          },
        ],
        test: {
          name: 'storybook',
          exclude: ['apps/ds-playground/src/stories/**/!(*.test).stories.tsx'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
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
