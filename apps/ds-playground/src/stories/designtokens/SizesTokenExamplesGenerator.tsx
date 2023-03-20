/* eslint-disable @typescript-eslint/no-var-requires */
import { Fragment } from 'react';

const sizesJson = require('@skatteetaten/ds-core-designtokens/designtokens/sizes.json');

export const SizesTokenExamplesGenerator = (): JSX.Element => {
  const sizesTokens = sizesJson[':root,\n:host'];

  return (
    <>
      {Object.keys(sizesTokens).map((value: string, index: number) => {
        const sizeValue = sizesTokens[value];
        const sizeClassName = `sizeToken${index}`;
        const cssRule = `.${sizeClassName} { height: ${sizeValue}; width: ${sizeValue}; }`;

        return (
          <Fragment key={index}>
            <style>{cssRule}</style>
            <p className={'tokenValue'}>
              <strong>{`${value} (${sizesTokens[value]})`}</strong>
            </p>
            <div className={`sizeTokenExample ${sizeClassName}`}></div>
          </Fragment>
        );
      })}
    </>
  );
};
