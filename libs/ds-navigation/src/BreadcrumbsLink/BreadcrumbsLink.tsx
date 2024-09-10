import { forwardRef, useContext } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

import { BreadcrumbsLinkProps } from './BreadcrumbsLink.types';
import { BreadcrumbsItemContext } from '../BreadcrumbsItemContext/BreadcrumbsItemContext';

export const BreadcrumbsLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbsLinkProps
>(({ href, children, ...rest }: BreadcrumbsLinkProps, ref): JSX.Element => {
  const { isCurrentPage } = useContext(BreadcrumbsItemContext);

  return isCurrentPage ? (
    <span {...rest}>{children}</span>
  ) : (
    <Link ref={ref} href={href} {...rest}>
      {children}
    </Link>
  );
});

BreadcrumbsLink.displayName = 'BreadcrumbsLink';
