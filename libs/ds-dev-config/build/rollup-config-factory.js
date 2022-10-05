const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const postcss = require('rollup-plugin-postcss');
const typescript = require('rollup-plugin-typescript2');

const fs = require('fs');
const path = require('path');

const addStyleImportPlugin = require('./rollup-plugin-addstyleimport');

// Denne funksjonen looper gjennom undermappene i /src og oppretter en Rollup entry per komponent
const getRollupInputs = (sourcePath) => {
  const inputNamesAndPaths = {
    [`index`]: `${sourcePath}/index.ts`,
  };

  try {
    const srcSubdirectories = fs.readdirSync(sourcePath).filter(function (e) {
      return !e.includes('.');
    });

    let i = 0,
      len = srcSubdirectories.length;
    while (i < len) {
      const subdirectoryName = srcSubdirectories[i];
      inputNamesAndPaths[
        `${subdirectoryName}/index`
      ] = `${sourcePath}/${subdirectoryName}/index.tsx`;
      i++;
    }
  } catch (e) {
    console.error(e);
  }
  return {
    ...inputNamesAndPaths,
  };
};

// Denne funksjonen looper gjennom css/scss filene og lager en styles.css fil per komponent
const bundleCss = (pathToCSS, outputDir) => {
  const config = [];
  const files = glob.sync(pathToCSS);
  files.forEach((file) => {
    const scopedSubFolder = path.dirname(file).split(path.sep).pop();
    config.push(
      postcss({
        plugins: [autoprefixer],
        include: file,
        extract: `${outputDir}/${scopedSubFolder}/styles.css`,
        minimize: true,
      })
    );
  });
  return config;
};

const createRollupConfig = (
  config,
  srcDir,
  pathToTsConfig,
  pathToCSS,
  outputDir
) => {
  const dynamicInputs = getRollupInputs(srcDir);

  nrwlConfig(config);
  const plugins = config.plugins;
  const [postcssPluginName] = [postcss().name];
  const [typescriptPluginName] = [typescript().name];

  let postCssPluginIndex;
  let typescriptPluginIndex;

  for (const index of plugins.keys()) {
    if (plugins[index].name === postcssPluginName) {
      postCssPluginIndex = index;
    }
    if (plugins[index].name === typescriptPluginName) {
      typescriptPluginIndex = index;
    }
  }

  const typescriptPlugin = typescript({
    declaration: true,
    useTsconfigDeclarationDir: true,
    check: true,
    tsconfig: pathToTsConfig,
    tsconfigOverride: {
      compilerOptions: {
        declarationDir: outputDir,
        rootDir: srcDir,
        allowJs: false,
        declaration: true,
      },
    },
  });

  const postCssPlugins = bundleCss(pathToCSS, outputDir);
  plugins.splice(postCssPluginIndex, 1);
  plugins.splice(typescriptPluginIndex, 1, typescriptPlugin);
  return {
    ...config,
    input: {
      ...dynamicInputs,
    },
    output: {
      ...config.output,
      dir: outputDir,
      entryFileNames: '[name].js',
    },
    plugins: [...plugins, ...postCssPlugins, addStyleImportPlugin()],
  };
};

module.exports = createRollupConfig;
