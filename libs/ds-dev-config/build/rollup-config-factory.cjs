const nrwlConfig = require('@nx/react/plugins/bundle-rollup');
const url = require('@rollup/plugin-url');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const sass = require('rollup-plugin-sass');
const { visualizer } = require('rollup-plugin-visualizer');

const fs = require('fs');

const addStyleImportPlugin = require('./rollup-plugin-addstyleimport.cjs');

// Shared state mellom sass processor og import plugin
const cssAssetState = {
  pending: new Map(), // moduleId → { content, outputPath }
};

/**
 * Lager tilpasset Rollup config med Sass og plugin håndtering
 *
 * @param config - Base Rollup config fra Nx
 * @param srcDir - Kildekatalog sti
 * @param _pathToTsConfig - Sti til TypeScript config (ikke brukt, men beholdt
 *   for bakoverkompatibilitet)
 * @param _pathToCSS - Sti til CSS filer (ikke brukt, men beholdt for
 *   bakoverkompatibilitet)
 * @param outputDir - Utdata katalog sti
 * @returns Tilpasset Rollup config
 */
function createRollupConfig(
  config,
  srcDir,
  _pathToTsConfig,
  _pathToCSS,
  outputDir
) {
  const dynamicInputs = getRollupInputs(srcDir);

  nrwlConfig(config);
  const plugins = config.plugins;

  /**
   * Filters out plugins that conflict with custom Sass/PostCSS setup.
   *
   * @param pluginArray - Array of Rollup plugins.
   * @returns Filtered plugins array without conflicting plugins.
   */
  function filterConflictingPlugins(pluginArray) {
    const conflictingPluginNames = new Set(['postcss', 'sass', 'url']);

    return pluginArray.filter((plugin) => {
      // Sjekk om plugin har et navn som konflikter
      if (plugin && typeof plugin.name === 'string') {
        const isConflicting =
          conflictingPluginNames.has(plugin.name.toLowerCase()) ||
          plugin.name.includes('sass') ||
          plugin.name.includes('postcss');

        if (isConflicting) {
          console.log(`Filtering out conflicting plugin: ${plugin.name}`);
          return false;
        }
      }
      return true;
    });
  }

  // Filtrer bort konflikterende plugins på en trygg måte
  const filteredPlugins = filterConflictingPlugins(plugins);
  const sassPlugins = [configureSassPlugin()];

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
      ...sassPlugins, // Sass plugin først - viktig rekkefølge
      url({ limit: 20480 }),
      ...filteredPlugins, // Bruk filtrerte plugins i stedet for originale
      addStyleImportPlugin(cssAssetState),
      visualizer({ filename: `${outputDir.split('/').pop()}-stats.html` }),
    ],
    onwarn(warning, defaultHandler) {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        console.error('🔁 Circular:', warning.importer || warning.message);
        process.exit(-1);
      }
      defaultHandler(warning);
    },
  };
}

/**
 * Håndterer utskrift av CSS-filer fra kompilerte SCSS-filer. Lagrer CSS i
 * shared state for senere emittering via Rollup.
 *
 * @param _styles - Kompilerte CSS-stiler (ikke brukt men må beholdes for
 *   signatur)
 * @param styleNodes - Array av stilnoder med id og innhold
 * @returns False - Forhindrer plugin fra å lage kombinert CSS-fil
 */
function handleSassOutput(_styles, styleNodes) {
  if (styleNodes && styleNodes.length > 0) {
    styleNodes.forEach((styleNode) => {
      const { id, content } = styleNode;
      if (id && id.endsWith('.scss') && content) {
        // Beregn relativ output-sti (relativ til dist output dir)
        // Fra: /path/to/libs/ds-buttons/src/Button/Button.module.scss
        // Til: Button/Button.module.css
        const pathParts = id.split('/src/');
        const relativePath = pathParts[pathParts.length - 1].replace(
          '.scss',
          '.css'
        );

        console.log(`Storing CSS for emission: ${relativePath}`);

        cssAssetState.pending.set(id, {
          content,
          outputPath: relativePath,
        });
      }
    });
  }

  return false;
}

/**
 * Konfigurerer Sass plugin med moderne API og Autoprefixer
 *
 * @returns Konfigurert Sass plugin
 */
function configureSassPlugin() {
  return sass({
    api: 'modern',
    include: ['**/*.scss'],
    output: handleSassOutput,
    options: {
      style: 'compressed', // Minifiserer CSS
    },
    processor: async (css, id) => {
      // For CSS modules (.module.scss files), use postcss-modules for proper scoping
      if (id && id.includes('.module.scss')) {
        console.log(`Processing CSS modules for: ${id}`);

        let cssModules = {};

        // Use postcss with postcss-modules to generate proper CSS modules
        const postcssModules = require('postcss-modules');

        const result = await postcss([
          postcssModules({
            getJSON: (cssFileName, json) => {
              if (json) cssModules = json;
            },
            generateScopedName: '[name]_[local]__[hash:base64:5]', // Standard CSS modules pattern
          }),
          autoprefixer,
        ]).process(css, { from: id });

        const processedCss = result.css;

        console.log(`Extracted CSS modules from compiled CSS:`, cssModules);

        // Return both the processed CSS and the cssModules object
        // Following the official documentation pattern: { css: processedCss, cssModules }
        return {
          css: processedCss,
          cssModules: cssModules,
        };
      }

      // For non-module CSS files, just use autoprefixer
      const result = await postcss([autoprefixer]).process(css, { from: id });
      return result.css;
    },
  });
}

/**
 * Henter Rollup input entries fra kildekatalog
 *
 * @param sourcePath - Kildekatalog sti
 * @returns Input entries objekt
 */
function getRollupInputs(sourcePath) {
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
}

module.exports = createRollupConfig;
