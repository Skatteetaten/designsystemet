const { getJestConfig } = require('@storybook/test-runner');

const config = getJestConfig();

module.exports = {
  ...config,
  bail: true,
  testTimeout: 30000,
  verbose: false,
  testMatch: [
    '<rootDir>/apps/ds-playground/src/stories/__tests__/**/*test.stories.mdx',
    '<rootDir>/apps/ds-playground/src/stories/__tests__/**/*test.stories.@(js|jsx|ts|tsx)',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/.nx'],
  reporters: [
    ...config.reporters,
    'jest-image-snapshot/src/outdated-snapshot-reporter.js',
  ],
  /**
   * Add your own overrides below
   *
   * @see https://jestjs.io/docs/configuration
   */

  testEnvironmentOptions: {
    'jest-playwright': {
      collectCoverage: true,
      connectOptions: process.env['CI']
        ? {}
        : {
            chromium: {
              wsEndpoint: 'ws://127.0.0.1:3000/playwright',
            },
          },
    },
  },
};
