import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BreadcrumbsListProps extends BaseProps {
  /** Skal brødsmulestien kollapse på mobil? */
  shouldCollapse?: boolean;
  /** Liste med Breadcrumbs.Item  */
  children?: ReactNode;
}
