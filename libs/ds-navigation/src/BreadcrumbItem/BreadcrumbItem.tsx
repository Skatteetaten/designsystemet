import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbItemProps } from './BreadcrumbItem.types';

import styles from './BreadcrumbItem.module.scss';

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,

      children,
    },
    ref
  ) => {
    const concatenatedClassNames =
      `${styles.breadcrumbItem} ${className}`.trim();

    return (
      <>
        <li
          ref={ref}
          id={id}
          className={concatenatedClassNames}
          lang={lang}
          data-testid={dataTestId}
        >
          {children}
        </li>
        <span className={styles.breadcrumbItemSeparator} aria-hidden={'true'}>
          {'/'}
        </span>
      </>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
