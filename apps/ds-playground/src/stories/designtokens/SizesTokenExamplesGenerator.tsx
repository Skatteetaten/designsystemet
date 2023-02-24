/* eslint-disable @typescript-eslint/no-var-requires */
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
          <>
            <style>{cssRule}</style>
            <p className={'tokenValue'}>
              <strong>{`${value} (${sizesTokens[value]})`}</strong>
            </p>
            <div
              key={index}
              className={`sizeTokenExample ${sizeClassName}`}
            ></div>
          </>
        );
      })}
    </>
  );
};
