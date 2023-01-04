const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const rootMain = require('../../../.storybook/main');

function webpackConfigNoChunkTilde(config) {
  if (config.optimization.runtimeChunk) {
    config.optimization.runtimeChunk = {
      name: ({ name }) => `runtime-${name}`,
    };
  }
  if (config.optimization.splitChunks) {
    config.optimization.splitChunks.automaticNameDelimiter = '-';
  }
  return config;
}

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../libs/**/*.stories.mdx',
    '../../../libs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }
    const outerIndex = config.module.rules.findIndex(
      (rule) =>
        rule.test.toString() === '/\\.css$|\\.scss$|\\.sass$|\\.less$|\\.styl$/'
    );
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

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        '@jsdevtools/coverage-istanbul-loader',
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.mode = 'development';
    config.devtool = 'source-map';

    if (process.env.STORYBOOK_WEBPACK_STATS === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          generateStatsFile: true,
        })
      );
    }
    config.resolve.fallback.fs = false;
    config.resolve.fallback.os = false;
    config.resolve.fallback.path = false;

    return webpackConfigNoChunkTilde(config);
  },
  managerWebpack: (config) => {
    return webpackConfigNoChunkTilde(config);
  },
};
