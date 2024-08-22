import { forwardRef } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

import { BreadcrumbLinkProps } from './BreadcrumbLink.types';

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>((props: BreadcrumbLinkProps, ref): JSX.Element => {
  return <Link ref={ref} {...props} />;
});

BreadcrumbLink.displayName = 'BreadcrumbLink';
