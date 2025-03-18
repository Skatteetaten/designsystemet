/**
 * This codemod transforms TextField components with as="textarea" to TextArea components,
 * removes the 'as' prop in all cases, and cleans up unused TextField imports.
 *
 * Run with jscodeshift:
 * npx jscodeshift -t transform.js --parser=tsx --extensions=js,jsx,tsx path/to/your/files
 */

module.exports = function (fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  const printOptions = options.printOptions || { quote: 'single' };

  // Track if we need to add TextArea import
  let needsTextAreaImport = false;
  // Track TextField instances that were not converted
  let remainingTextFieldCount = 0;

  // Find all TextField JSX elements
  root.find(j.JSXElement).forEach((path) => {
    const element = path.node;

    // Check if it's a TextField component - handle both simple names and member expressions
    const isTextField =
      (element.openingElement.name.type === 'JSXIdentifier' &&
        element.openingElement.name.name === 'TextField') ||
      (element.openingElement.name.type === 'JSXMemberExpression' &&
        element.openingElement.name.property.name === 'TextField');

    if (isTextField) {
      let asValue = null;
      let hasAsProp = false;
      const isIdentifier = element.openingElement.name.type === 'JSXIdentifier';

      // Find and remove 'as' prop
      element.openingElement.attributes =
        element.openingElement.attributes.filter((attr) => {
          if (attr.type === 'JSXAttribute' && attr.name.name === 'as') {
            hasAsProp = true;

            // Handle different value types for the 'as' prop
            if (
              attr.value &&
              attr.value.type === 'StringLiteral' &&
              attr.value.value === 'textarea'
            ) {
              asValue = 'textarea';
            } else if (
              attr.value &&
              attr.value.type === 'JSXExpressionContainer' &&
              attr.value.expression.type === 'StringLiteral' &&
              attr.value.expression.value === 'textarea'
            ) {
              asValue = 'textarea';
            } else if (
              attr.value &&
              attr.value.type === 'Literal' &&
              attr.value.value === 'textarea'
            ) {
              asValue = 'textarea';
            }
            return false;
          }
          return true;
        });

      // Rename component if as="textarea"
      if (asValue === 'textarea') {
        if (isIdentifier) {
          element.openingElement.name.name = 'TextArea';
        } else {
          element.openingElement.name.property.name = 'TextArea';
        }

        // If closing element exists, update it too
        if (element.closingElement) {
          if (isIdentifier) {
            element.closingElement.name.name = 'TextArea';
          } else {
            element.closingElement.name.property.name = 'TextArea';
          }
        }

        needsTextAreaImport = true;
      } else {
        // Count TextField components that remain after conversion
        remainingTextFieldCount++;
      }
    }
  });

  // Track TextField import info
  let textFieldImportPath = null;
  let textFieldImportDeclaration = null;

  // Find existing TextField import
  root.find(j.ImportDeclaration).forEach((path) => {
    const importNode = path.node;
    const specifiers = importNode.specifiers;

    let hasTextFieldSpecifier = false;

    for (const specifier of specifiers) {
      if (
        specifier.type === 'ImportSpecifier' &&
        specifier.imported &&
        specifier.imported.name === 'TextField'
      ) {
        hasTextFieldSpecifier = true;
        textFieldImportPath = importNode.source.value;
        textFieldImportDeclaration = path;
        break;
      }
    }
  });

  // Handle imports based on what components remain
  if (textFieldImportPath) {
    if (needsTextAreaImport) {
      // Add TextArea to the import that has TextField
      const importNode = textFieldImportDeclaration.node;
      let hasTextAreaImport = false;

      // Check if TextArea is already imported
      importNode.specifiers.forEach((specifier) => {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.imported &&
          specifier.imported.name === 'TextArea'
        ) {
          hasTextAreaImport = true;
        }
      });

      // Add TextArea import if not already present
      if (!hasTextAreaImport) {
        importNode.specifiers.push(j.importSpecifier(j.identifier('TextArea')));
      }

      // Remove TextField import if no TextField components remain
      if (remainingTextFieldCount === 0) {
        importNode.specifiers = importNode.specifiers.filter((specifier) => {
          return !(
            specifier.type === 'ImportSpecifier' &&
            specifier.imported &&
            specifier.imported.name === 'TextField'
          );
        });

        // If no specifiers left, remove the entire import declaration
        if (importNode.specifiers.length === 0) {
          j(textFieldImportDeclaration).remove();
        }
      }
    } else if (remainingTextFieldCount === 0) {
      // No TextArea needed and no TextField remaining, remove TextField import
      const importNode = textFieldImportDeclaration.node;
      importNode.specifiers = importNode.specifiers.filter((specifier) => {
        return !(
          specifier.type === 'ImportSpecifier' &&
          specifier.imported &&
          specifier.imported.name === 'TextField'
        );
      });

      // If no specifiers left, remove the entire import declaration
      if (importNode.specifiers.length === 0) {
        j(textFieldImportDeclaration).remove();
      }
    }
  } else if (needsTextAreaImport) {
    // No existing TextField import but we need TextArea
    const newImport = j.importDeclaration(
      [j.importSpecifier(j.identifier('TextArea'))],
      j.stringLiteral('./components') // Default path, adjust as needed
    );

    // Insert it after the last import or at the beginning of the file
    const allImports = root.find(j.ImportDeclaration);
    if (allImports.length > 0) {
      j(allImports.at(-1).get()).insertAfter(newImport);
    } else {
      root.get().node.program.body.unshift(newImport);
    }
  }

  return root.toSource(printOptions);
};
