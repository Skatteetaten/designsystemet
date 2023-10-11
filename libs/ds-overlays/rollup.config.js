const path = require('path');

const createRollupConfig = require('../ds-dev-config/build/rollup-config-factory');

const srcDir = path.resolve(__dirname, `src`);
const pathToTsConfig = 'libs/ds-overlays/tsconfig.lib.json';
const pathToCSS = path.resolve(__dirname, `**/*.{css,scss}`);
const outputDir = path.resolve('./', `dist/libs/ds-overlays/`);

module.exports = (config) =>
  createRollupConfig(config, srcDir, pathToTsConfig, pathToCSS, outputDir);
