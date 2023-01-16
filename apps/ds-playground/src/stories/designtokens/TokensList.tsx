/* eslint-disable @typescript-eslint/no-var-requires */
import './designtokens.css';
const breakpointsJson = require('@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json');
const containersJson = require('@skatteetaten/ds-core-designtokens/designtokens/containers.json');

interface TokensListProps {
  tokenType: 'breakpoints' | 'containers';
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
