import { JSX } from 'react';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import breakpointsJson from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
// @ts-ignore
import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
// @ts-ignore
import fontJson from '@skatteetaten/ds-core-designtokens/designtokens/font.json';
// @ts-ignore
import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';
// @ts-ignore
import sizesJson from '@skatteetaten/ds-core-designtokens/designtokens/sizes.json';
// @ts-ignore
import spacingJson from '@skatteetaten/ds-core-designtokens/designtokens/spacing.json';
// @ts-ignore
/* eslint-enable @typescript-eslint/ban-ts-comment */

interface TokensListProps {
  tokenType:
    | 'breakpoints'
    | 'containers'
    | 'font'
    | 'palette'
    | 'sizes'
    | 'spacing';
}

export const TokensList = ({ tokenType }: TokensListProps): JSX.Element => {
  let tokens: Record<string, string> = {};
  const firstNode = ':root,\n:host';
  switch (tokenType) {
    case 'breakpoints':
      tokens = breakpointsJson;
      break;
    case 'containers':
      tokens = containersJson[firstNode];
      break;
    case 'font':
      tokens = fontJson[firstNode];
      break;
    case 'palette':
      tokens = paletteJson[firstNode];
      break;
    case 'sizes':
      tokens = sizesJson[firstNode];
      break;
    case 'spacing':
      tokens = spacingJson[firstNode];
      break;
    default:
      tokens = {};
  }
  return (
    <ul>
      {Object.keys(tokens).map((key) => (
        <li key={key}>
          <span className={'designtokenName'}>{`${key}:`}</span>
          {` ${tokens[key]}`}
        </li>
      ))}
    </ul>
  );
};
