import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
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
    return (
      <header
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={`${styles.topBanner} ${className}`}
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
        <div className={styles.topContainer}>
          <div className={styles.contentContainer}>
            <a className={styles.logo} href={logoHref} onClick={onLogoClick}>
              <img
                className={styles.logoImage}
                src={logo ?? defaultLogo}
                alt={logoAltText}
              />
            </a>
            <span className={styles.titleWrapper}>
              {title && <span>{title}</span>}
              {description && <span>{description}</span>}
            </span>
            <div className={styles.childrenContainer}>
              {<div className={styles.alignRight}>{children}</div>}
            </div>
            {user && (
              <div className={styles.nameContainer}>
                <div>
                  <PersonIcon className={styles.nameContainerIcon} />
                </div>
                <span className={styles.nameContainerName}>{user}</span>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

TopBannerInternal.displayName = 'TopBannerInternal';
