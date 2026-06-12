import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Heading } from '@skatteetaten/ds-typography';

import { ErrorSummaryGroupProps } from './ErrorSummaryGroup.types';

import styles from './ErrorSummaryGroup.module.scss';

export const ErrorSummaryGroup = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  title,
  titleAs = 'h3',
  children,
}: ErrorSummaryGroupProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      className={`${styles.group} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      <Heading as={titleAs} level={5} className={styles.groupTitle}>
        {title}
      </Heading>
      <LinkGroup className={styles.groupList}>{children}</LinkGroup>
    </div>
  );
};

ErrorSummaryGroup.displayName = 'ErrorSummaryGroup';
