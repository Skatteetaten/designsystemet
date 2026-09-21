import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './openclose.module.scss';

export default function OpenCloseSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <OpenClose title={'Small OpenClose'} size={'small'}>
        <Paragraph>{'Kompakt variant for korte forklaringer.'}</Paragraph>
      </OpenClose>

      <OpenClose title={'Medium OpenClose'} size={'medium'}>
        <Paragraph>
          {'Standard variant for de fleste innholdsflater.'}
        </Paragraph>
      </OpenClose>

      <OpenClose title={'Large OpenClose'} size={'large'}>
        <Paragraph>
          {'Stor variant når teksten trenger mer visuell tyngde.'}
        </Paragraph>
      </OpenClose>
    </div>
  );
}
