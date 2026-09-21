import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function HeadingEmbeddedTopHeadingStateExample(): JSX.Element {
  return (
    <Heading as={'h1'} level={2} hasSpacing>
      <span className={styles.topHeading}>{'Arbeidsoppgave'}</span>
      {'Tittel på arbeidsoppgave'}
    </Heading>
  );
}
