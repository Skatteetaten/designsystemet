const path = require('path');

const createRollupConfig = require('../ds-dev-config/build/rollup-config-factory');

const srcDir = path.resolve(__dirname, `src`);
const pathToTsConfig = 'libs/ds-navigation/tsconfig.lib.json';
const pathToCSS = path.resolve(__dirname, `**/*.{css,scss}`);
const outputDir = path.resolve('./', `dist/libs/ds-navigation/`);

module.exports = (config) =>
  createRollupConfig(config, srcDir, pathToTsConfig, pathToCSS, outputDir);
