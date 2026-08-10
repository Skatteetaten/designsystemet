import { type ReactElement } from 'react';

import {
  CheckSVGpath,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagWithIconExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'forest'} svgPath={CheckSVGpath}>
        {'Godkjent'}
      </Tag>
      <Tag color={'ochre'} svgPath={InfoSVGpath}>
        {'Pågår'}
      </Tag>
      <Tag color={'burgundy'} svgPath={WarningSVGpath}>
        {'Mangler vedlegg'}
      </Tag>
    </div>
  );
}
