export default function (file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasModifiedToTextArea = false;
  let textFieldsFound = 0;
  let textFieldsConverted = 0;
  const componentsToUpdate = new Set();

  textFieldsFound = countTextFieldComponents(root, j);

  root
    .find(j.JSXOpeningElement, { name: { name: 'TextField' } })
    .forEach((path) => {
      const { isTextArea, eventHandlerNames } = processTextFieldElement(path);
      if (isTextArea) {
        convertToTextArea(path);
        hasModifiedToTextArea = true;
        textFieldsConverted++;
        eventHandlerNames.forEach((name) => componentsToUpdate.add(name));
      }
    });

  if (componentsToUpdate.size > 0) {
    updateTypeSignatures(root, j, componentsToUpdate);
  }

  if (hasModifiedToTextArea) {
    handleImports(root, j, textFieldsFound, textFieldsConverted);
  }

  return root.toSource();
}

function countTextFieldComponents(root, j) {
  return root.find(j.JSXOpeningElement, { name: { name: 'TextField' } }).size();
}

function processTextFieldElement(path) {
  const attributes = path.node.attributes || [];
  let hasAsProp = false;
  let isTextArea = false;
  let asPropIndex = -1;
  const eventHandlerNames = new Set();

  attributes.forEach((attr, index) => {
    if (attr.type === 'JSXAttribute') {
      if (attr.name.name === 'as') {
        hasAsProp = true;
        asPropIndex = index;
        isTextArea = checkIfTextArea(attr);
      }
      collectEventHandlerNames(attr, eventHandlerNames);
    }
  });

  if (hasAsProp && asPropIndex !== -1) {
    path.node.attributes.splice(asPropIndex, 1);
  }

  return { isTextArea, eventHandlerNames };
}

function checkIfTextArea(attr) {
  return (
    (attr.value.type === 'StringLiteral' && attr.value.value === 'textarea') ||
    (attr.value.type === 'JSXExpressionContainer' &&
      attr.value.expression.type === 'StringLiteral' &&
      attr.value.expression.value === 'textarea') ||
    (attr.value.type === 'JSXExpressionContainer' &&
      attr.value.expression.type === 'Literal' &&
      attr.value.expression.value === 'textarea')
  );
}

function collectEventHandlerNames(attr, eventHandlerNames) {
  if (['onChange', 'onBlur', 'onFocus'].includes(attr.name.name)) {
    if (attr.value && attr.value.type === 'JSXExpressionContainer') {
      const expression = attr.value.expression;
      if (expression.type === 'Identifier') {
        eventHandlerNames.add(expression.name);
      } else if (
        expression.type === 'ArrowFunctionExpression' &&
        expression.body.type === 'CallExpression' &&
        expression.body.callee.type === 'Identifier'
      ) {
        eventHandlerNames.add(expression.body.callee.name);
      }
    }
  }
}

function convertToTextArea(path) {
  path.node.name.name = 'TextArea';
  const jsxElementPath = findParentJSXElement(path);
  if (jsxElementPath && jsxElementPath.node.closingElement) {
    jsxElementPath.node.closingElement.name.name = 'TextArea';
  }
}

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

function updateTypeSignatures(root, j, componentsToUpdate) {
  root.find(j.TSTypeAnnotation).forEach((path) => {
    if (isParameterTypeAnnotation(path)) {
      const functionNode = findNearestFunction(path);
      if (
        functionNode &&
        functionNode.id &&
        componentsToUpdate.has(functionNode.id.name)
      ) {
        updateEventType(path, j);
      }
    }
  });
}

function isParameterTypeAnnotation(path) {
  return (
    path.parent &&
    path.parent.node &&
    path.parent.node.type === 'Identifier' &&
    path.parent.node.name === 'e'
  );
}

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

function updateEventType(path, j) {
  j(path)
    .find(j.TSTypeReference)
    .forEach((typePath) => {
      if (
        typePath.node.typeName &&
        typePath.node.typeName.type === 'TSQualifiedName' &&
        typePath.node.typeName.right.name === 'ChangeEvent'
      ) {
        j(typePath)
          .find(j.TSUnionType)
          .forEach((unionPath) => {
            const types = unionPath.node.types;
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

            if (hasInputElement && hasTextAreaElement) {
              unionPath.replace(
                j.tsTypeReference(j.identifier('HTMLTextAreaElement'))
              );
            }
          });
      }
    });
}

function handleImports(root, j, textFieldsFound, textFieldsConverted) {
  const shouldRemoveTextField = textFieldsFound === textFieldsConverted;
  root.find(j.ImportDeclaration).forEach((path) => {
    const importDecl = path.node;
    let hasTextFieldImport = false;
    let hasTextAreaImport = false;

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

    if (hasTextFieldImport && !hasTextAreaImport) {
      importDecl.specifiers.push(
        j.importSpecifier(j.identifier('TextArea'), j.identifier('TextArea'))
      );
    }

    if (hasTextFieldImport && shouldRemoveTextField) {
      importDecl.specifiers = importDecl.specifiers.filter(
        (specifier) =>
          !(
            specifier.type === 'ImportSpecifier' &&
            specifier.imported.name === 'TextField'
          )
      );

      if (importDecl.specifiers.length === 0) {
        j(path).remove();
      }
    }
  });
}
