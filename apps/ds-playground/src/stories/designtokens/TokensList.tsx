/* eslint-disable @typescript-eslint/no-var-requires */
const breakpointsJson = require('@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json');
const containersJson = require('@skatteetaten/ds-core-designtokens/designtokens/containers.json');
const fontJson = require('@skatteetaten/ds-core-designtokens/designtokens/font.json');
const paletteJson = require('@skatteetaten/ds-core-designtokens/designtokens/palette.json');
const sizesJson = require('@skatteetaten/ds-core-designtokens/designtokens/sizes.json');
const spacingJson = require('@skatteetaten/ds-core-designtokens/designtokens/spacing.json');

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
