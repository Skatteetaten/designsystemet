const path = require('path');

/**
 * @returns rollup plugin
 */
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
            const filename = bundle[key].fileName;
            const replacementValue = filename.includes('/')
              ? "$1\nimport './styles.css';\n"
              : `$1\nimport './${filename.substr(
                  0,
                  filename.search(/([.-])/)
                )}/styles.css';\n`;
            const imports = bundle[key].imports;
            const lastImport = imports[imports.length - 1];

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
