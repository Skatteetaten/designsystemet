import {
  Children,
  isValidElement,
  JSX,
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { SearchField } from '@skatteetaten/ds-forms';
import {
  CancelSVGpath,
  LockOutlineSVGpath,
  LogOutSVGpath,
  MenuSVGpath,
  SearchSVGpath,
} from '@skatteetaten/ds-icons';

import {
  TopBannerExternalProps,
  TopBannerMenu,
  TopBannerExternalComponent,
} from './TopBannerExternal.types';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerExternalUserMenu } from '../TopBannerExternalUserMenu/TopBannerExternalUserMenu';
import { TopBannerLangPicker } from '../TopBannerLangPicker/TopBannerLangPicker';
import { TopBannerLogo } from '../TopBannerLogo/TopBannerLogo';
import { TopBannerSkipLink } from '../TopBannerSkipLink/TopBannerSkipLink';
import { TopBannerUserButton } from '../TopBannerUserButton/TopBannerUserButton';

import styles from './TopBannerExternal.module.scss';

export const TopBannerExternal = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
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
  searchContent,
  showSami,
  children,
  onLanguageClick,
  onLogInClick,
  onLogOutClick,
  onUserClick,
  onSearch,
  onSearchClick,
}: TopBannerExternalProps): JSX.Element => {
  const { t } = useTranslation('ds_layout', { i18n: dsI18n });
  const isMobile = !useMediaQuery('(min-width: 480px)');
  const innerRef = useRef<HTMLHeadElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const languagePickerRef = useRef<HTMLDivElement>(null);
  const languagePickerButtonRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState<TopBannerMenu>('None');
  const isMenuOpen = openMenu === 'MainMenu';
  const isSearchOpen = openMenu === 'Search';

  const statusFlagRef = useRef({
    focusCaptured: false,
    mouseUpCaptured: false,
    mouseDownCaptured: false,
  });

  useEffect(() => {
    if (openMenu === 'None') {
      return;
    }

    let currentButtonRef: RefObject<HTMLButtonElement | null>;
    switch (openMenu) {
      case 'MainMenu':
        currentButtonRef = menuButtonRef;
        break;
      case 'Search':
        currentButtonRef = searchButtonRef;
        break;
      case 'Lang':
        currentButtonRef = languagePickerButtonRef;
        break;
      default:
        break;
    }

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
      if (
        !statusFlagRef.current.focusCaptured &&
        (isMenuOpen || isSearchOpen)
      ) {
        setOpenMenu('None');
      }

      statusFlagRef.current.focusCaptured = false;
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (event.target === currentButtonRef.current) {
        return;
      }
      const clickCaptured =
        statusFlagRef.current.mouseDownCaptured ||
        statusFlagRef.current.mouseUpCaptured;
      if (!clickCaptured && (isMenuOpen || isSearchOpen)) {
        setOpenMenu('None');
      }
      statusFlagRef.current.mouseUpCaptured = false;
      statusFlagRef.current.mouseDownCaptured = false;
    };

    if (openMenu === 'MainMenu' || openMenu === 'Search') {
      document.addEventListener('mouseup', handleClickOutside);
      document.addEventListener('focusin', handleFocusOutside);
    }

    document.addEventListener('keydown', handleEscape);

    return (): void => {
      document.removeEventListener('mouseup', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('focusin', handleFocusOutside);
    };
  }, [openMenu, isMenuOpen, isSearchOpen]);

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
  const showSearch = onSearchClick || onSearch || searchContent;

  const threeColumnsClassName = thirdColumn ? styles.columnsThree : '';
  const twoColumnsClassName = secondColumn ? styles.columnsTwo : '';

  const handleSearchClick = (): void => {
    setOpenMenu((openMenu) => (openMenu === 'Search' ? 'None' : 'Search'));
    setTimeout(() => {
      searchRef?.current?.focus();
    });
  };

  // TODO: Dersom språkknappen fjernes, er ikke dette nødvendig. Kun midlertidig for å plassere eventuell UserMenu på riktig sted.
  const childrenArray = Children.toArray(children);
  const userMenu = childrenArray.filter((child) =>
    isValidElement(child) ? child.type === TopBannerExternal.UserMenu : null
  );

  const childrenWithoutUserMenu = childrenArray.filter((child) =>
    isValidElement(child) ? child.type !== TopBannerExternal.UserMenu : null
  );

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
            {childrenWithoutUserMenu}

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
            {userMenu}
            {onLogOutClick && user && (
              <>
                <TopBannerUserButton user={user} onClick={onUserClick} />
                <TopBannerButton
                  svgPath={LogOutSVGpath}
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
            {showSearch && (
              <>
                <TopBannerButton
                  ref={searchButtonRef}
                  svgPath={
                    openMenu === 'Search' ? CancelSVGpath : SearchSVGpath
                  }
                  ariaExpanded={isSearchOpen}
                  onClick={handleSearchClick}
                  onFocus={() => {
                    statusFlagRef.current.focusCaptured = isSearchOpen;
                  }}
                >
                  {t('topbanner.Search')}
                </TopBannerButton>
                {isSearchOpen && (
                  <div
                    ref={menuRef}
                    className={styles.mainMenu}
                    onFocus={() => {
                      statusFlagRef.current.focusCaptured = isSearchOpen;
                    }}
                    onMouseUp={() => {
                      statusFlagRef.current.mouseUpCaptured = isSearchOpen;
                    }}
                    onMouseDown={() => {
                      statusFlagRef.current.mouseDownCaptured = isSearchOpen;
                    }}
                  >
                    <div className={styles.mainMenuSearch}>
                      <SearchField
                        ref={searchRef}
                        classNames={{ label: styles.mainMenuSearchLabel }}
                        className={styles.mainMenuSearchSpacing}
                        label={t('topbanner.SearchLabel')}
                        variant={isMobile ? 'large' : 'extraLarge'}
                        hideLabel={false}
                        enableSRNavigationHint={false}
                        onSearch={onSearch}
                        onSearchClick={onSearchClick}
                      />
                      {searchContent}
                    </div>
                  </div>
                )}
              </>
            )}

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
                      className={`${styles.columns} ${threeColumnsClassName} ${twoColumnsClassName} ${classNames?.columns ?? ''}`.trim()}
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
          </div>
        </div>
        <div className={styles.separator}>
          <div className={styles.separatorRight}></div>
          <div className={styles.separatorLeft}></div>
        </div>
      </div>
    </header>
  );
}) as TopBannerExternalComponent;

TopBannerExternal.displayName = 'TopBannerExternal';
TopBannerExternal.UserMenu = TopBannerExternalUserMenu;
