import { JSX, forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsComponent, BreadcrumbsProps } from './Breadcrumbs.types';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbLink } from '../BreadcrumbLink/BreadcrumbLink';
import { BreadcrumbList } from '../BreadcrumbList/BreadcrumbList';

import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      children,
    },
    ref
  ): JSX.Element => {
    // const { t } = useTranslation('ds_buttons', { i18n: dsI18n });

    const concatenatedClassNames = `${styles.breadcrumbs} ${className}`.trim();

    return (
      <nav
        ref={ref}
        id={id}
        className={concatenatedClassNames}
        lang={lang}
        data-testid={dataTestId}
        aria-label={'brødsmuler (hent fra tekstslistekatalogen)'}
      >
        {children}
      </nav>
    );
  }
) as BreadcrumbsComponent;

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.List = BreadcrumbList;
Breadcrumbs.List.displayName = 'BreadcrumbList';

Breadcrumbs.Item = BreadcrumbItem;
Breadcrumbs.Item.displayName = 'BreadcrumbItem';

Breadcrumbs.Link = BreadcrumbLink;
Breadcrumbs.Link.displayName = 'BreadcrumbLink';
