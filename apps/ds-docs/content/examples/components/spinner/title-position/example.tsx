import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerTitlePositionExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner titlePosition={'right'}>{'Tittel til hoyre'}</Spinner>
      <Spinner titlePosition={'bottom'}>{'Tittel under'}</Spinner>
    </div>
  );
}
