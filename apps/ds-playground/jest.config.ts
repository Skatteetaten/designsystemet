/* eslint-disable */
export default {
  displayName: 'ds-playground',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageDirectory: '../../coverage/apps/ds-playground',
  setupFilesAfterEnv: ['../../jest-setup.js'],
};
