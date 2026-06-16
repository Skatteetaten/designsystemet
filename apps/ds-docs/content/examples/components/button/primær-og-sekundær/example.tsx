import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

import styles from './index.module.scss';

export default function ButtonPrimarySecondaryRowStateExample(): JSX.Element {
  return (
    <div className={styles.buttonRow}>
      <Button variant={'primary'}>{'Send inn'}</Button>
      <Button variant={'secondary'}>{'Avbryt'}</Button>
    </div>
  );
}
