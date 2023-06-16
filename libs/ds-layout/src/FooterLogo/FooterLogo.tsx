import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { FooterLogoProps } from './FooterLogo.types';

export const FooterLogo = forwardRef<HTMLDivElement, FooterLogoProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      children,
    },
    ref
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestid}
      >
        {children}
      </div>
    );
  }
);

FooterLogo.displayName = 'FooterLogo';
