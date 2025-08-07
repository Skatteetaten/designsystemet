import { MouseEvent, useEffect, useRef, useState, type JSX } from 'react';

import { linkTo } from '@storybook/addon-links';

import {
  Button,
  InlineButton,
  Link,
  LinkGroup,
} from '@skatteetaten/ds-buttons';
import { Card, DescriptionList } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import { Checkbox } from '@skatteetaten/ds-forms';
import { ArrowBackSVGpath, PrintSVGpath } from '@skatteetaten/ds-icons';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Person, RolePicker } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Oppsummering.module.css';
import stylesAsString from './Oppsummering.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

export default {
  title: 'Sidetyper/Ekstern/Oppsummering',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true,
    },
    docs: {
      source: {
        transform: includeStylesTransform(stylesAsString),
      },
    },
  },
};

export const Oppsummering = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  const panelRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

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
      <main className={styles.mainExternal}>
        <div className={styles.miniNav}>
          <Link href={'#'} svgPath={ArrowBackSVGpath}>
            {'Til Min side'}
          </Link>
          <InlineButton svgPath={PrintSVGpath}>{'Skriv ut'}</InlineButton>
        </div>
        <div className={styles.article}>
          <Heading as={'h1'} level={1} hasSpacing>
            {'Bekreft opplysninger om virksomheten.'}
          </Heading>
          <Paragraph className={styles.marginBottomXl} hasSpacing>
            {
              'Overanstrengelse formiddag utstår, besynderlighet hukommelse forrykke De ubehageligheter forretningsverdenen, arkskrift dødsfallet levetid den. Imellem vås veie, bestyrelse sengeliggende forstillelse tålte nyss. '
            }
          </Paragraph>
        </div>
        <div ref={panelRef} tabIndex={-1} className={styles.noFocusVisible}>
          <Card color={'forest'}>
            <Card.Content>
              <Heading as={'h2'} level={3} hasSpacing>
                {'Opplysninger om virksomheten'}
              </Heading>
              <DescriptionList>
                <DescriptionList.Element term={'Navn'}>
                  {'McRonald Hansen'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Adresse'}>
                  {'Adresseveien 1'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Postnummer'}>
                  {'1314'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Poststed'}>
                  {'Kolbotn'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Rolle'}>
                  {'Styreeier'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Navn'}>
                  {'McRonald Hansen'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Adresse'}>
                  {'Adresseveien 1'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Postnummer'}>
                  {'1314'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Poststed'}>
                  {'Kolbotn'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Rolle'}>
                  {'Styreeier'}
                </DescriptionList.Element>
              </DescriptionList>
            </Card.Content>
          </Card>
        </div>
        <div className={styles.article}>
          <Checkbox
            ref={checkRef}
            checked={isChecked}
            errorMessage={errorMessage}
            className={`${styles.marginTopM} ${styles.marginBottomXl}`}
            onChange={() => {
              setIsChecked(!isChecked);
              setErrorMessage('');
            }}
          >
            {'Jeg bekrefter at opplysningene stemmer'}
          </Checkbox>
          <Button
            className={styles.marginRightM}
            onClick={() => {
              if (isChecked) {
                linkTo('Sidetyper/Ekstern/Oppgaveliste', 'Oppgaveliste')();
              } else {
                setErrorMessage('Du må bekrefte at opplysningene stemmer.');
                checkRef.current?.focus();
              }
            }}
          >
            {'Lagre og gå til oppgaveliste'}
          </Button>
          <Button variant={'secondary'}>{'Avbryt'}</Button>
        </div>
      </main>
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
};
