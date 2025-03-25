export default function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasModifiedToTextArea = false;
  let textFieldsFound = 0;
  let textFieldsConverted = 0;
  const componentsToUpdate = new Set();

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
      const eventHandlerNames = new Set();

      // Check for as="textarea" prop and event handlers
      attributes.forEach((attr, index) => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'as') {
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

          // Collect event handler names
          if (['onChange', 'onBlur', 'onFocus'].includes(attr.name.name)) {
            if (attr.value && attr.value.type === 'JSXExpressionContainer') {
              const expression = attr.value.expression;

              // Check if it's a direct reference to a function
              if (expression.type === 'Identifier') {
                eventHandlerNames.add(expression.name);
              }
              // Check if it's an arrow function calling another function
              else if (
                expression.type === 'ArrowFunctionExpression' &&
                expression.body.type === 'CallExpression' &&
                expression.body.callee.type === 'Identifier'
              ) {
                eventHandlerNames.add(expression.body.callee.name);
              }
            }
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

        // Store event handler names for type updating
        eventHandlerNames.forEach((name) => componentsToUpdate.add(name));

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

  // Update type signatures for event handlers
  if (componentsToUpdate.size > 0) {
    // Find function declarations and expressions
    root.find(j.TSTypeAnnotation).forEach((path) => {
      // Check if this is a parameter type annotation
      if (
        path.parent &&
        path.parent.node &&
        path.parent.node.type === 'Identifier' &&
        path.parent.node.name === 'e'
      ) {
        // Find the function declaration or expression this belongs to
        const functionNode = findNearestFunction(path);
        if (
          functionNode &&
          functionNode.id &&
          componentsToUpdate.has(functionNode.id.name)
        ) {
          // Look for the event type
          j(path)
            .find(j.TSTypeReference)
            .forEach((typePath) => {
              if (
                typePath.node.typeName &&
                typePath.node.typeName.type === 'TSQualifiedName' &&
                typePath.node.typeName.right.name === 'ChangeEvent'
              ) {
                // Find HTMLInputElement | HTMLTextAreaElement
                j(typePath)
                  .find(j.TSUnionType)
                  .forEach((unionPath) => {
                    const types = unionPath.node.types;
                    // Check if this is the union we're looking for
                    const hasInputElement = types.some(
                      (t) =>
                        t.type === 'TSTypeReference' &&
                        t.typeName.name === 'HTMLInputElement'
                    );
                    const hasTextAreaElement = types.some(
                      (t) =>
                        t.type === 'TSTypeReference' &&
                        t.typeName.name === 'HTMLTextAreaElement'
                    );

                    // Replace with just HTMLTextAreaElement
                    if (hasInputElement && hasTextAreaElement) {
                      unionPath.replace(
                        j.tsTypeReference(j.identifier('HTMLTextAreaElement'))
                      );
                    }
                  });
              }
            });
        }
      }
    });
  }

  // Find the nearest function declaration or expression
  function findNearestFunction(path) {
    let current = path;
    while (current && current.parent) {
      if (
        current.node.type === 'FunctionDeclaration' ||
        current.node.type === 'FunctionExpression' ||
        current.node.type === 'ArrowFunctionExpression'
      ) {
        return current.node;
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
}
