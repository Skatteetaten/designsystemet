import { forwardRef } from 'react';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

export const FooterLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      href,
      target,
      ariaDescribedby,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <Link
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        color={'white'}
        href={href}
        target={target}
        aria-describedby={ariaDescribedby}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
);

FooterLink.displayName = 'FooterLink';
