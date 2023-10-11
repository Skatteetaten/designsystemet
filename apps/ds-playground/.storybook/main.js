import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { readdirSync, readFileSync } from 'fs';
import path from 'node:path';

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
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-coverage',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-version',
    '@nx/react/plugins/storybook',
  ],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
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
};

export default config;
