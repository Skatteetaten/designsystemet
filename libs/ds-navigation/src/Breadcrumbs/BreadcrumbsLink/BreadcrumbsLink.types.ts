import { LinkProps } from '@skatteetaten/ds-buttons';

export type BreadcrumbsLinkProps = Omit<
  LinkProps,
  'target' | 'isExternal' | 'download' | 'aria-current'
> & {
  ref?: React.Ref<HTMLAnchorElement | HTMLSpanElement>;
};
