/* eslint-disable @typescript-eslint/no-var-requires */
import './designtokens.css';
const fontJson = require('@skatteetaten/ds-core-designtokens/designtokens/font.json');

interface FontTokenExamplesGeneratorProps {
  propertyType: 'size' | 'font-weight' | 'line-height';
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

  const hasLineHeight = propertyType === 'line-height';

  return (
    <div className={hasLineHeight ? 'fontTokenExample_grid' : ''}>
      {Object.keys(tokens).map((value: string, index: number) => {
        return (
          <p
            key={index}
            className={`fontTokenExample ${
              hasLineHeight ? 'fontTokenExample_lineheight' : ''
            }`}
            style={{
              fontSize:
                propertyType === 'size'
                  ? fontTokens[tokens[index]]
                  : 'var(--semantic-font-size-default)',
              fontWeight:
                propertyType === 'font-weight'
                  ? fontTokens[tokens[index]]
                  : 'var(--semantic-font-weight-default)',
              lineHeight: hasLineHeight
                ? fontTokens[tokens[index]]
                : 'var(--semantic-line-height-default)',
            }}
          >
            <strong>{`${tokens[index]}: ${fontTokens[tokens[index]]}`}</strong>
            <br />
            {sampleText}
          </p>
        );
      })}
    </div>
  );
};
