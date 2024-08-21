import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';
import { LinkProps } from '@skatteetaten/ds-buttons';

export interface BreadcrumbsProps extends BaseProps {
  isCollapsed?: boolean;
}

export interface BreadcrumbsComponent
  extends ForwardRefExoticComponent<
    BreadcrumbsProps & RefAttributes<HTMLDivElement>
  > {
  Item: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
}
