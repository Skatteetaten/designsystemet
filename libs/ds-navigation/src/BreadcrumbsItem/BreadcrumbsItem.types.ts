import { BaseProps } from '@skatteetaten/ds-core-utils';

// interface BreadcrumbsItemHTMLAttributes {
//   ariaCurrent?: ComponentPropsWithoutRef<'li'>['aria-current'];
// }

export interface BreadcrumbsItemProps extends BaseProps {
  /** Sett til 'true' på det siste elementet i brødsmulestien. */
  isCurrentPage?: boolean;
  /** Breadcrumbs.Link */
  children: React.ReactNode;
}

export type BreadcrumbsItemContextProps = Pick<
  BreadcrumbsItemProps,
  'isCurrentPage'
>;
