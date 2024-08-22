const nrwlConfig = require('@nx/react/plugins/bundle-rollup');
const url = require('@rollup/plugin-url');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const postcss = require('rollup-plugin-postcss');
const { visualizer } = require('rollup-plugin-visualizer');

const fs = require('fs');
const path = require('path');

const addStyleImportPlugin = require('./rollup-plugin-addstyleimport.cjs');

/* Denne funksjonen looper gjennom undermappene i /src og oppretter en Rollup entry per komponent */
const getRollupInputs = (sourcePath) => {
  const inputNamesAndPaths = {
    [`index`]: `${sourcePath}/index.ts`,
  };

  try {
    const srcSubdirectories = fs.readdirSync(sourcePath).filter(function (e) {
      return !e.includes('.');
    });

    let i = 0;
    const len = srcSubdirectories.length;
    while (i < len) {
      const subdirectoryName = srcSubdirectories[i];
      const subEntryPath = `${sourcePath}/${subdirectoryName}/${subdirectoryName}.tsx`;
      if (fs.existsSync(subEntryPath)) {
        inputNamesAndPaths[`${subdirectoryName}/index`] = subEntryPath;
      }
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
    let scoppedSubFolder;
    const parts = path.dirname(file).split(path.sep);
    const srcIndex = parts.indexOf('src');
    if (srcIndex === -1) {
      throw new Error(`path did not contain 'src' segment: ${file}`);
    } else {
      scopedSubFolder = parts.slice(srcIndex + 1).join(path.sep);
    }
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

  let postCssPluginIndex;

  for (const index of plugins.keys()) {
    if (plugins[index].name === postcssPluginName) {
      postCssPluginIndex = index;
    }
  }

  const postCssPlugins = bundleCss(pathToCSS, outputDir);
  plugins.splice(postCssPluginIndex, 1);

  let urlPluginIndex;
  const [urlPLuginName] = [url().name];
  for (const index of plugins.keys()) {
    if (plugins[index].name === urlPLuginName) {
      urlPluginIndex = index;
    }
  }
  plugins.splice(urlPluginIndex, 1);

  return {
    ...config,
    input: {
      ...dynamicInputs,
    },
    output: Array.isArray(config.output)
      ? config.output.map((configEntry) => ({
          ...configEntry,
          dir: outputDir,
          entryFileNames: '[name].esm.js',
          preserveModules: true,
        }))
      : {
          ...config.output,
          dir: outputDir,
          entryFileNames: '[name].esm.js',
          preserveModules: true,
        },
    plugins: [
      url({ limit: 20480 }),
      ...postCssPlugins,
      ...plugins,
      addStyleImportPlugin(),
      visualizer({ filename: `${outputDir.split('/').pop()}-stats.html` }),
    ],
  };
};

module.exports = createRollupConfig;
