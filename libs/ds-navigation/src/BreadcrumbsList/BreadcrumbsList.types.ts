import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BreadcrumbsListProps extends BaseProps {
  /** Skal brødsmulestien kollapse på mobil? */
  shouldCollapse?: boolean;
  /** Skal siste elementet vises som aktiv side? Setter også aria-current = 'page'. */
  showLastItemAsCurrentPage?: boolean;
  /** Liste med Breadcrumbs.Item  */
  children?: ReactNode;
}

export type BreadcrumbsListContextProps = Pick<
  BreadcrumbsListProps,
  'showLastItemAsCurrentPage'
> & { itemCount?: number };
