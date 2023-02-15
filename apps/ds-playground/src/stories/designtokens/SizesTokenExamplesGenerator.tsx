/* eslint-disable @typescript-eslint/no-var-requires */
import './designtokens.css';
const sizesJson = require('@skatteetaten/ds-core-designtokens/designtokens/sizes.json');

export const SizesTokenExamplesGenerator = (): JSX.Element => {
  const sizesTokens = sizesJson[':root,\n:host'];

  return (
    <>
      {Object.keys(sizesTokens).map((value: string, index: number) => {
        return (
          <>
            <p className={'tokenValue'}>
              <strong>{`${value} (${sizesTokens[value]})`}</strong>
            </p>
            <div
              key={index}
              className={`sizeTokenExample`}
              style={{
                height: sizesTokens[value],
                width: sizesTokens[value],
              }}
            ></div>
          </>
        );
      })}
    </>
  );
};
