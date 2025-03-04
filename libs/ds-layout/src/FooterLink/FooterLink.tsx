import { JSX } from 'react';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';

export const FooterLink = ({
  ref,
  children,
  ...linkProps
}: LinkProps): JSX.Element => {
  return (
    <Link ref={ref} color={'white'} {...linkProps}>
      {children}
    </Link>
  );
};

FooterLink.displayName = 'FooterLink';
