const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const rootMain = require('../../../.storybook/main');

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

    // add your own webpack tweaks if needed
    if (process.env.STORYBOOK_WEBPACK_STATS === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          generateStatsFile: true,
        })
      );
    }
    return config;
  },
};
