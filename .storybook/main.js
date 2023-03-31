module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-coverage',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
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
  features: {
    interactionsDebugger: true,
  },
  core: {
    disableTelemetry: true,
  },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
