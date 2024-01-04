import {
  forwardRef,
  JSX,
  useEffect,
  useImperativeHandle,
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
      () => menuButtonRef?.current as HTMLButtonElement
    );

    const [selectedLang, setSelectedLang] = useState<string>(
      convertLocaleToLang(locale)
    );
    const isMenuOpen = openMenu === 'Lang';

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang, setSelectedLang]);

    useEffect(() => {
      if (!isMenuOpen) {
        return;
      }

      const handleOutsideMenuEvent: EventListener = (event): void => {
        const node = event.target as Node;
        if (
          !menuButtonRefInternal?.current?.contains(node) &&
          !menuRef.current?.contains(node)
        ) {
          setOpenMenu('None');
          event.type === 'click' && menuButtonRefInternal?.current?.focus();
        }
      };

      document.addEventListener('focusin', handleOutsideMenuEvent);
      document.addEventListener('click', handleOutsideMenuEvent);
      return () => {
        document.removeEventListener('click', handleOutsideMenuEvent);
        document.removeEventListener('focusin', handleOutsideMenuEvent);
      };
    }, [isMenuOpen, setOpenMenu]);

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
          ref={menuButtonRefInternal}
          lang={selectedLang}
          className={styles.menuButton}
          ariaExpanded={isMenuOpen}
          onClick={handleMenuClick}
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
        <div className={styles.menuArrow} />

        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <ul className={styles.list}>
              {Object.values(defaultLanguages).map((language) => {
                return (
                  <li key={`${language.lang}`} className={styles.listItem}>
                    <TopBannerLangPicker.Button
                      lang={language.lang}
                      ariaCurrent={language.lang === selectedLang}
                      flagIcon={language.flagIcon}
                      onClick={handleLanguageClick}
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
