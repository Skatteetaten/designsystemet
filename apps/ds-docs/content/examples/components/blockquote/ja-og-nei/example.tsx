import { type JSX } from 'react';

import { Blockquote } from '@skatteetaten/ds-typography';

export default function BlockquotePositiveNegativeExample(): JSX.Element {
  return (
    <>
      <Blockquote borderColor={'forest'} hasSpacing>
        <strong>{'Ja: '}</strong>
        {'«Vi sender deg bekreftelse.»'}
      </Blockquote>
      <Blockquote borderColor={'burgundy'}>
        <strong>{'Nei: '}</strong>
        {'«Det sendes bekreftelse.»'}
      </Blockquote>
    </>
  );
}
