import { LinkProps } from '@skatteetaten/ds-buttons';

export type BreadcrumbLinkProps = Omit<
  LinkProps,
  'target' | 'isExternal' | 'download'
>;
