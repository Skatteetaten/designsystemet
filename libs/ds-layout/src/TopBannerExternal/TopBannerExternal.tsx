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
import { TopBannerUserButton } from '../TopBannerUserButton/TopBannerUserButton';

import styles from './TopBannerExternal.module.scss';

export const TopBannerExternal = forwardRef<
  HTMLDivElement,
  TopBannerExternalProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      firstColumn,
      logo,
      logoAltText,
      logoAs,
      logoURL,
      mobileLogo,
      secondColumn,
      skipLinkText,
      skipLinkURL,
      thirdColumn,
      username,
      userRole,
      children,
      onLogIn,
      onLogOut,
      onUsername,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_pages', { i18n: dsI18n });

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const showMenu = firstColumn || secondColumn || thirdColumn;

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
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <TopBannerLogo
              as={logoAs}
              logo={logo}
              mobileLogo={mobileLogo}
              alt={logoAltText}
              href={logoURL}
            />
            <div className={styles.contentContainer}>
              {children}

              <div className={styles.content}>
                {showMenu && (
                  <TopBannerButton
                    svgPath={isMenuOpen ? CancelSVGpath : MenuSVGpath}
                    ariaExpanded={isMenuOpen}
                    onClick={handleClick}
                  >
                    {t('topbannerbutton.Menu')}
                  </TopBannerButton>
                )}
                {/** TODO - FRONT-1161 Menyen må lukkes når det gjøres et valg i menyen */}
                {showMenu && isMenuOpen && (
                  <div className={styles.mainMenu}>
                    <nav
                      aria-label={t('topbanner.NavAriaLabel')}
                      className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName}`}
                    >
                      <div className={styles.column}>{firstColumn}</div>
                      {secondColumn && (
                        <div className={styles.column}>{secondColumn}</div>
                      )}
                      {thirdColumn && (
                        <div className={styles.column}>{thirdColumn}</div>
                      )}
                    </nav>
                  </div>
                )}

                {/** TODO - FRONT-1161 språkmeny */}

                {/** TODO - FRONT-1161 en smartere måtte enn dette */}
                {onLogIn && onLogOut && userRole && (
                  <>
                    <TopBannerUserButton
                      role={userRole}
                      onUsername={onUsername}
                    >
                      {username}
                    </TopBannerUserButton>
                    <TopBannerButton
                      svgPath={LogOutSVGpath}
                      variant={'outline'}
                      onClick={onLogOut}
                    >
                      {t('topbannerbutton.Logout')}
                    </TopBannerButton>
                  </>
                )}

                {/** TODO - FRONT-1161 en smartere måtte enn dette */}
                {onLogIn && onLogOut && !userRole && (
                  <TopBannerButton
                    svgPath={LockOutlineSVGpath}
                    variant={'filled'}
                    onClick={onLogIn}
                  >
                    {t('topbannerbutton.Login')}
                  </TopBannerButton>
                )}
              </div>
            </div>
          </div>
          <div className={styles.separator}>
            <div className={styles.separatorRight}></div>
            <div className={styles.separatorLeft}></div>
          </div>
        </div>
      </header>
    );
  }
);

TopBannerExternal.displayName = 'TopBannerExternal';
