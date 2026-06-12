const path = require('path');

/**
 * Rollup plugin som emitterer CSS-filer og injiserer import-statements.
 *
 * @param cssAssetState - Shared state med pending CSS fra sass processor
 * @returns Rollup plugin
 */
function addStyleImportPlugin(cssAssetState) {
  return {
    name: 'add-style-import',
    generateBundle(options, bundle) {
      const cssPathsByChunkName = new Map();

      // Iterer over bundle: finn SCSS chunks, emit CSS, bygg mapping
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'chunk') continue;

        if (chunk.facadeModuleId?.endsWith('.scss')) {
          const cssData = cssAssetState.pending.get(chunk.facadeModuleId);
          if (cssData) {
            const { content, outputPath } = cssData;

            // Emit .module.css filen
            this.emitFile({
              type: 'asset',
              fileName: outputPath,
              source: content,
            });

            // Emit forenklet .css fil for bakoverkompatibilitet
            const pathParts = outputPath.split('/');
            const componentDir = pathParts.slice(0, -1).join('/');
            const baseName = pathParts[pathParts.length - 1].split('.')[0];
            const simpleCssPath = componentDir
              ? `${componentDir}/${baseName}.css`
              : `${baseName}.css`;

            this.emitFile({
              type: 'asset',
              fileName: simpleCssPath,
              source: content,
            });

            cssPathsByChunkName.set(fileName, simpleCssPath);
            cssAssetState.pending.delete(chunk.facadeModuleId);

            console.log(`Emitted CSS: ${outputPath} and ${simpleCssPath}`);
          }
        }
      }

      // Sanity check: hvis noe gjenstår ble det ikke emittert
      if (cssAssetState.pending.size > 0) {
        const unemitted = Array.from(cssAssetState.pending.keys()).join('\n  ');
        throw new Error(
          `CSS files were not emitted (no matching chunks in bundle):\n  ${unemitted}`
        );
      }

      // Injiser CSS imports i komponent-chunks
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'chunk') continue;

        const scssImport = chunk.imports.find((imp) => imp.includes('.scss.'));
        if (!scssImport) continue;

        const cssOutputPath = cssPathsByChunkName.get(scssImport);
        if (!cssOutputPath) continue;

        // Beregn relativ sti fra chunk til CSS-fil
        const chunkDir = path.dirname(fileName);
        let relativeCssPath = path.relative(chunkDir, cssOutputPath);

        if (!relativeCssPath.startsWith('.')) {
          relativeCssPath = `./${relativeCssPath}`;
        }

        // Finn siste import statement og injiser etter den
        const lastImportMatch = chunk.code.match(/^import\s+.+;?\s*$/gm);
        if (lastImportMatch) {
          const lastImport = lastImportMatch[lastImportMatch.length - 1];
          chunk.code = chunk.code.replace(
            lastImport,
            `${lastImport}\nimport '${relativeCssPath}';`
          );
          console.log(
            `Injected CSS import in ${fileName}: import '${relativeCssPath}'`
          );
        }
      }
    },
  };
}

module.exports = addStyleImportPlugin;
