import { JSX, useRef, useState, MouseEvent, ReactNode } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Person, RolePicker } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './TopBannerExternalAndFooter.module.scss';

export function TopBannerExternalAndFooter({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState<User>();

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        firstColumn={
          <LinkGroup>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Skatt'}
            </LinkGroup.Link>
            <LinkGroup.Link
              href={'#storybook-root'}
              onClick={(e): void => {
                e.preventDefault();
                topBannerRef.current?.closeMenu?.();
              }}
            >
              {'Avgift'}
            </LinkGroup.Link>
          </LinkGroup>
        }
        user={user}
        onLanguageClick={(e: MouseEvent<HTMLButtonElement>): void => {
          void dsI18n.changeLanguage(langToLocale[e.currentTarget.lang]);
        }}
        onLogInClick={(): void => modalRef.current?.showModal()}
        onLogOutClick={(): void => setUser(undefined)}
        onUserClick={(): void => modalRef.current?.showModal()}
      />
      <RolePicker
        ref={modalRef}
        me={me}
        onEntitySelect={async () => {
          setUser({
            role: 'meg',
          });
          modalRef.current?.close();
        }}
      />

      {children}
      <Footer
        titleFirstColumn={'Skatteetaten'}
        titleSecondColumn={'Følg oss'}
        secondColumn={
          <>
            <Paragraph hasSpacing>
              {'Du kan kontakte oss i sosiale medier.'}
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Se alle Skatteetatens kontoer'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
        titleThirdColumn={'Presse'}
        thirdColumn={
          <>
            <Paragraph hasSpacing>
              {
                'Pressemeldinger, pressekontaker og annen informasjon for journalister.'
              }
            </Paragraph>
            <LinkGroup color={'white'} hasSpacing>
              <LinkGroup.Link href={'#'}>{'Se vårt presserom'}</LinkGroup.Link>
            </LinkGroup>
            <Heading
              as={'h2'}
              level={3}
              className={styles.marginTopL}
              hasSpacing
            >
              {'Bruke data fra Skatteetaten'}
            </Heading>
            <Paragraph hasSpacing>
              {
                'Skatteetaten deler data som andre virksomheter og etater kan gjenbruke for å fornkle og effektivisere eksisterende og nye digitale tjenester.'
              }
            </Paragraph>
            <LinkGroup color={'white'}>
              <LinkGroup.Link href={'#'}>
                {'Hvordan få tilgang til data'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
      >
        <Footer.LinkFirstColumn href={'#'}>
          {'Jobb i Skatteetaten'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Analyse og rapporter'}
        </Footer.LinkFirstColumn>
        <Footer.LinkFirstColumn href={'#'}>
          {'Forskning'}
        </Footer.LinkFirstColumn>
        <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
        <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
        <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
        <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
        <Footer.Link href={'#'} isExternal>
          {'Koronatiltak'}
        </Footer.Link>
      </Footer>
    </>
  );
}
