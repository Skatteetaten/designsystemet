import { JSX } from 'react';

import { List } from '@skatteetaten/ds-typography';

export default function ListUnorderedStateExample(): JSX.Element {
  return (
    <List>
      <List.Element key={'element_1'}>
        {`Første punkt med `}
        <strong>{'utheving'}</strong>
        {' og '}
        <em>{'betoning'}</em>
        {' i samme linje.'}
      </List.Element>
      <List.Element key={'element_2'}>
        {'Andre punkt uten utheving.'}
      </List.Element>
    </List>
  );
}
