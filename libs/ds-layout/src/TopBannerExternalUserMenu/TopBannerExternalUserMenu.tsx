import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { TopBannerExternalUserMenuProps } from './TopBannerExternalUserMenu.types';

import styles from './TopBannerExternalUserMenu.module.scss';

export const TopBannerExternalUserMenu = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: TopBannerExternalUserMenuProps): JSX.Element => {
  return (
    <div
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={`${styles.topBannerExternalUserMenu} ${className}`}
    >
      {children}
    </div>
  );
};

TopBannerExternalUserMenu.displayName = 'TopBannerExternalUserMenu';
