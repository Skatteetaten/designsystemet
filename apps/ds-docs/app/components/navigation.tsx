import { JSX } from 'react';

import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './navigation.module.scss';

export const Navigation = (): JSX.Element => {
  return (
    <div className={styles.navCard}>
      <Heading as={'h2'} className={styles.srOnly}>
        {'Sidemeny'}
      </Heading>
      <Paragraph>
        <strong>{'Grunnleggende'}</strong>
      </Paragraph>
      <Paragraph>
        <strong>{'Byggeklosser'}</strong>
      </Paragraph>
    </div>
  );
};
