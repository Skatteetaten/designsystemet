import { SourceFile, SyntaxKind, JsxAttribute, JsxExpression } from 'ts-morph';

import {
  BaseTransform,
  TransformOptions,
  TransformResult,
} from '../../../transform.js';

export class AlertVariantTransform extends BaseTransform {
  name = 'v2-alert';
  description = 'Changes Alert variant="neutral" to variant="info"';

  async run(
    sourceFiles: SourceFile[],
    options: TransformOptions
  ): Promise<TransformResult> {
    const result = this.createResult();

    for (const sourceFile of sourceFiles) {
      result.filesProcessed++;
      let hasChanges = false;

      const alertElements = sourceFile.getDescendantsOfKind(
        SyntaxKind.JsxElement
      );

      for (const element of alertElements) {
        const openingElement = element.getOpeningElement();
        const tagName = openingElement.getTagNameNode();

        if (tagName.getText() === 'Alert') {
          const variantAttr = openingElement
            .getAttributes()
            .find((attr): attr is JsxAttribute => {
              if (attr.getKind() === SyntaxKind.JsxAttribute) {
                const name = (attr as JsxAttribute).getNameNode();
                return name.getText() === 'variant';
              }
              return false;
            });

          if (variantAttr) {
            const initializer = variantAttr.getInitializer();

            if (initializer) {
              if (initializer.getKind() === SyntaxKind.StringLiteral) {
                const value = initializer.getText();
                if (value === '"neutral"' || value === "'neutral'") {
                  const quote = value.charAt(0);
                  initializer.replaceWithText(`${quote}info${quote}`);
                  hasChanges = true;
                  this.logChange(
                    result,
                    sourceFile.getFilePath(),
                    `Changed Alert variant="neutral" to variant="info"`
                  );
                }
              } else if (initializer.getKind() === SyntaxKind.JsxExpression) {
                const expression = (
                  initializer as JsxExpression
                ).getExpression();
                if (
                  expression &&
                  expression.getKind() === SyntaxKind.StringLiteral
                ) {
                  const value = expression.getText();
                  if (value === '"neutral"' || value === "'neutral'") {
                    const quote = value.charAt(0);
                    expression.replaceWithText(`${quote}info${quote}`);
                    hasChanges = true;
                    this.logChange(
                      result,
                      sourceFile.getFilePath(),
                      `Changed Alert variant={'neutral'} to variant={'info'}`
                    );
                  }
                }
              }
            }
          }
        }
      }

      if (hasChanges) {
        result.filesChanged++;
      }
    }

    return result;
  }
}

export const alertVariantTransform = new AlertVariantTransform();
