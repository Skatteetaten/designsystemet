import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Heading } from '@skatteetaten/ds-typography';

import { getErrorSummaryGroupTitleAsDefault } from './defaults';
import { ErrorSummaryGroupProps } from './ErrorSummaryGroup.types';
import styles from '../ErrorSummary.module.scss';

export const ErrorSummaryGroup = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  title,
  titleAs = getErrorSummaryGroupTitleAsDefault(),
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
