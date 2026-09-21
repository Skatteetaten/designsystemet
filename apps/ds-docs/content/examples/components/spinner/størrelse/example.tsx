import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerSizeExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner size={'small'}>{'Small'}</Spinner>
      <Spinner size={'medium'}>{'Medium'}</Spinner>
      <Spinner size={'large'}>{'Large'}</Spinner>
      <Spinner size={'extraLarge'}>{'Extra large'}</Spinner>
    </div>
  );
}
