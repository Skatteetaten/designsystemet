import { JSX } from 'react';

import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithLinkStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Dette er et eksempel på et avsnitt med en '}
      <a
        href={'https://www.skatteetaten.no/skattekartet/'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        {'lenke til skattekartet'}
      </a>
      {' og som får designsystemets typografi.'}
    </Paragraph>
  );
}
