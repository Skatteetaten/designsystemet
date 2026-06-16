import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import styles from './index.module.scss';

export default function IconButtonSizeVariantsStateExample(): JSX.Element {
  return (
    <div className={styles.iconbuttonRow}>
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'small'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'medium'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'large'} />
    </div>
  );
}
