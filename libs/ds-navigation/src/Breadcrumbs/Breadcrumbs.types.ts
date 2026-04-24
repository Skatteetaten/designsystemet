import { FunctionComponent, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { BreadcrumbsItem } from './BreadcrumbsItem/BreadcrumbsItem';
import { BreadcrumbsLink } from './BreadcrumbsLink/BreadcrumbsLink';
import { BreadcrumbsList } from './BreadcrumbsList/BreadcrumbsList';

export interface BreadcrumbsProps extends BaseProps {
  ref?: Ref<HTMLElement>;
  /** Breadcrumbs.List */
  children?: ReactNode;
}

export interface BreadcrumbsComponent
  extends FunctionComponent<BreadcrumbsProps> {
  List: typeof BreadcrumbsList;
  Item: typeof BreadcrumbsItem;
  Link: typeof BreadcrumbsLink;
}
