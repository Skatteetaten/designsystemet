import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag size={'small'} color={'denim'}>
        {'Liten'}
      </Tag>
      <Tag size={'medium'} color={'denim'}>
        {'Medium'}
      </Tag>
    </div>
  );
}
