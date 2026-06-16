import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import styles from './index.module.scss';

export default function IconButtonOutlinedComparisonStateExample(): JSX.Element {
  return (
    <div className={styles.iconbuttonRow}>
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} isOutlined />
    </div>
  );
}
