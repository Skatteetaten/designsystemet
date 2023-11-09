import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  LockOutlineSVGpath,
  LogOutSVGpath,
  MenuSVGpath,
} from '@skatteetaten/ds-icons';

import { TopBannerExternalProps } from './TopBannerExternal.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLogo } from '../TopBannerLogo/TopBannerLogo';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';
import { TopBannerUser } from '../TopBannerUser/TopBannerUser';

import styles from './TopBannerExternal.module.scss';

export const TopBannerExternal = forwardRef<
  HTMLDivElement,
  TopBannerExternalProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      firstColumn,
      logo,
      logoAltText,
      logoURL,
      mobileLogo,
      secondColumn,
      skipLinkText,
      skipLinkURL,
      thirdColumn,
      username,
      usernameAs,
      userRole,
      isLoggedIn,
      noLinkLogo,
      children,
      onLogIn,
      onLogOut,
      onSwitchUserRole,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const handleClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const threeColumnsClassName = thirdColumn ? styles.columnsThree : '';
    const twoColumnsClassName = secondColumn ? styles.columnsTwo : '';

    return (
      <header
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={className}
      >
        <TopBannerSkipLink href={skipLinkURL}>{skipLinkText}</TopBannerSkipLink>

        <div className={styles.topContainer}>
          <TopBannerLogo
            noLinkLogo={noLinkLogo}
            logo={logo}
            mobileLogo={mobileLogo}
            alt={logoAltText}
            href={logoURL}
          />
          <div className={styles.contentContainer}>
            {children && <div className={classNames?.children}>{children}</div>}

            <div className={styles.content}>
              {firstColumn && (
                <TopBannerButton
                  svgPath={isMenuOpen ? CancelSVGpath : MenuSVGpath}
                  ariaExpanded={isMenuOpen}
                  onClick={handleClick}
                >
                  {t('menubutton.Meny')}
                </TopBannerButton>
              )}

              {/** TODO - FRONT-1161 språkmeny */}

              {isLoggedIn && (
                <>
                  {/** TODO - FRONT-1161 username som bare text og implementere usernameAs */}
                  {username && (
                    <TopBannerUser
                      role={userRole}
                      as={usernameAs}
                      onClick={onSwitchUserRole}
                    >
                      {username}
                    </TopBannerUser>
                  )}
                  <TopBannerButton
                    svgPath={LogOutSVGpath}
                    variant={'outline'}
                    onClick={onLogOut}
                  >
                    {t('logoutbutton.Title')}
                  </TopBannerButton>
                </>
              )}
              {/** TODO - FRONT-1161 skal antagelig være mulig å skjule innlogging */}
              {!isLoggedIn && (
                <TopBannerButton
                  svgPath={LockOutlineSVGpath}
                  variant={'filled'}
                  onClick={onLogIn}
                >
                  {t('loginbutton.Title')}
                </TopBannerButton>
              )}
            </div>
          </div>
        </div>
        <div className={styles.separator}>
          <div className={styles.separatorRight}></div>
          <div className={styles.separatorLeft}></div>
        </div>
        {/** TODO - FRONT-1161 når menyen åpnes må fokusrekkefølgen fikses */}
        {isMenuOpen && (
          <div className={styles.menuDrawerContainer}>
            <nav
              aria-label={t('topbannerexternal.DrawerAriaLabel')}
              className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName}`}
            >
              <div className={`${styles.column} ${classNames?.firstColumn}`}>
                {firstColumn}
              </div>
              {secondColumn && (
                <div className={`${styles.column} ${classNames?.secondColumn}`}>
                  {secondColumn}
                </div>
              )}
              {thirdColumn && (
                <div className={`${styles.column} ${classNames?.thirdColumn}`}>
                  {thirdColumn}
                </div>
              )}
            </nav>
          </div>
        )}
      </header>
    );
  }
);

TopBannerExternal.displayName = 'TopBannerExternal';
