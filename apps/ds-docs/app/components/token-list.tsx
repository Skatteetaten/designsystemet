import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import breakpointsJson from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
import containersJson from '@skatteetaten/ds-core-designtokens/designtokens/containers.json';
import fontJson from '@skatteetaten/ds-core-designtokens/designtokens/font.json';
import paletteJson from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';
import sizesJson from '@skatteetaten/ds-core-designtokens/designtokens/sizes.json';
import spacingJson from '@skatteetaten/ds-core-designtokens/designtokens/spacing.json';

interface TokenListProps {
  tokenType:
    | 'breakpoints'
    | 'containers'
    | 'font'
    | 'palette'
    | 'sizes'
    | 'spacing';
}

export const TokenList = ({ tokenType }: TokenListProps): JSX.Element => {
  let tokens: Record<string, string> = {};
  const firstNode = ':root,\n:host';
  switch (tokenType) {
    case 'breakpoints':
      tokens = breakpointsJson;
      break;
    case 'containers':
      // de første 8 tokens har en fast verdi, resten er dynamiske
      tokens = Object.fromEntries(
        Object.entries(containersJson[firstNode]).slice(0, 8)
      );
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
    <DescriptionList hasSpacing>
      {Object.keys(tokens).map((key) => (
        <DescriptionList.Element key={key} term={key}>
          {`${tokens[key]}`}
        </DescriptionList.Element>
      ))}
    </DescriptionList>
  );
};
