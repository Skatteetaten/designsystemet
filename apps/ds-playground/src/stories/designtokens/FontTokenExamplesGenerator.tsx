/* eslint-disable @typescript-eslint/no-var-requires */
import { Fragment, JSX } from 'react';

const fontJson = require('@skatteetaten/ds-core-designtokens/designtokens/font.json');

interface FontTokenExamplesGeneratorProps {
  propertyType: 'font-size' | 'font-weight' | 'line-height';
  sampleText: string;
}

export const FontTokenExamplesGenerator = ({
  propertyType,
  sampleText,
}: FontTokenExamplesGeneratorProps): JSX.Element => {
  const fontTokens = fontJson[':root,\n:host'];

  const tokens = Object.keys(fontTokens).filter((key) =>
    key.includes(propertyType)
  );

  const isFontSize = propertyType === 'font-size';
  const isFontWeight = propertyType === 'font-weight';
  const hasLineHeight = propertyType === 'line-height';

  return (
    <div className={hasLineHeight ? 'fontTokenExample_grid' : ''}>
      {Object.keys(tokens).map((value: string, index: number) => {
        const fontValue = fontTokens[tokens[index]];
        const fontSizeValue = isFontSize
          ? fontValue
          : 'var(--semantic-font-size-default)';
        const fontWeightValue = isFontWeight
          ? fontValue
          : 'var(--semantic-font-weight-default)';
        const lineHeightValue = hasLineHeight
          ? fontValue
          : 'var(--semantic-line-height-default)';

        const uniqueSuffixName = `${tokens[index]}`;
        const fontClassName = `fontToken${index}${uniqueSuffixName}`;
        const cssRule = `.${fontClassName} { font-size: ${fontSizeValue}; font-weight: ${fontWeightValue}; line-height: ${lineHeightValue}; }`;

        return (
          <Fragment key={index}>
            <style>{cssRule}</style>
            <p
              className={`fontTokenExample ${fontClassName} ${
                hasLineHeight ? 'fontTokenExample_lineheight' : ''
              }`}
            >
              <strong>{`${tokens[index]}: ${
                fontTokens[tokens[index]]
              }`}</strong>
              <br />
              {sampleText}
            </p>
          </Fragment>
        );
      })}
    </div>
  );
};
