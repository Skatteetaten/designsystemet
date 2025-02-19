import {
  forwardRef,
  JSX,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
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
import { convertLocaleToLang, getCurrentLanguages, isLanguages } from './utils';
import { TopBannerButton } from '../TopBannerButton/TopBannerButton';
import { TopBannerLangPickerButton } from '../TopBannerLangPickerButton/TopBannerLangPickerButton';

import styles from './TopBannerLangPicker.module.scss';

const getFlag = (
  lang: string,
  additionalLanguages: TopBannerLangPickerProps['additionalLanguages'] = []
): ReactNode => {
  for (const language of additionalLanguages) {
    if (language.lang === lang) {
      return language.flag({ className: styles.flagIconSvg });
    }
  }
  switch (lang) {
    case 'en':
      return <EnglishFlagIcon className={styles.flagIconSvg} />;
    case 'se':
      return <SamiFlagIcon className={styles.flagIconSvg} />;
    case 'nb':
    case 'nn':
    default:
      return <NorwegianFlagIcon className={styles.flagIconSvg} />;
  }
};

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
      defaultLocale = getTopBannerLangPickerLocaleDefault(),
      showSami = getTopBannerLangPickerShowSamiDefault(),
      additionalLanguages,
      onLanguageClick,
      openMenu,
      setOpenMenu,
      menuButtonRef,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_layout', { i18n: dsI18n });

    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRefInternal = useRef<HTMLButtonElement>(null);
    useImperativeHandle(
      menuButtonRef,
      () => menuButtonRefInternal?.current as HTMLButtonElement
    );
    const [selectedLang, setSelectedLang] = useState<string>(
      isLanguages(defaultLocale)
        ? convertLocaleToLang(defaultLocale)
        : defaultLocale
    );
    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang]);
    const languages = useMemo(
      () => getCurrentLanguages(showSami, additionalLanguages),
      [showSami, additionalLanguages]
    );
    const [currentFocus, setCurrentFocus] = useState(-1);

    const isMenuOpen = openMenu === 'Lang';
    useEffect(() => {
      if (!isMenuOpen) {
        setCurrentFocus(-1);
        return;
      }

      const handleOutsideMenuEvent: EventListener = (event): void => {
        const node = event.composedPath()[0] as Node;
        if (
          !menuButtonRefInternal?.current?.contains(node) &&
          !menuRef.current?.contains(node)
        ) {
          setOpenMenu('None');
          event.type === 'click' && menuButtonRefInternal?.current?.focus();
        }
      };

      const handleKeyDown = (e: KeyboardEvent): void => {
        const languageLength = Object.keys(languages).length;
        if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
          e.preventDefault();
          setCurrentFocus((currentFocus) =>
            currentFocus === 0 ? languageLength - 1 : currentFocus - 1
          );
        } else if (e.key === 'ArrowDown' || e.key === 'Tab') {
          e.preventDefault();
          setCurrentFocus((currentFocus) =>
            currentFocus === languageLength - 1 ? 0 : currentFocus + 1
          );
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('focusin', handleOutsideMenuEvent);
      document.addEventListener('click', handleOutsideMenuEvent);
      return (): void => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('click', handleOutsideMenuEvent);
        document.removeEventListener('focusin', handleOutsideMenuEvent);
      };
    }, [isMenuOpen, setOpenMenu, languages]);

    const handleLanguageClick = (
      e: React.MouseEvent<HTMLButtonElement>
    ): void => {
      setSelectedLang(e.currentTarget.lang);
      setOpenMenu('None');
      menuButtonRefInternal?.current?.focus();
      onLanguageClick?.(e);
    };

    const handleMenuClick = (): void => {
      setOpenMenu(isMenuOpen ? 'None' : 'Lang');
    };

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
          ref={menuButtonRefInternal}
          lang={selectedLang}
          className={styles.menuButton}
          ariaExpanded={isMenuOpen}
          onClick={handleMenuClick}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key === 'Tab') {
              /* Stopper propagering slik at eventet ikke fanges av eventListener på document og vi
                får tilbake standard oppførsel på tab og shift-tab. */
              e.stopPropagation();
            }
          }}
        >
          <span className={styles.iconWrapper}>
            <span className={styles.flagIcon}>
              {getFlag(selectedLang, additionalLanguages)}
            </span>
            <Icon
              svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
              className={styles.arrowMobile}
            />
          </span>
          {languages[selectedLang]?.displayName ?? languages['nb'].displayName}
          <span className={styles.srOnly}>
            &nbsp;{t('topbannerbutton.Menu')}
          </span>
          <Icon
            svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
            className={styles.arrowDesktop}
          />
        </TopBannerButton>
        <div className={styles.menuArrow} />

        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <ul className={styles.list}>
              {Object.values(languages).map((language, index) => {
                return (
                  <li key={`${language.lang}`} className={styles.listItem}>
                    <TopBannerLangPicker.Button
                      lang={language.lang}
                      ariaCurrent={language.lang === selectedLang}
                      flagIcon={getFlag(language.lang, additionalLanguages)}
                      focus={index === currentFocus}
                      onClick={handleLanguageClick}
                      onKeyDown={(e): void => {
                        /* Hvis vi er på første eller siste element stopper vi propagering slik at
                           eventet ikke fanges av eventListener på document og vi får tilbake
                           standard oppførsel på tab og shift-tab. */
                        if (
                          (index === Object.keys(languages).length - 1 &&
                            e.key === 'Tab') ||
                          (index === 0 && e.shiftKey && e.key === 'Tab')
                        ) {
                          e.stopPropagation();
                        }
                      }}
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
