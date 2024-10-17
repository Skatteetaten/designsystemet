import { JSX } from 'react';

import breakpointsJson from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import fontJson from '@skatteetaten/ds-core-designtokens/designtokens/font.json';
import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';
import sizesJson from '@skatteetaten/ds-core-designtokens/designtokens/sizes.json';
import spacingJson from '@skatteetaten/ds-core-designtokens/designtokens/spacing.json';

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
