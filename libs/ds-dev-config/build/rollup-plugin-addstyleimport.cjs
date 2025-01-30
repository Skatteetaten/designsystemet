/**
 * @returns rollup plugin
 */
function addStyleImportPlugin() {
  return {
    name: 'add-style-import',
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach(function (key) {
        if (bundle[key].modules) {
          Object.keys(bundle[key].modules).every(function (moduleKey) {
            if (moduleKey.includes('.scss')) {
              const filename = bundle[key].fileName;
              const replacementValue = filename.includes('/')
                ? "$1\nimport './styles.css';\n"
                : `$1\nimport './${filename.substr(
                    0,
                    filename.search(/([.-])/)
                  )}/styles.css';\n`;
              const lastImport = bundle[key].imports.slice(-1);

              const searchRegex = new RegExp(
                `(^import.*${lastImport}';$)`,
                'gm'
              );
              const newCode = bundle[key].code.replace(
                searchRegex,
                replacementValue
              );

              bundle[key].code = newCode;
              return false;
            }
            return true;
          });
        }
      });

      return null;
    },
  };
}

module.exports = addStyleImportPlugin;
