export default function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Find all JSX elements with name 'Alert'
  return root
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: 'Alert',
        },
      },
    })
    .forEach((path) => {
      const attributes = path.node.openingElement.attributes;

      // Find the variant attribute
      const variantAttr = attributes.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'variant'
      );

      if (variantAttr) {
        // Check if value is 'neutral' (handling both string literals and expressions)
        if (
          variantAttr.value.type === 'Literal' &&
          variantAttr.value.value === 'neutral'
        ) {
          // Direct string case: variant="neutral"
          variantAttr.value.value = 'info';
        } else if (variantAttr.value.type === 'JSXExpressionContainer') {
          const expression = variantAttr.value.expression;

          // Handle string literal in expression: variant={'neutral'}
          if (expression.type === 'Literal' && expression.value === 'neutral') {
            expression.value = 'info';
          }
        }
      }
    })
    .toSource({ quote: 'single' });
}
