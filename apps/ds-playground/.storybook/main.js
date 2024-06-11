import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import { mergeConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { readdirSync, readFileSync } from 'fs';
import path from 'node:path';
import { join } from 'path';

function webpackConfigNoChunkTilde(config) {
  if (config.optimization?.runtimeChunk) {
    config.optimization.runtimeChunk = {
      name: ({ name }) => `runtime-${name}`,
    };
  }
  if (config.optimization?.splitChunks) {
    config.optimization.splitChunks.automaticNameDelimiter = '-';
  }
  return config;
}
const readJsonFile = (path) => {
  const file = readFileSync(path, 'utf8');
  return JSON.parse(file);
};
const getDirectories = (source) =>
  readdirSync(source, {
    withFileTypes: true,
  })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const config = {
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
  webpackFinal: async (config) => {
    const outerIndex =
      config.module?.rules.findIndex(
        (rule) =>
          rule.test.toString() ===
          '/\\.css$|\\.scss$|\\.sass$|\\.less$|\\.styl$/'
      ) ?? 0;
    const innerIndex = config.module.rules[outerIndex].oneOf.findIndex(
      (rule) => rule.test.toString() === '/\\.module\\.(scss|sass)$/'
    );
    //rekkefølge på loaders er viktig. Derfor splice slik at den plasseres mellom style-loader og css-loader
    config.module.rules[outerIndex].oneOf[innerIndex].use.splice(1, 0, {
      loader: 'dts-css-modules-loader',
      options: {
        banner: '/* automatisk genererte types */',
        namedExport: true,
      },
    });

    if (process.env.STORYBOOK_WEBPACK_STATS === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          generateStatsFile: true,
        })
      );
    }
    config.plugins.forEach((plugin) => {
      if (plugin.constructor.name === 'DefinePlugin') {
        const directories = getDirectories('./libs');
        const packageVersions = directories.reduce(
          (previousValue, currentValue) => {
            const json = readJsonFile(
              path.resolve('libs', currentValue, 'package.json')
            );
            return {
              ...previousValue,
              [json.name]: JSON.stringify(json.version),
            };
          },
          {}
        );
        plugin.definitions['process.env'] = {
          ...plugin.definitions['process.env'],
          ...packageVersions,
        };
      }
    });
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'main',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    };
    config.resolve.fallback.fs = false;
    config.resolve.fallback.os = false;
    config.resolve.fallback.path = false;
    config.resolve.fallback.assert = require.resolve('browser-assert');
    return webpackConfigNoChunkTilde(config);
  },
  async viteFinal(config, { configType }) {
    const conf = mergeConfig(config, {
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
        'process.env': process.env,
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
        sassDts(),
        react(),
      ],
      build: {
        //commonjsOptions: { transformMixedEsModules: true }, // Change
      },
    });
    //console.log(conf);
    conf.plugins = conf.plugins?.filter((plugin) => {
      console.log(plugin?.name);
      console.log(plugin[0]?.name);
      return !(Array.isArray(plugin) && plugin[0].name === 'vite:react-babel');
    });

    return conf;
  },
};

export default config;
