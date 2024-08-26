import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { BreadcrumbItemProps } from '../BreadcrumbItem/BreadcrumbItem.types';
import { BreadcrumbLinkProps } from '../BreadcrumbLink/BreadcrumbLink.types';
import { BreadcrumbListProps } from '../BreadcrumbList/BreadcrumbList.types';

export interface BreadcrumbsProps extends BaseProps {
  /* Skal brødsmulestien kollapse dersom det ikke er plass til alle elementene på èn linje. */
  shouldCollapse?: boolean;
  /* // TODO skriv typing  */
  children?: ReactNode;
}

export interface BreadcrumbsComponent
  extends ForwardRefExoticComponent<
    BreadcrumbsProps & RefAttributes<HTMLElement>
  > {
  List: ForwardRefExoticComponent<
    BreadcrumbListProps & RefAttributes<HTMLOListElement>
  >;
  Item: ForwardRefExoticComponent<
    BreadcrumbItemProps & RefAttributes<HTMLLIElement>
  >;
  Link: ForwardRefExoticComponent<
    BreadcrumbLinkProps & RefAttributes<HTMLAnchorElement>
  >;
}
