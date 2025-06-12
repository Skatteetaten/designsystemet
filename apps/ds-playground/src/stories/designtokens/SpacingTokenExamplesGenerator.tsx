import { Fragment, JSX } from 'react';

import spacingJson from '@skatteetaten/ds-core-designtokens/designtokens/spacing.json';

export const SpacingTokenExamplesGenerator = (): JSX.Element => {
  const spacingsTokens = spacingJson[':root,\n:host'];

  return (
    <>
      {(Object.keys(spacingsTokens) as Array<keyof typeof spacingsTokens>).map(
        (value, index) => {
          const spacingClassName = `spacingToken${index}`;
          const cssRule = `.${spacingClassName} { height: ${spacingsTokens[value]}; }`;

          return (
            <Fragment key={value}>
              <style>{cssRule}</style>
              <p className={'tokenValue'}>
                <strong>{`${value} (${spacingsTokens[value]})`}</strong>
              </p>

              <div className={`spacingTokenExample ${spacingClassName}`}></div>
            </Fragment>
          );
        }
      )}
    </>
  );
};
