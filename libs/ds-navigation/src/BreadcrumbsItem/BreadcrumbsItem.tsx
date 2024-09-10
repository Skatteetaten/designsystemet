import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsItemProps } from './BreadcrumbsItem.types';
import { getBreadcrumbsItemIsCurrentPageDefault } from './defaults';
import { BreadcrumbsItemContext } from '../BreadcrumbsItemContext/BreadcrumbsItemContext';

import styles from './BreadcrumbsItem.module.scss';

export const BreadcrumbsItem = forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      isCurrentPage = getBreadcrumbsItemIsCurrentPageDefault(),
      children,
    },
    ref
  ) => {
    const concatenatedClassNames =
      `${styles.breadcrumbsItem} ${className}`.trim();

    return (
      <BreadcrumbsItemContext.Provider value={{ isCurrentPage }}>
        <li
          ref={ref}
          id={id}
          className={concatenatedClassNames}
          lang={lang}
          data-testid={dataTestId}
          aria-current={isCurrentPage ? 'page' : undefined}
        >
          {children}
          <span
            className={styles.breadcrumbsItemSeparator}
            aria-hidden={'true'}
          >
            {'/'}
          </span>
        </li>
      </BreadcrumbsItemContext.Provider>
    );
  }
);

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export { getBreadcrumbsItemIsCurrentPageDefault };
