import { forwardRef, JSX, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, MenuDownSVGpath } from '@skatteetaten/ds-icons';

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

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang, setSelectedLang]);

    const handleMenuClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

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
        className={className}
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
          onKeyDown={(e) => {
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
            <Icon svgPath={MenuDownSVGpath} className={styles.arrowMobile} />
          </span>
          <span className={styles.menuButtonText}>
            {defaultLanguages[selectedLang].displayName}
          </span>
          <span className={styles.srOnly}>{t('topbannerbutton.Menu')}</span>
          <Icon svgPath={MenuDownSVGpath} className={styles.arrowDesktop} />
        </TopBannerButton>

        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <div className={styles.menuArrow} />
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
