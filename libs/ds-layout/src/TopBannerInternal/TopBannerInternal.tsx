import { forwardRef, JSX } from 'react';

import {
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { PersonIcon } from '@skatteetaten/ds-icons';

import defaultLogo from './logo-sak.svg';
import { TopBannerInternalProps } from './TopBannerInternal.types';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';

import styles from './TopBannerInternal.module.scss';

export const TopBannerInternal = forwardRef<
  HTMLElement,
  TopBannerInternalProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      logo,
      logoHref,
      logoAltText,
      skipLink,
      user,
      children,
      title,
      description,
      constructionBandTitle,
      onLogoClick,
      isUnderConstruction,
    },
    ref
  ): JSX.Element => {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const showChildrenAndUserContainer = children || (user && isDesktop);
    return (
      <header
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={className}
      >
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
              <img
                className={styles.logoImage}
                src={logo ?? defaultLogo}
                alt={''}
                aria-hidden
              />
              {title && <span>{title}</span>}
            </a>
            {description && <span>{description}</span>}
          </div>
          {showChildrenAndUserContainer && (
            <div className={styles.childrenAndUserContainer}>
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
  }
);

TopBannerInternal.displayName = 'TopBannerInternal';
