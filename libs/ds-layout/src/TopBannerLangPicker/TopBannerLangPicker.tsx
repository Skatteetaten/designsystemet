import React, { forwardRef, JSX, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { MenuSVGpath } from '@skatteetaten/ds-icons';

import { ReactComponent as EnglishFlagIcon } from './Assets/en-flag.svg';
import { ReactComponent as NorwegianFlagIcon } from './Assets/no-flag.svg';
import { ReactComponent as SamiFlagIcon } from './Assets/sa-flag.svg';
import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from './defaults';
import {
  Lang,
  TopBannerLangPickerComponent,
  TopBannerLangPickerProps,
} from './TopBannerLangPicker.types';
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

    const menuRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const [selectedLang, setSelectedLang] = useState<Lang>(locale);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    });

    useEffect(() => {
      document.documentElement.lang = selectedLang;
    }, [selectedLang]);

    const handleMenuClick = (): void => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageClick = (
      e: React.MouseEvent<HTMLButtonElement>
    ): void => {
      const lang: Lang = e.currentTarget.lang as Lang;
      setSelectedLang(lang);
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();

      onLanguageClick?.(e);
    };

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const defaultLanguages: { [index: string]: any } = {
      nb: {
        lang: 'nb',
        displayName: 'Bokmål',
        flagIcon: <NorwegianFlagIcon />,
      },
      nn: {
        lang: 'nn',
        displayName: 'Nynorsk',
        flagIcon: <NorwegianFlagIcon />,
      },
      en: { lang: 'en', displayName: 'English', flagIcon: <EnglishFlagIcon /> },
    };

    if (showSami) {
      Object.assign(defaultLanguages, {
        sa: {
          lang: 'se',
          displayName: 'Sámegiella',
          flagIcon: <SamiFlagIcon />,
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
        {/** TODO - hardkodet icon må endres til riktig flag når nytt språk velges */}
        <TopBannerButton
          ref={menuButtonRef}
          lang={selectedLang}
          svgPath={MenuSVGpath}
          ariaExpanded={isMenuOpen}
          hasArrow
          onClick={handleMenuClick}
        >
          {defaultLanguages[selectedLang].displayName}
          <span className={styles.srOnly}>{t('topbannerbutton.Menu')}</span>
        </TopBannerButton>
        {isMenuOpen && (
          <ul ref={menuRef} className={styles.list}>
            {Object.values(defaultLanguages).map((language, index) => {
              return (
                <li
                  key={`${language.lang}-${index}`}
                  className={styles.listItem}
                >
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
        )}
      </div>
    );
  }
) as TopBannerLangPickerComponent;

TopBannerLangPicker.displayName = 'TopBannerLangPicker';
TopBannerLangPicker.Button = TopBannerLangPickerButton;
