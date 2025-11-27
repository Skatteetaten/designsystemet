import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { DescriptionListElementProps } from './DescriptionListElement.types';

import styles from './DescriptionListElement.module.scss';

export const DescriptionListElement = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
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
