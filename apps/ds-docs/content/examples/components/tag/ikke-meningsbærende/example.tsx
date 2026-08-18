import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagNonSemanticExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'graphite'}>{'Nyhet'}</Tag>
      <Tag color={'graphite'}>{'Veiledning'}</Tag>
      <Tag color={'graphite'}>{'Skjema'}</Tag>
    </div>
  );
}
