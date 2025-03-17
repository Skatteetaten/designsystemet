import { JSX } from 'react';

import {
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { PersonIcon } from '@skatteetaten/ds-icons';

import { getTopBannerInternalHideLogoOnMobileDefault } from './defaults';
import defaultLogo from './logo-sak.svg';
import {
  TopBannerInternalComponent,
  TopBannerInternalProps,
} from './TopBannerInternal.types';
import { TopBannerInternalActionMenu } from '../TopBannerInternalActionMenu/TopBannerInternalActionMenu';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';

import styles from './TopBannerInternal.module.scss';

export const TopBannerInternal = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  logo,
  logoHref,
  skipLink,
  user,
  children,
  title,
  description,
  constructionBandTitle,
  onLogoClick,
  isUnderConstruction,
  hideLogoOnMobile = getTopBannerInternalHideLogoOnMobileDefault(),
}: TopBannerInternalProps): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isMobile = !useMediaQuery('(min-width: 640px)');
  const shouldHideLogo = isMobile && hideLogoOnMobile;
  const showChildrenAndUserContainer = children || (user && isDesktop);
  return (
    <header
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={className}
    >
      <div
        id={'topbanner-focus-target'}
        className={styles.srOnly}
        tabIndex={-1}
      ></div>
      <TopBannerSkipLink
        className={styles.skipLink}
        target={skipLink?.target}
        shadowRootNode={skipLink?.shadowRootNode}
      >
        {skipLink?.text}
      </TopBannerSkipLink>
      {isUnderConstruction && (
        <div className={styles.constructionBand}>
          <div className={styles.constructionBandTitle}>
            {constructionBandTitle ?? 'test'}
          </div>
        </div>
      )}
      <div className={styles.topBanner}>
        <div className={styles.titleAndDescriptionContainer}>
          <a
            className={styles.logoAndTitleLink}
            href={logoHref}
            onClick={onLogoClick}
          >
            {!shouldHideLogo && (
              <img
                className={`${styles.logoImage} ${classNames?.logo ?? ''}`.trim()}
                src={logo ?? defaultLogo}
                alt={''}
                aria-hidden
              />
            )}
            {title && <span>{title}</span>}
          </a>
          {description && <span>{description}</span>}
        </div>
        {showChildrenAndUserContainer && (
          <div
            className={`${styles.childrenAndUserContainer} ${classNames?.childrenAndUserContainer ?? ''}`.trim()}
          >
            {children}
            {user && (
              <div className={styles.userContainer}>
                <PersonIcon className={styles.userContainerIcon} />
                <span className={styles.userContainerName}>{user}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}) as TopBannerInternalComponent;

TopBannerInternal.displayName = 'TopBannerInternal';
TopBannerInternal.ActionMenu = TopBannerInternalActionMenu;
TopBannerInternal.ActionMenu.displayName = 'TopBannerInternal.ActionMenu';
export { getTopBannerInternalHideLogoOnMobileDefault };
