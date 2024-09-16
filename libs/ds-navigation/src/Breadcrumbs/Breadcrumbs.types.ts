import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsItemProps } from '../BreadcrumbsItem/BreadcrumbsItem.types';
import { BreadcrumbsLinkProps } from '../BreadcrumbsLink/BreadcrumbsLink.types';
import { BreadcrumbsListProps } from '../BreadcrumbsList/BreadcrumbsList.types';

export interface BreadcrumbsProps extends BaseProps {
  /** Breadcrumbs.List */
  children?: ReactNode;
}

export interface BreadcrumbsComponent
  extends ForwardRefExoticComponent<
    BreadcrumbsProps & RefAttributes<HTMLElement>
  > {
  List: ForwardRefExoticComponent<
    BreadcrumbsListProps & RefAttributes<HTMLOListElement>
  >;
  Item: ForwardRefExoticComponent<
    BreadcrumbsItemProps & RefAttributes<HTMLLIElement>
  >;
  Link: ForwardRefExoticComponent<
    BreadcrumbsLinkProps & RefAttributes<HTMLAnchorElement | HTMLSpanElement>
  >;
}
