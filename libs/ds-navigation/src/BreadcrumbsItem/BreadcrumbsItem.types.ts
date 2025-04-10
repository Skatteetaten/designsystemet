import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

interface BreadcrumbsItemHTMLAttributes {
  ariaCurrent?: ComponentPropsWithoutRef<'li'>['aria-current'];
}

export interface BreadcrumbsItemProps
  extends BreadcrumbsItemHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLLIElement>;
  /** Breadcrumbs.Link */
  children: ReactNode;
}

export type BreadcrumbsItemContextProps = { displayAsCurrentPage?: boolean };
