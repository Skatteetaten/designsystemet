import {
  forwardRef,
  JSX,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, MenuDownSVGpath, MenuUpSVGpath } from '@skatteetaten/ds-icons';

import { ReactComponent as EnglishFlagIcon } from './Assets/en-flag.svg';
import { ReactComponent as NorwegianFlagIcon } from './Assets/no-flag.svg';
import { ReactComponent as SamiFlagIcon } from './Assets/sa-flag.svg';
import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from './defaults';
import {
  TopBannerLangPickerComponent,
  TopBannerLangPickerProps,
} from './TopBannerLangPicker.types';
import { convertLocaleToLang, LanguageItems } from './utils';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLangPickerButton } from '../TopBannerLangPickerButton/TopBannerLangPickerButton';

import styles from './TopBannerLangPicker.module.scss';

export const TopBannerLangPicker = forwardRef<
  HTMLDivElement,
  TopBannerLangPickerProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      locale = getTopBannerLangPickerLocaleDefault(),
      showSami = getTopBannerLangPickerShowSamiDefault(),
      onLanguageClick,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const [selectedLang, setSelectedLang] = useState<string>(
      convertLocaleToLang(locale)
    );
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const [arrowPosition, setArrowPosition] = useState<number | undefined>(
      undefined
    );

    useLayoutEffect(() => {
      if (!isMenuOpen) {
        return;
      }

      const handleOpenMenuClick = (): void => {
        if (!menuButtonRef.current) {
          return;
        }

        // TODO - FRONT-1161 Er det mulig å unngå hardkodet breakpoint, kan det endres til token
        const media = window.matchMedia('(min-width: 480px)');
        if (!media.matches) {
          const { right } = menuButtonRef.current.getBoundingClientRect();
          const arrow = window.innerWidth - right;
          setArrowPosition(arrow);
        } else {
          setArrowPosition(undefined);
        }
      };

      document.addEventListener('resize', handleOpenMenuClick, false);
      document.addEventListener('click', handleOpenMenuClick, false);
      return () => {
        document.removeEventListener('resize', handleOpenMenuClick, false);
        document.removeEventListener('click', handleOpenMenuClick, false);
      };
    }, [arrowPosition, isMenuOpen]);

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang, setSelectedLang]);

    useEffect(() => {
      if (!isMenuOpen) {
        return;
      }

      const handleClickOutside = (event: MouseEvent): void => {
        const node = event.target as Node;
        if (
          !menuButtonRef.current?.contains(node) &&
          !menuRef.current?.contains(node)
        ) {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      const handleEscape = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      };

      document.addEventListener('click', handleClickOutside, false);
      document.addEventListener('keyup', handleEscape, false);
      return () => {
        document.removeEventListener('click', handleClickOutside, false);
        document.removeEventListener('keyup', handleEscape, false);
      };
    }, [isMenuOpen]);

    const handleMenuClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageClick = (
      e: React.MouseEvent<HTMLButtonElement>
    ): void => {
      setSelectedLang(e.currentTarget.lang);
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
      onLanguageClick?.(e);
    };

    const handleCloseMenuKeyDown = (
      e: React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      e.stopPropagation();
      if (!e.shiftKey && e.key === 'Tab') {
        setIsMenuOpen(false);
      }
    };

    const defaultLanguages: LanguageItems = {
      nb: {
        lang: 'nb',
        displayName: 'Bokmål',
        flagIcon: <NorwegianFlagIcon className={styles.flagIconSvg} />,
      },
      nn: {
        lang: 'nn',
        displayName: 'Nynorsk',
        flagIcon: <NorwegianFlagIcon className={styles.flagIconSvg} />,
      },
      en: {
        lang: 'en',
        displayName: 'English',
        flagIcon: <EnglishFlagIcon className={styles.flagIconSvg} />,
      },
    };
    if (showSami) {
      Object.assign(defaultLanguages, {
        se: {
          lang: 'se',
          displayName: 'Sámegiella',
          flagIcon: <SamiFlagIcon className={styles.flagIconSvg} />,
        },
      });
    }

    return (
      <div
        ref={ref}
        id={id}
        className={`${className} ${styles.container}`}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={isMenuOpen ? styles.overlay : ''} />
        <TopBannerButton
          ref={menuButtonRef}
          lang={selectedLang}
          className={styles.menuButton}
          ariaExpanded={isMenuOpen}
          onClick={handleMenuClick}
          onKeyDown={(e): void => {
            e.stopPropagation();
            if (e.shiftKey && e.key === 'Tab') {
              setIsMenuOpen(false);
            }
          }}
        >
          <span className={styles.iconWrapper}>
            <span className={styles.flagIcon}>
              {defaultLanguages[selectedLang].flagIcon}
            </span>
            <Icon
              svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
              className={styles.arrowMobile}
            />
          </span>
          {defaultLanguages[selectedLang].displayName}
          <span className={styles.srOnly}>{t('topbannerbutton.Menu')}</span>
          <Icon
            svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
            className={styles.arrowDesktop}
          />
        </TopBannerButton>

        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <div
              className={styles.menuArrow}
              style={
                arrowPosition !== undefined
                  ? { right: arrowPosition }
                  : undefined
              }
            />
            <ul className={styles.list}>
              {Object.values(defaultLanguages).map((language, index) => {
                return (
                  <li key={`${language.lang}`} className={styles.listItem}>
                    <TopBannerLangPicker.Button
                      lang={language.lang}
                      ariaCurrent={language.lang === selectedLang}
                      flagIcon={language.flagIcon}
                      onClick={handleLanguageClick}
                      onKeyDown={
                        Object.keys(defaultLanguages).length === index + 1
                          ? handleCloseMenuKeyDown
                          : undefined
                      }
                    >
                      {language.displayName}
                    </TopBannerLangPicker.Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
) as TopBannerLangPickerComponent;

TopBannerLangPicker.displayName = 'TopBannerLangPicker';
TopBannerLangPicker.Button = TopBannerLangPickerButton;
