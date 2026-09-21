/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import svgr from '@svgr/rollup';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import mdx from 'fumadocs-mdx/vite';
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript';
import * as MdxConfig from './source.config';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const workspaceRoot = resolve(rootDir, '../..');

export default defineConfig(() => ({
  root: import.meta.dirname,
  base: '/designsystemet/',
  cacheDir: '../../node_modules/.vite/apps/ds-docs',
  server: {
    port: 3000,
    host: 'localhost',
  },
  preview: {
    port: 3000,
    host: 'localhost',
  },
  plugins: [
    mdx(MdxConfig, {
      configPath: resolve(rootDir, 'source.config.ts'),
      outDir: resolve(rootDir, '.source'),
    }),
    !process.env.VITEST && reactRouter(),
    svgr(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    reactDocgenTypescript({
      tsconfigPath: resolve(rootDir, 'tsconfig.json'),
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: () => true,
      include: [
        resolve(workspaceRoot, 'libs/**/src/**/*.tsx'),
        resolve(rootDir, 'app/**/*.tsx'),
        resolve(rootDir, 'content/**/*.tsx'),
      ],
      exclude: [
        '**/*.stories.tsx',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        '**/__tests__/**',
        '**/ds-icons/src/SystemIcons/**',
        '**/ds-icons/src/ThemeIcons/**',
      ],
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //   plugins: () => [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/ds-docs',
    emptyOutDir: true,
    reportCompressedSize: true,
    // Work around https://github.com/vitejs/vite/issues/3924, which reverses
    // component and consumer CSS order when CSS is split across chunks.
    cssCodeSplit: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [resolve(import.meta.dirname, '../..')],
      },
    },
  },
  test: {
    name: 'ds-docs',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: [
      '{src,__tests__}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/ds-docs',
      provider: 'v8' as const,
    },
  },
}));
