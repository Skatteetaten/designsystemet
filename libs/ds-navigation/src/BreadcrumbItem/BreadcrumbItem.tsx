import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbItemProps } from './BreadcrumbItem.types';

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
    return (
      <li
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
      >
        {children}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
