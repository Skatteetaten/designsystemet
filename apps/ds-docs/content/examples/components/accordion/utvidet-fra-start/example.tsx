import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionDefaultExpandedStateExample(): JSX.Element {
  return (
    <Accordion iconPosition={'right'}>
      <Accordion.Item title={'Skatteoppgjør'} isDefaultExpanded>
        <Paragraph>{'Dette panelet er åpnet som standard.'}</Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Betaling og frister'}>
        <Paragraph>
          {'Dette panelet er lukket til brukeren åpner det.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
