import { JSX } from 'react';

import { DescriptionListElementProps } from './DescriptionListElement.types';

import styles from './DescriptionListElement.module.scss';

export const DescriptionListElement = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  term,
  children,
}: DescriptionListElementProps): JSX.Element => {
  return (
    <>
      <dt
        ref={ref}
        id={id}
        className={`${styles.term} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
      >
        {term}
      </dt>
      <dd className={styles.description}>{children}</dd>
    </>
  );
};

DescriptionListElement.displayName = 'DescriptionListElement';
