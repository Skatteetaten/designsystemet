const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
const autoprefixer = require('autoprefixer');
const glob = require('glob');
const postcss = require('rollup-plugin-postcss');
const typescript = require('rollup-plugin-typescript2');

const fs = require('fs');
const path = require('path');

const addStyleImportPlugin = require('../ds-core-utils/src/rollup-plugin-addstyleimport');

// Denne funksjonen looper gjennom undermappene i /src og oppretter en Rollup entry per komponent
const getRollupInputs = (sourcePath) => {
  const inputNamesAndPaths = {
    [`index`]: path.resolve(__dirname, `src/index.ts`),
  };

  try {
    const srcSubdirectories = fs.readdirSync(sourcePath).filter(function (e) {
      return !e.includes('.');
    });

    let i = 0,
      len = srcSubdirectories.length;
    while (i < len) {
      const subdirectoryName = srcSubdirectories[i];
      inputNamesAndPaths[`${subdirectoryName}/index`] = path.resolve(
        __dirname,
        `src/${subdirectoryName}/index.tsx`
      );
      i++;
    }
  } catch (e) {
    console.error(e);
  }
  return {
    [`index`]: path.resolve(__dirname, `src/index.ts`),
    ...inputNamesAndPaths,
  };
};

const srcDir = path.resolve(__dirname, `src`);
const outputDir = path.resolve('./', `dist/libs/ds-buttons/`);
const dynamicInputs = getRollupInputs(srcDir);

// Denne funksjonen looper gjennom css/scss filene og lager en styles.css fil per komponent
const bundleCss = () => {
  const config = [];
  const files = glob.sync(path.resolve(__dirname, `**/*.{css,scss}`));
  files.forEach((file) => {
    const scopedSubFolder = path.dirname(file).split(path.sep).pop();
    config.push(
      postcss({
        plugins: [autoprefixer],
        include: file,
        extract: path.resolve(`${outputDir}/${scopedSubFolder}/styles.css`),
        minimize: true,
      })
    );
  });
  return config;
};

module.exports = (config) => {
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
    tsconfig: 'libs/ds-buttons/tsconfig.lib.json',
    tsconfigOverride: {
      compilerOptions: {
        declarationDir: outputDir,
        rootDir: srcDir,
        allowJs: false,
        declaration: true,
      },
    },
  });

  const postCssPlugins = bundleCss();
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
