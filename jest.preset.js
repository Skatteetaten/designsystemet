const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  transform: undefined,
  coverageReporters: [...nxPreset.coverageReporters, 'lcov', 'json'],
};
