import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionStandardRightIconStateExample(): JSX.Element {
  return (
    <Accordion iconPosition={'right'}>
      <Accordion.Item title={'Restskatt på 1 000 kroner eller mer'}>
        <Paragraph>
          {
            'Du får betalingsinformasjon og frister for restskatten i dette steget.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Restskatt under 1 000 kroner'}>
        <Paragraph>
          {'Hvis restskatten er under 1 000 kroner, gjelder egne regler for'}
          {'innbetaling.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
