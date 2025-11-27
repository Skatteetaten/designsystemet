import { JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsComponent, BreadcrumbsProps } from './Breadcrumbs.types';
import { BreadcrumbsItem } from './BreadcrumbsItem/BreadcrumbsItem';
import { BreadcrumbsLink } from './BreadcrumbsLink/BreadcrumbsLink';
import { BreadcrumbsList } from './BreadcrumbsList/BreadcrumbsList';

export const Breadcrumbs = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: BreadcrumbsProps): JSX.Element => {
  const { t } = useTranslation('ds_navigation', { i18n: dsI18n });

  return (
    <nav
      ref={ref}
      id={id}
      className={className}
      lang={lang}
      data-testid={dataTestId}
      aria-label={t('breadcrumbs.NavAriaLabel')}
    >
      {children}
    </nav>
  );
}) as BreadcrumbsComponent;

Breadcrumbs.displayName = 'Breadcrumbs';

Breadcrumbs.List = BreadcrumbsList;
Breadcrumbs.List.displayName = 'BreadcrumbsList';

Breadcrumbs.Item = BreadcrumbsItem;
Breadcrumbs.Item.displayName = 'BreadcrumbsItem';

Breadcrumbs.Link = BreadcrumbsLink;
Breadcrumbs.Link.displayName = 'BreadcrumbsLink';
