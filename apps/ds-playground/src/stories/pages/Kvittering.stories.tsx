import { MouseEvent, useEffect, useRef, useState, type JSX } from 'react';

import {
  Button,
  InlineButton,
  Link,
  LinkGroup,
} from '@skatteetaten/ds-buttons';
import { OpenClose } from '@skatteetaten/ds-collections';
import { DescriptionList, Panel } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatNationalIdentityNumber,
  formatPhoneNumber,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  ArrowBackSVGpath,
  CheckIcon,
  PrintSVGpath,
} from '@skatteetaten/ds-icons';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Person, RolePicker } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './Kvittering.module.css';
import stylesAsString from './Kvittering.module.css?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

export default {
  title: 'Sidetyper/Ekstern/Kvittering',
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

export const Kvittering = (): JSX.Element => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();

  const isMobile = !useMediaQuery('(min-width: 480px)');

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
    type: 'Person',
  };

  const panelRef = useRef<HTMLDivElement>(null);

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
            name: me.name,
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
            {'Skjematittel'}
          </Heading>
          <DescriptionList hasSpacing>
            <DescriptionList.Element term={'Navn'}>
              {'Knuslete Foxtrot'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Fødselsnummer'}>
              {formatNationalIdentityNumber(me.personId)}
            </DescriptionList.Element>
          </DescriptionList>
        </div>
        <div ref={panelRef} tabIndex={-1} className={styles.noFocusVisible}>
          <Panel
            className={styles.panel}
            variant={'outline'}
            color={'forest'}
            title={'[Skjematittel] er sendt inn'}
            titleAs={'h2'}
            renderIcon={(): JSX.Element => (
              <div className={styles.checkIconContainer}>
                <CheckIcon size={'large'} className={styles.checkIcon} />
              </div>
            )}
          >
            <Paragraph className={styles.marginTopM}>
              {'Det kan ta inntil 4 uker før du får svar.'}
            </Paragraph>
            <Paragraph hasSpacing>
              {'Du finner en kopi av skjemaet i innboksen din på Min side.'}
            </Paragraph>
            <Paragraph>{'Sendt inn: 03.07.2023 11:03'}</Paragraph>
            <Paragraph hasSpacing>
              {'Referansenummer: '}
              <strong>{'IN-PG-1234567'}</strong>
            </Paragraph>
            <OpenClose title={'Se hva du har sendt inn'}>
              <DescriptionList
                descriptionDirection={isMobile ? 'vertical' : 'horizontal'}
              >
                <DescriptionList.Element term={'Innsender'}>
                  {'Knuslete Foxtrot'}
                </DescriptionList.Element>
                <DescriptionList.Element term={'Adresse'}>
                  <span className={styles.preLine}>
                    {'Adresseveien 1\n1234 Lillevik'}
                  </span>
                </DescriptionList.Element>
                <DescriptionList.Element term={'Telefon'}>
                  {formatPhoneNumber('98765432')}
                </DescriptionList.Element>
              </DescriptionList>
            </OpenClose>
          </Panel>
        </div>
        <div className={styles.article}>
          <Button className={styles.marginRightM}>{'Til Min side'}</Button>
          <Button variant={'secondary'}>{'Logg ut'}</Button>
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
