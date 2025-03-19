module.exports = function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasModifiedToTextArea = false;
  let textFieldsFound = 0;
  let textFieldsConverted = 0;

  // First, count how many TextField components exist
  textFieldsFound = root
    .find(j.JSXOpeningElement, {
      name: { name: 'TextField' },
    })
    .size();

  // Find all TextField JSX elements and process them
  root
    .find(j.JSXOpeningElement, {
      name: { name: 'TextField' },
    })
    .forEach((path) => {
      const attributes = path.node.attributes || [];
      let hasAsProp = false;
      let isTextArea = false;
      let asPropIndex = -1;

      // Check for as="textarea" prop
      attributes.forEach((attr, index) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'as') {
          hasAsProp = true;
          asPropIndex = index;

          // Check if value is "textarea"
          if (
            attr.value.type === 'StringLiteral' &&
            attr.value.value === 'textarea'
          ) {
            isTextArea = true;
          } else if (
            attr.value.type === 'JSXExpressionContainer' &&
            attr.value.expression.type === 'StringLiteral' &&
            attr.value.expression.value === 'textarea'
          ) {
            isTextArea = true;
          } else if (
            attr.value.type === 'JSXExpressionContainer' &&
            attr.value.expression.type === 'Literal' &&
            attr.value.expression.value === 'textarea'
          ) {
            isTextArea = true;
          }
        }
      });

      // Remove the as prop if found
      if (hasAsProp && asPropIndex !== -1) {
        path.node.attributes.splice(asPropIndex, 1);
      }

      // Convert to TextArea if needed
      if (isTextArea) {
        path.node.name.name = 'TextArea';
        hasModifiedToTextArea = true;
        textFieldsConverted++;

        // Find the parent JSXElement to update the closing tag
        const jsxElementPath = findParentJSXElement(path);
        if (jsxElementPath && jsxElementPath.node.closingElement) {
          jsxElementPath.node.closingElement.name.name = 'TextArea';
        }
      }
    });

  // Helper function to find parent JSXElement
  function findParentJSXElement(path) {
    let current = path;
    while (current && current.node) {
      if (current.node.type === 'JSXElement') {
        return current;
      }
      current = current.parent;
    }
    return null;
  }

  // Handle imports if we converted any TextField to TextArea
  if (hasModifiedToTextArea) {
    // Check if we need to keep TextField import
    const shouldRemoveTextField = textFieldsFound === textFieldsConverted;

    // Find import declarations that include TextField
    root.find(j.ImportDeclaration).forEach((path) => {
      const importDecl = path.node;
      let hasTextFieldImport = false;
      let hasTextAreaImport = false;

      // Check existing imports
      importDecl.specifiers.forEach((specifier) => {
        if (specifier.type === 'ImportSpecifier') {
          if (specifier.imported.name === 'TextField') {
            hasTextFieldImport = true;
          }
          if (specifier.imported.name === 'TextArea') {
            hasTextAreaImport = true;
          }
        }
      });

      // If this import has TextField but no TextArea, add TextArea
      if (hasTextFieldImport && !hasTextAreaImport && hasModifiedToTextArea) {
        importDecl.specifiers.push(
          j.importSpecifier(j.identifier('TextArea'), j.identifier('TextArea'))
        );
      }

      // If all TextFields were converted, remove TextField import
      if (hasTextFieldImport && shouldRemoveTextField) {
        importDecl.specifiers = importDecl.specifiers.filter(
          (specifier) =>
            !(
              specifier.type === 'ImportSpecifier' &&
              specifier.imported.name === 'TextField'
            )
        );

        // If no imports left, remove the entire declaration
        if (importDecl.specifiers.length === 0) {
          j(path).remove();
        }
      }
    });
  }

  return root.toSource();
};
