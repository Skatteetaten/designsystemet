import { JSX } from 'react';

import { FooterLogoProps } from './FooterLogo.types';

export const FooterLogo = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  children,
}: FooterLogoProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      className={className}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

FooterLogo.displayName = 'FooterLogo';
