import { Ref } from 'react';

import { LinkProps } from '@skatteetaten/ds-buttons';

export type BreadcrumbsLinkProps = Omit<
  LinkProps,
  'target' | 'isExternal' | 'download' | 'aria-current'
> & {
  ref?: Ref<HTMLAnchorElement | HTMLSpanElement>;
};
