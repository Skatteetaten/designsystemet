/* eslint-disable @typescript-eslint/no-var-requires */
import './designtokens.css';
const spacingJson = require('@skatteetaten/ds-core-designtokens/designtokens/spacing.json');

export const SpacingTokenExamplesGenerator = (): JSX.Element => {
  const spacingsTokens = spacingJson[':root,\n:host'];

  return (
    <>
      {Object.keys(spacingsTokens).map((value: string, index: number) => {
        return (
          <>
            <p>
              <strong>{`${value} (${spacingsTokens[value]})`}</strong>
            </p>
            <div
              key={index}
              className={`spacingTokenExample`}
              style={{
                height: spacingsTokens[value],
              }}
            ></div>
          </>
        );
      })}
    </>
  );
};
