import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerColorExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner color={'black'}>{'Laster inn'}</Spinner>
      <Spinner color={'blue'}>{'Laster inn'}</Spinner>
      <div className={styles.whiteBackground}>
        <Spinner color={'white'}>{'Laster inn'}</Spinner>
      </div>
    </div>
  );
}
