import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BreadcrumbsListProps extends BaseProps {
  /** Skal brødsmulestien kollapse dersom det ikke er plass til alle elementene på èn linje */
  shouldCollapse?: boolean;
  /** Liste med Breadcrumbs.Item  */
  children?: ReactNode;
}
