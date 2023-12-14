import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  LockOutlineSVGpath,
  LogOutSVGpath,
  MenuSVGpath,
} from '@skatteetaten/ds-icons';

import {
  TopBannerExternalProps,
  TopBannerExternalHandle,
} from './TopBannerExternal.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLangPicker } from '../TopBannerLangPicker/TopBannerLangPicker';
import { TopBannerLogo } from '../TopBannerLogo/TopBannerLogo';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';
import { TopBannerUserButton } from '../TopBannerUserButton/TopBannerUserButton';

import styles from './TopBannerExternal.module.scss';

export const TopBannerExternal = forwardRef<
  TopBannerExternalHandle,
  TopBannerExternalProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      firstColumn,
      locale,
      logo,
      logoAltText,
      logoAs,
      logoURL,
      mobileLogo,
      secondColumn,
      skipLinkShadowRootNode,
      skipLinkText,
      skipLinkTarget,
      thirdColumn,
      user,
      showSami,
      children,
      onLanguageClick,
      onLogInClick,
      onLogOutClick,
      onUserClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });
    const innerRef = useRef<HTMLHeadElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    useEffect(() => {
      if (!isMenuOpen) {
        return;
      }

      const handleClickOutside = (event: MouseEvent): void => {
        const node = event.target as Node;
        if (menuButtonRef.current?.contains(node) || !menuRef.current) {
          return;
        }

        const rect = menuRef.current.getBoundingClientRect();
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      document.addEventListener('click', handleClickOutside, false);
      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      };
    }, [isMenuOpen]);

    useImperativeHandle(ref, () => ({
      ...innerRef,
      openMenu: (): void => {
        setIsMenuOpen(true);
      },
      closeMenu: (): void => {
        setIsMenuOpen(false);
      },
    }));

    const handleMenuClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const showMenu = firstColumn || secondColumn || thirdColumn;

    const threeColumnsClassName = thirdColumn ? styles.columnsThree : '';
    const twoColumnsClassName = secondColumn ? styles.columnsTwo : '';

    return (
      <header
        ref={innerRef}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={className}
      >
        <TopBannerSkipLink
          target={skipLinkTarget}
          shadowRootNode={skipLinkShadowRootNode}
        >
          {skipLinkText}
        </TopBannerSkipLink>
        <div className={styles.containerForMainMenu}>
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
                {/** TODO - FRONT-1161 Lukking når navigerer ut av menyen */}
                {showMenu && (
                  <>
                    <TopBannerButton
                      ref={menuButtonRef}
                      svgPath={isMenuOpen ? CancelSVGpath : MenuSVGpath}
                      ariaExpanded={isMenuOpen}
                      onClick={handleMenuClick}
                    >
                      {t('topbannerbutton.Menu')}
                    </TopBannerButton>
                    {isMenuOpen && (
                      <div ref={menuRef} className={styles.mainMenu}>
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
                  </>
                )}

                <TopBannerLangPicker
                  locale={locale}
                  showSami={showSami}
                  onLanguageClick={onLanguageClick}
                />

                {onLogOutClick && user && (
                  <>
                    <TopBannerUserButton user={user} onClick={onUserClick} />
                    <TopBannerButton
                      svgPath={LogOutSVGpath}
                      variant={'outline'}
                      onClick={onLogOutClick}
                    >
                      {t('topbannerbutton.Logout')}
                    </TopBannerButton>
                  </>
                )}

                {onLogInClick && !user && (
                  <TopBannerButton
                    svgPath={LockOutlineSVGpath}
                    variant={'filled'}
                    onClick={onLogInClick}
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
