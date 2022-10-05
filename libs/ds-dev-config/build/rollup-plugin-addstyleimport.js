function addStyleImportPlugin() {
  return {
    name: 'add-style-import',
    generateBundle(options, bundle) {
      Object.keys(bundle).forEach(function (key) {
        if (bundle[key].modules) {
          Object.keys(bundle[key].modules).every(function (moduleKey) {
            if (moduleKey.includes('.scss')) {
              bundle[key].code = `import './styles.css';\n ${bundle[key].code}`;
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
