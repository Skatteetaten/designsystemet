/* eslint-disable @typescript-eslint/no-var-requires */
import { Fragment } from 'react';

const spacingJson = require('@skatteetaten/ds-core-designtokens/designtokens/spacing.json');

export const SpacingTokenExamplesGenerator = (): JSX.Element => {
  const spacingsTokens = spacingJson[':root,\n:host'];

  return (
    <>
      {Object.keys(spacingsTokens).map((value: string, index: number) => {
        const spacingClassName = `spacingToken${index}`;
        const cssRule = `.${spacingClassName} { height: ${spacingsTokens[value]}; }`;

        return (
          <Fragment key={index}>
            <style>{cssRule}</style>
            <p className={'tokenValue'}>
              <strong>{`${value} (${spacingsTokens[value]})`}</strong>
            </p>

            <div className={`spacingTokenExample ${spacingClassName}`}></div>
          </Fragment>
        );
      })}
    </>
  );
};
