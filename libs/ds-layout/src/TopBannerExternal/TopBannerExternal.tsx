import { JSX, useEffect, useImperativeHandle, useRef, useState } from 'react';
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
  TopBannerMenu,
} from './TopBannerExternal.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLangPicker } from '../TopBannerLangPicker/TopBannerLangPicker';
import { TopBannerLogo } from '../TopBannerLogo/TopBannerLogo';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';
import { TopBannerUserButton } from '../TopBannerUserButton/TopBannerUserButton';

import styles from './TopBannerExternal.module.scss';

export const TopBannerExternal = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  firstColumn,
  defaultLocale,
  logo,
  secondColumn,
  skipLink,
  thirdColumn,
  user,
  additionalLanguages,
  showSami,
  children,
  onLanguageClick,
  onLogInClick,
  onLogOutClick,
  onUserClick,
}: TopBannerExternalProps): JSX.Element => {
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
    mouseUpCaptured: false,
    mouseDownCaptured: false,
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

    const handleClickOutside = (event: MouseEvent): void => {
      if (event.target === menuButtonRef.current) {
        return;
      }
      const clickCaptured =
        statusFlagRef.current.mouseDownCaptured ||
        statusFlagRef.current.mouseUpCaptured;
      if (!clickCaptured && isMenuOpen) {
        setOpenMenu('None');
      }
      statusFlagRef.current.mouseUpCaptured = false;
      statusFlagRef.current.mouseDownCaptured = false;
    };

    if (openMenu === 'MainMenu') {
      document.addEventListener('mouseup', handleClickOutside);
      document.addEventListener('focusin', handleFocusOutside);
    }

    document.addEventListener('keydown', handleEscape);

    return (): void => {
      document.removeEventListener('mouseup', handleClickOutside);
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
    setOpenMenu((openMenu) => (openMenu === 'MainMenu' ? 'None' : 'MainMenu'));
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
      <div
        id={'topbanner-focus-target'}
        className={styles.srOnly}
        tabIndex={-1}
      ></div>
      <TopBannerSkipLink
        target={skipLink?.target}
        shadowRootNode={skipLink?.shadowRootNode}
      >
        {skipLink?.text}
      </TopBannerSkipLink>
      <div className={styles.containerForMainMenu}>
        <div className={styles.topContainer}>
          <TopBannerLogo {...logo} />
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
                      onMouseUp={() => {
                        statusFlagRef.current.mouseUpCaptured = isMenuOpen;
                      }}
                      onMouseDown={() => {
                        statusFlagRef.current.mouseDownCaptured = isMenuOpen;
                      }}
                    >
                      <nav
                        aria-label={t('topbanner.NavAriaLabel')}
                        className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName}`.trim()}
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
                defaultLocale={defaultLocale}
                showSami={showSami}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                menuButtonRef={languagePickerButtonRef}
                additionalLanguages={additionalLanguages}
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
};

TopBannerExternal.displayName = 'TopBannerExternal';
