import { forwardRef, JSX } from 'react';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';

export const FooterLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...linkProps }, ref): JSX.Element => {
    return (
      <Link ref={ref} color={'white'} {...linkProps}>
        {children}
      </Link>
    );
  }
);

FooterLink.displayName = 'FooterLink';
