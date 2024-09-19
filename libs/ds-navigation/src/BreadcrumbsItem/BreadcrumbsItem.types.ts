import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

interface BreadcrumbsItemHTMLAttributes {
  ariaCurrent?: ComponentPropsWithoutRef<'li'>['aria-current'];
}

export interface BreadcrumbsItemProps
  extends BreadcrumbsItemHTMLAttributes,
    BaseProps {
  /** Sett til 'true' på det siste elementet i brødsmulestien. */
  isCurrentPage?: boolean;
  /** Breadcrumbs.Link */
  children: ReactNode;
}

export type BreadcrumbsItemContextProps = Pick<
  BreadcrumbsItemProps,
  'isCurrentPage'
>;
