import type { ReactNode } from 'react';

import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';
import type { Root } from 'fumadocs-core/page-tree';

export const getParentTitle = (
  pathname: string,
  pageTree: Root
): ReactNode | null => {
  const breadcrumbItems = getBreadcrumbItems(pathname, pageTree);

  return breadcrumbItems[breadcrumbItems.length - 1]?.name ?? null;
};
