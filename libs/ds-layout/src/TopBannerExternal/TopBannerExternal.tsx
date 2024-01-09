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
  TopBannerMenu,
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

    const languagePickerRef = useRef<HTMLDivElement>(null);
    const languagePickerButtonRef = useRef<HTMLButtonElement>(null);
    const [openMenu, setOpenMenu] = useState<TopBannerMenu>('None');
    const isMenuOpen = openMenu === 'MainMenu';

    const statusFlagRef = useRef({
      focusCaptured: false,
      clickCaptured: false,
    });

    useEffect(() => {
      if (openMenu === 'None') {
        return;
      }

      const currentButtonRef =
        openMenu === 'Lang' ? languagePickerButtonRef : menuButtonRef;

      const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          setOpenMenu('None');
          currentButtonRef?.current?.focus();
        }
      };

      /**
       * Setter fokusflagg i en ref i stedet for å bruke contains(event.target) slik at detektering
       * også fungerer i tilfelle med createPortal
       */

      const handleFocusOutside: EventListener = (_): void => {
        if (!statusFlagRef.current.focusCaptured && isMenuOpen) {
          setOpenMenu('None');
        }

        statusFlagRef.current.focusCaptured = false;
      };

      const handleClickOutside = (_: MouseEvent): void => {
        if (!statusFlagRef.current.clickCaptured && isMenuOpen) {
          setOpenMenu('None');
        }
        statusFlagRef.current.clickCaptured = false;
      };

      if (openMenu === 'MainMenu') {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('focusin', handleFocusOutside);
      }

      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('focusin', handleFocusOutside);
      };
    }, [openMenu, isMenuOpen]);

    useImperativeHandle(ref, () => ({
      ...innerRef,
      openMenu: (): void => {
        setOpenMenu('MainMenu');
      },
      closeMenu: (): void => {
        setOpenMenu('None');
      },
    }));

    const handleMenuClick = (): void => {
      statusFlagRef.current.clickCaptured = true;
      setOpenMenu(openMenu === 'MainMenu' ? 'None' : 'MainMenu');
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
                {showMenu && (
                  <>
                    <TopBannerButton
                      ref={menuButtonRef}
                      svgPath={
                        openMenu === 'MainMenu' ? CancelSVGpath : MenuSVGpath
                      }
                      ariaExpanded={isMenuOpen}
                      onClick={handleMenuClick}
                      onFocus={() => {
                        statusFlagRef.current.focusCaptured = isMenuOpen;
                      }}
                    >
                      {t('topbannerbutton.Menu')}
                    </TopBannerButton>
                    {isMenuOpen && (
                      <div
                        ref={menuRef}
                        className={styles.mainMenu}
                        onFocus={() => {
                          statusFlagRef.current.focusCaptured = isMenuOpen;
                        }}
                        onClick={() => {
                          statusFlagRef.current.clickCaptured = isMenuOpen;
                        }}
                      >
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
                  ref={languagePickerRef}
                  locale={locale}
                  showSami={showSami}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  menuButtonRef={languagePickerButtonRef}
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
