import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { StorybookConfig } from '@storybook/react-vite';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';

import { readdirSync, readFileSync } from 'fs';
import path from 'node:path';
import { join } from 'path';

const readJsonFile = (path: string): Record<string, string> => {
  const file = readFileSync(path, 'utf8');
  return JSON.parse(file);
};
const getDirectories = (source: string): Array<string> =>
  readdirSync(source, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const directories = getDirectories('./libs');
const packageVersions = directories.reduce((previousValue, currentValue) => {
  const json = readJsonFile(path.resolve('libs', currentValue, 'package.json'));
  return {
    ...previousValue,
    [`${json.name?.split('ds-')?.pop()?.replaceAll('-', '_')}`]: json.version,
  };
}, {});

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-coverage',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@nx/react/plugins/storybook',
  ],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../tsconfig.storybook.json'),
      shouldRemoveUndefinedFromOptional: true,
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const viteTsconfig = await import('vite-tsconfig-paths');
    const viteTsConfigPaths = viteTsconfig.default;

    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: /~(.+)/,
            replacement: join(process.cwd(), 'node_modules/$1'),
          },

          {
            find: /@\//,
            replacement: `${join(process.cwd(), './src/renderer')}/`,
          },
        ],
      },
      define: {
        'import.meta.env.DS_VERSIONS': { ...packageVersions },
      },
      plugins: [
        svgr({
          svgrOptions: {
            exportType: 'named',
            ref: true,
            svgo: false,
            titleProp: true,
          },
          include: '**/*.svg',
          exclude: [
            'libs/ds-core-utils/src/SkatteetatenLogo/SKESquare40.svg',
            'libs/ds-layout/src/Footer/logo_en.svg',
            'libs/ds-layout/src/Footer/logo_no.svg',
            'libs/ds-layout/src/TopBannerLogo/ske-logo-mobile.svg',
            'libs/ds-layout/src/TopBannerLogo/ske-logo-en.svg',
            'libs/ds-layout/src/TopBannerLogo/ske-logo.svg',
            'libs/ds-layout/src/TopBannerInternal/logo-sak.svg',
            'apps/ds-playground/src/assets/custom-logo.svg',
            'apps/ds-playground/src/assets/ske-logo.svg',
            'apps/ds-playground/src/assets/farmer-illustration.svg',
            'apps/ds-playground/src/assets/custom-mobile-logo.svg',
          ],
        }),

        viteTsConfigPaths({
          root: '../../../',
        }),
        nxViteTsPaths(),
        sassDts({
          esmExport: true,
        }),
      ],
      build: {},
    });
  },
};

export default config;
