import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionBackgroundColorStateExample(): JSX.Element {
  return (
    <Accordion color={'ochre'} iconPosition={'right'}>
      <Accordion.Item title={'Informasjon fra skattemeldingen'}>
        <Paragraph>
          {'Samlet informasjon som er relevant for vurdering av saken.'}
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Heftelser'}>
        <Paragraph>
          {
            'Oversikt over registrerte heftelser som påvirker videre behandling.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Pågående saker'}>
        <Paragraph>{'Viser saker som allerede er under behandling.'}</Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
