import { forwardRef, useContext } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

import { BreadcrumbsLinkProps } from './BreadcrumbsLink.types';
import { BreadcrumbsItemContext } from '../BreadcrumbsItemContext/BreadcrumbsItemContext';

export const BreadcrumbsLink = forwardRef<
  HTMLAnchorElement | HTMLSpanElement,
  BreadcrumbsLinkProps
>(({ href, children, ...rest }: BreadcrumbsLinkProps, ref): JSX.Element => {
  const { displayAsCurrentPage } = useContext(BreadcrumbsItemContext);

  if (displayAsCurrentPage) {
    return (
      <span ref={ref as React.Ref<HTMLSpanElement>} {...rest}>
        {children}
      </span>
    );
  }

  return (
    <Link ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...rest}>
      {children}
    </Link>
  );
});

BreadcrumbsLink.displayName = 'BreadcrumbsLink';
