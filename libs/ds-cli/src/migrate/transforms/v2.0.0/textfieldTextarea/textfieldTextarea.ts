import {
  SourceFile,
  SyntaxKind,
  JsxElement,
  JsxSelfClosingElement,
  JsxAttribute,
  JsxAttributeLike,
  JsxOpeningElement,
  JsxExpression,
  Node,
  FunctionDeclaration,
  ArrowFunction,
  CallExpression,
} from 'ts-morph';

import {
  BaseTransform,
  TransformOptions,
  TransformResult,
} from '../../../transform.js';

export class TextFieldTextAreaTransform extends BaseTransform {
  name = 'v2-textarea';
  description = 'Converts TextField as="textarea" to TextArea component';

  async run(
    sourceFiles: SourceFile[],
    options: TransformOptions
  ): Promise<TransformResult> {
    const result = this.createResult();

    for (const sourceFile of sourceFiles) {
      result.filesProcessed++;
      let hasChanges = false;
      let textFieldsFound = 0;
      let textFieldsConverted = 0;
      const eventHandlerNames = new Set<string>();

      const allTextFields = [
        ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxElement),
        ...sourceFile.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement),
      ].filter((element) => {
        let tagName: string;
        if (element.getKind() === SyntaxKind.JsxElement) {
          const jsxElement = element as JsxElement;
          tagName = jsxElement.getOpeningElement().getTagNameNode().getText();
        } else {
          const selfClosingElement = element as JsxSelfClosingElement;
          tagName = selfClosingElement.getTagNameNode().getText();
        }
        return tagName === 'TextField';
      });

      textFieldsFound = allTextFields.length;

      for (const element of allTextFields) {
        let openingElement: JsxOpeningElement | undefined;
        let attributes: JsxAttributeLike[];
        let tagNameNode: Node;

        if (element.getKind() === SyntaxKind.JsxElement) {
          const jsxElement = element as JsxElement;
          openingElement = jsxElement.getOpeningElement();
          attributes = openingElement.getAttributes();
          tagNameNode = openingElement.getTagNameNode();
        } else {
          const selfClosingElement = element as JsxSelfClosingElement;
          attributes = selfClosingElement.getAttributes();
          tagNameNode = selfClosingElement.getTagNameNode();
        }

        let asPropIndex = -1;
        let isTextArea = false;

        attributes.forEach((attr: JsxAttributeLike, index: number) => {
          if (attr.getKind() === SyntaxKind.JsxAttribute) {
            const jsxAttr = attr as JsxAttribute;
            const name = jsxAttr.getNameNode().getText();

            if (name === 'as') {
              asPropIndex = index;
              isTextArea = this.checkIfTextArea(jsxAttr);
            }

            this.collectEventHandlerNames(jsxAttr, eventHandlerNames);
          }
        });

        if (isTextArea) {
          tagNameNode.replaceWithText('TextArea');

          if (element.getKind() === SyntaxKind.JsxElement) {
            const jsxElement = element as JsxElement;
            const closingElement = jsxElement.getClosingElement();
            if (closingElement) {
              const closingTagName = closingElement.getTagNameNode();
              closingTagName.replaceWithText('TextArea');
            }
          }

          if (asPropIndex !== -1) {
            const asProp = attributes[asPropIndex];
            asProp.remove();
          }

          textFieldsConverted++;
          hasChanges = true;
          this.logChange(
            result,
            sourceFile.getFilePath(),
            `Converted TextField as="textarea" to TextArea`
          );
        }
      }

      if (eventHandlerNames.size > 0) {
        this.updateTypeSignatures(sourceFile, eventHandlerNames);
      }

      if (textFieldsConverted > 0) {
        this.handleImports(sourceFile, textFieldsFound, textFieldsConverted);
        hasChanges = true;
      }

