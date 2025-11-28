const path = require('path');

/** @returns Rollup plugin */
function addStyleImportPlugin() {
  return {
    name: 'add-style-import',
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach(function (key) {
        if (bundle[key].imports) {
          bundle[key].imports.some((importValue) => {
            if (!importValue.includes('.scss')) {
              return false;
            }
            const imports = bundle[key].imports;
            const lastImport = imports[imports.length - 1];
            if (!lastImport.includes('.scss')) {
              throw Error(`Last import is not a scss file, ${lastImport}`);
            }
            const cssFileName = `${path.basename(lastImport).split('.')[0]}.css`;

            const filename = bundle[key].fileName;
            const replacementValue = filename.includes('/')
              ? `$1\nimport './${cssFileName}';\n`
              : `$1\nimport './${filename.substr(
                  0,
                  filename.search(/([.-])/)
                )}/${cssFileName}';\n`;

            const searchRegex = new RegExp(
              `(^import.*${path.basename(lastImport)}';$)`,
              'gm'
            );
            bundle[key].code = bundle[key].code.replace(
              searchRegex,
              replacementValue
            );
            return true;
          });
        }
      });

      return null;
    },
  };
}

module.exports = addStyleImportPlugin;
