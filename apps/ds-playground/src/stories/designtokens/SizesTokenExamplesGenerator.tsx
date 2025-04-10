import { Fragment, JSX } from 'react';

import sizesJson from '@skatteetaten/ds-core-designtokens/designtokens/sizes.json';

export const SizesTokenExamplesGenerator = (): JSX.Element => {
  const sizesTokens = sizesJson[':root,\n:host'];

  return (
    <>
      {(Object.keys(sizesTokens) as Array<keyof typeof sizesTokens>).map(
        (value, index) => {
          const sizeValue = sizesTokens[value];
          const sizeClassName = `sizeToken${index}`;
          const cssRule = `.${sizeClassName} { height: ${sizeValue}; width: ${sizeValue}; }`;

          return (
            <Fragment key={value}>
              <style>{cssRule}</style>
              <p className={'tokenValue'}>
                <strong>{`${value} (${sizesTokens[value]})`}</strong>
              </p>
              <div className={`sizeTokenExample ${sizeClassName}`}></div>
            </Fragment>
          );
        }
      )}
    </>
  );
};
