import { JSX, Ref, useContext } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

import { BreadcrumbsLinkProps } from './BreadcrumbsLink.types';
import { BreadcrumbsItemContext } from '../BreadcrumbsItem/BreadcrumbsItemContext';

export const BreadcrumbsLink = ({
  ref,
  href,
  children,
  ...rest
}: BreadcrumbsLinkProps): JSX.Element => {
  const { displayAsCurrentPage } = useContext(BreadcrumbsItemContext);

  if (displayAsCurrentPage) {
    return (
      <span ref={ref as Ref<HTMLSpanElement>} {...rest}>
        {children}
      </span>
    );
  }

  return (
    <Link ref={ref as Ref<HTMLAnchorElement>} href={href} {...rest}>
      {children}
    </Link>
  );
};

BreadcrumbsLink.displayName = 'BreadcrumbsLink';
