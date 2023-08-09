function addStyleImportPlugin() {
  return {
    name: 'add-style-import',
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach(function (key) {
        if (bundle[key].modules) {
          Object.keys(bundle[key].modules).every(function (moduleKey) {
            if (moduleKey.includes('.scss')) {
              const newCode = bundle[key].code.replace(
                /(import.*;\n)(\n)/,
                "$1import './styles.css';\n$2"
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
