import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function AccordionSizesExample(): JSX.Element {
  return (
    <div className={styles.accordionColumn}>
      <Accordion size={'small'}>
        <Accordion.Item title={'Liten'}>
          <Paragraph>
            {'Liten størrelse passer når innholdet skal ta lite plass.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>

      <Accordion size={'medium'}>
        <Accordion.Item title={'Medium'}>
          <Paragraph>
            {'Medium størrelse er standard og passer i de fleste tilfeller.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>

      <Accordion size={'large'}>
        <Accordion.Item title={'Stor'}>
          <Paragraph>
            {'Stor størrelse gir innholdet mer luft og visuell vekt.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
