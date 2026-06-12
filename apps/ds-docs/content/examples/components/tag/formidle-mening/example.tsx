import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagConveyMeaningExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'forest'}>{'Godkjent'}</Tag>
      <Tag color={'burgundy'}>{'Avvist'}</Tag>
      <Tag color={'ochre'}>{'Under behandling'}</Tag>
    </div>
  );
}
