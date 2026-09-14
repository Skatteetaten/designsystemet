import { JSX, useRef, MouseEvent, useState } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  TopBannerExternal,
  type TopBannerExternalHandle,
} from '@skatteetaten/ds-layout';
import { Alert } from '@skatteetaten/ds-status';
import { Heading } from '@skatteetaten/ds-typography';

import { useRootLoaderData } from '../root';
import { Navigation } from './navigation';

import styles from './docs-top-banner.module.scss';

const skatteKartetLinks = [
  {
    href: 'https://www.skatteetaten.no/skattekartet/strategi/',
    text: 'Strategi og føringer',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/praksis/',
    text: 'Vår praksis',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/innhold/',
    text: 'Mønstre og maler',
  },
  {
    href: 'https://skatteetaten.github.io/designsystemet/',
    text: 'Designsystemet',
  },
  {
    href: 'https://www.skatteetaten.no/skattekartet/identitet/',
    text: 'Vår identitet',
  },
];

export const DocsTopBanner = (): JSX.Element => {
  const { pageTree } = useRootLoaderData();
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const languageAlertRef = useRef<HTMLDivElement>(null);
  const showPageNavigationInMenu = !useMediaQuery('(min-width: 1024px)');
  const [alertLanguage, setAlertLanguage] = useState<string | null>(null);

  const handleLanguageClick = (event: MouseEvent<HTMLButtonElement>): void => {
    const language = event.currentTarget.lang;
    setAlertLanguage(language === 'nb' ? null : language);
    dsI18n.changeLanguage(langToLocale['nb']);
  };

  const closeMenu = (): void => topBannerRef.current?.closeMenu();
  const closeLanguageAlert = (): void => {
    const sectionElement = languageAlertRef.current?.closest('section');
    if (sectionElement) {
      (sectionElement as HTMLElement).focus();
    }
    setAlertLanguage(null);
  };

  const languageAlertMessage =
    alertLanguage === 'nn'
      ? 'Denne sida er ikkje tilgjengeleg på nynorsk'
      : 'This page is not available in English';

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        firstColumn={
          <>
            <Heading as={'h2'} level={3} hasSpacing>
              {'Skattekartet'}
            </Heading>
            <LinkGroup>
              {skatteKartetLinks.map((link) => (
                <LinkGroup.Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.text}
                </LinkGroup.Link>
              ))}
            </LinkGroup>
          </>
        }
        secondColumn={
          showPageNavigationInMenu ? (
            <>
              <Heading as={'h2'} level={3} hasSpacing>
                {'Innhold i designsystemet'}
              </Heading>
              <Navigation pageTree={pageTree} onNavigate={closeMenu} />
            </>
          ) : undefined
        }
        showSami={false}
        onLanguageClick={handleLanguageClick}
      />
      <Alert
        ref={languageAlertRef}
        lang={alertLanguage ?? undefined}
        className={styles.languageAlert}
        variant={'info'}
        showAlert={alertLanguage !== null}
        onClose={closeLanguageAlert}
      >
        {languageAlertMessage}
      </Alert>
    </>
  );
};
