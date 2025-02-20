// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Fragment, JSX } from 'react';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import fontJson from '@skatteetaten/ds-core-designtokens/designtokens/font.json';
/* eslint-enable @typescript-eslint/ban-ts-comment */

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
  ) as Array<keyof typeof fontTokens>;

  const isFontSize = propertyType === 'font-size';
  const isFontWeight = propertyType === 'font-weight';
  const hasLineHeight = propertyType === 'line-height';

  return (
    <div className={hasLineHeight ? 'fontTokenExample_grid' : ''}>
      {Object.keys(tokens).map((_value: string, index: number) => {
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
          <Fragment key={uniqueSuffixName}>
            <style>{cssRule}</style>
            <p
              className={`fontTokenExample ${fontClassName} ${
                hasLineHeight ? 'fontTokenExample_lineheight' : ''
              }`.trim()}
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