      if (hasChanges) {
        result.filesChanged++;
      }
    }

    return result;
  }

  private checkIfTextArea(attr: JsxAttribute): boolean {
    const initializer = attr.getInitializer();
    if (!initializer) return false;

    if (initializer.getKind() === SyntaxKind.StringLiteral) {
      const value = initializer.getText();
      return value === '"textarea"' || value === "'textarea'";
    }

    if (initializer.getKind() === SyntaxKind.JsxExpression) {
      const jsxExpression = initializer as JsxExpression;
      const expression = jsxExpression.getExpression();
      if (expression && expression.getKind() === SyntaxKind.StringLiteral) {
        const value = expression.getText();
        return value === '"textarea"' || value === "'textarea'";
      }
    }

    return false;
  }

  private collectEventHandlerNames(
    attr: JsxAttribute,
    eventHandlerNames: Set<string>
  ): void {
    const name = attr.getNameNode().getText();
    if (!['onChange', 'onBlur', 'onFocus'].includes(name)) return;

    const initializer = attr.getInitializer();
    if (!initializer || initializer.getKind() !== SyntaxKind.JsxExpression)
      return;

    const jsxExpression = initializer as JsxExpression;
    const expression = jsxExpression.getExpression();
    if (!expression) return;

    if (expression.getKind() === SyntaxKind.Identifier) {
      eventHandlerNames.add(expression.getText());
    } else if (expression.getKind() === SyntaxKind.ArrowFunction) {
      const arrowFunc = expression as ArrowFunction;
      const body = arrowFunc.getBody();
      if (body && body.getKind() === SyntaxKind.CallExpression) {
        const callExpression = body as CallExpression;
        const callee = callExpression.getExpression();
        if (callee && callee.getKind() === SyntaxKind.Identifier) {
          eventHandlerNames.add(callee.getText());
        }
      }
    }
  }

  private updateTypeSignatures(
    sourceFile: SourceFile,
    eventHandlerNames: Set<string>
  ): void {
    const functions = sourceFile.getDescendantsOfKind(
      SyntaxKind.FunctionDeclaration
    );

    for (const func of functions) {
      const name = func.getName();
      if (name && eventHandlerNames.has(name)) {
        this.updateEventTypeInFunction(func);
      }
    }

    const variableDeclarations = sourceFile.getDescendantsOfKind(
      SyntaxKind.VariableDeclaration
    );

    for (const varDecl of variableDeclarations) {
      const name = varDecl.getName();
      if (eventHandlerNames.has(name)) {
        const initializer = varDecl.getInitializer();
        if (initializer && initializer.getKind() === SyntaxKind.ArrowFunction) {
          this.updateEventTypeInFunction(initializer as ArrowFunction);
        }
      }
    }
  }

  private updateEventTypeInFunction(
    func: FunctionDeclaration | ArrowFunction
  ): void {
    const parameters = func.getParameters();

    for (const param of parameters) {
      const typeNode = param.getTypeNode();
      if (typeNode) {
        const typeText = typeNode.getText();
        if (
          typeText.includes('ChangeEvent') &&
          typeText.includes('HTMLInputElement') &&
          typeText.includes('HTMLTextAreaElement')
        ) {
          const newType = typeText.replace(
            /HTMLInputElement\s*\|\s*HTMLTextAreaElement|HTMLTextAreaElement\s*\|\s*HTMLInputElement/,
            'HTMLTextAreaElement'
          );
          typeNode.replaceWithText(newType);
        }
      }
    }
  }

  private handleImports(
    sourceFile: SourceFile,
    textFieldsFound: number,
    textFieldsConverted: number
  ): void {
    const shouldRemoveTextField = textFieldsFound === textFieldsConverted;
    const importDeclarations = sourceFile.getImportDeclarations();

    for (const importDecl of importDeclarations) {
      const namedImports = importDecl.getNamedImports();
      let hasTextFieldImport = false;
      let hasTextAreaImport = false;

      for (const namedImport of namedImports) {
        const name = namedImport.getName();
        if (name === 'TextField') hasTextFieldImport = true;
        if (name === 'TextArea') hasTextAreaImport = true;
      }

      if (hasTextFieldImport && !hasTextAreaImport) {
        importDecl.addNamedImport('TextArea');
      }

      if (hasTextFieldImport && shouldRemoveTextField) {
        const textFieldImport = namedImports.find(
          (imp) => imp.getName() === 'TextField'
        );
        if (textFieldImport) {
          textFieldImport.remove();
        }

        if (importDecl.getNamedImports().length === 0) {
          importDecl.remove();
        }
      }
    }
  }
}

export const textfieldTextareaTransform = new TextFieldTextAreaTransform();
