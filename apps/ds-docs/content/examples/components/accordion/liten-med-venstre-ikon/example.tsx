import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionSmallLeftIconStateExample(): JSX.Element {
  return (
    <Accordion size={'small'} iconPosition={'left'}>
      <Accordion.Item title={'Restskatt på 1 000 kroner eller mer'}>
        <Paragraph>
          {
            'Liten variant med venstre ikon for kompakt visning av samme innhold.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Restskatt under 1 000 kroner'}>
        <Paragraph>
          {'Brukes når du trenger mindre visuell vekt, men samme struktur.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
