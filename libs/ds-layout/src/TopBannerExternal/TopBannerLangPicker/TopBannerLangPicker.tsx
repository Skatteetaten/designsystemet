import { JSX, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  arrow,
  useDismiss,
  useInteractions,
  useMergeRefs,
  FloatingFocusManager,
} from '@floating-ui/react';

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
      return language.flag({ className: styles.flagIconSvg }) as ReactNode;
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

/* eslint-disable react/forbid-dom-props */
export const TopBannerLangPicker = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  defaultLocale = getTopBannerLangPickerLocaleDefault(),
  showSami = getTopBannerLangPickerShowSamiDefault(),
  selectedLang: selectedLangExternal,
  additionalLanguages,
  onLanguageClick,
  openMenu,
  isInMobileMenu,
  setOpenMenu,
  menuButtonRef,
}: TopBannerLangPickerProps): JSX.Element => {
  const { t } = useTranslation('ds_layout', { i18n: dsI18n });

  const arrowRef = useRef<HTMLDivElement>(null);
  const arrowLen = arrowRef.current?.offsetWidth ?? 0;
  // +6 for at pilen skal ligge på utsiden av outline på knappen
  const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2;

  const isMenuOpen = openMenu === 'Lang';
  const floatingData = useFloating<HTMLButtonElement>({
    open: isMenuOpen,
    onOpenChange: (open) => {
      setOpenMenu(open ? 'Lang' : 'None');
    },
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({ mainAxis: floatingOffset, alignmentAxis: -16 }),
      shift(),
      arrow({ element: arrowRef }),
    ],
  });

  const dismiss = useDismiss(floatingData.context, {
    ancestorScroll: false,
  });
  const interactions = useInteractions([dismiss]);
  const { refs, floatingStyles, middlewareData } = floatingData;
  const { getFloatingProps, getReferenceProps } = interactions;

  const menuButtonRefInternal = useRef<HTMLButtonElement>(null);

  const mergedButtonRef = useMergeRefs([
    refs.setReference,
    menuButtonRef,
    menuButtonRefInternal,
  ]);

  const [selectedLangInternal, setSelectedLangInternal] = useState<string>(
    isLanguages(defaultLocale)
      ? convertLocaleToLang(defaultLocale)
      : defaultLocale
  );
  const selectedLang = selectedLangExternal ?? selectedLangInternal;
  useEffect(() => {
    document.documentElement.lang = selectedLang;
  }, [selectedLang]);
  const languages = useMemo(
    () => getCurrentLanguages(showSami, additionalLanguages),
    [showSami, additionalLanguages]
  );
  const [currentFocus, setCurrentFocus] = useState(-1);

  useEffect(() => {
    if (!isMenuOpen) {
      setCurrentFocus(-1);
      return;
    }

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
    return (): void => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, setOpenMenu, languages]);

  const handleLanguageClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setSelectedLangInternal(e.currentTarget.lang);
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
      className={`${styles.container} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      {!isInMobileMenu && <div className={isMenuOpen ? styles.overlay : ''} />}
      <TopBannerButton
        ref={mergedButtonRef}
        {...getReferenceProps()}
        lang={selectedLang}
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuButton_open : ''} ${isInMobileMenu ? styles.menuButtonDesktopOnly : ''}`}
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
        <span className={styles.srOnly}>&nbsp;{t('topbannerbutton.Menu')}</span>
        <Icon
          svgPath={isMenuOpen ? MenuUpSVGpath : MenuDownSVGpath}
          className={styles.arrowDesktop}
        />
      </TopBannerButton>

      {isMenuOpen && (
        <FloatingFocusManager
          returnFocus={menuButtonRefInternal}
          context={floatingData.context}
          modal={false}
          // -1 her for å hindre at fokusManager overstyrer fokus vekk fra knappen når menyen åpnes
          initialFocus={-1}
        >
          <div
            ref={refs.setFloating}
            className={styles.menu}
            {...getFloatingProps()}
            style={floatingStyles}
          >
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
            <div
              ref={arrowRef}
              style={{
                left: middlewareData.arrow?.x,
                top: `-${(arrowRef.current?.offsetWidth ?? 0) / 2}px`,
              }}
              className={styles.menuArrow}
            />
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
}) as TopBannerLangPickerComponent;

TopBannerLangPicker.displayName = 'TopBannerLangPicker';
TopBannerLangPicker.Button = TopBannerLangPickerButton;
