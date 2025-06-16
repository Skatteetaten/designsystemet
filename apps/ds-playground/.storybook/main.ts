import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { StorybookConfig } from '@storybook/react-vite';
import svgr from '@svgr/rollup';
import { NodePackageImporter } from 'sass';
import sassDts from 'vite-plugin-sass-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

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
  staticDirs: ['../src/public'],
  stories: [
    // '../src/stories/**/*.mdx',
    // '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/components/ScrollToTopButton.mdx',
    '../src/stories/components/ScrollToTopButton.stories.tsx',
  ],
  addons: [
    '@storybook/addon-coverage',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@nx/react/plugins/storybook',
    '@storybook/addon-docs',
  ],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: path.resolve(__dirname, '../tsconfig.storybook.json'),
      shouldRemoveUndefinedFromOptional: true,
      // Default propfilter fjerner props definert i node_modules slik at HTML-props forsvinner
      propFilter: (_prop) => {
        return true;
      },
      shouldExtractLiteralValuesFromEnum: true,
      skipChildrenPropWithoutDoc: false,
    },
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: false,
    },
  },
  docs: {},
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    console.log(config);
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
            importers: [new NodePackageImporter()],
          },
        },
      },
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
        svgr(),
        tsconfigPaths({
          root: '../../',
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
