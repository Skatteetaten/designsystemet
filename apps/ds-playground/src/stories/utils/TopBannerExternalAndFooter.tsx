import { JSX, useRef, useState, MouseEvent, ReactNode } from 'react';

import { Button, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
  LockOutlineSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import {
  Business,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import topBannerExternalExampleStyles from '../components/TopBannerExternalExample.module.scss';

import styles from './TopBannerExternalAndFooter.module.scss';

export function TopBannerExternalAndFooter({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState<User>();

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  const me: Person = {
    name: 'Ola Nordmann',
    personId: '10101012345',
    type: 'Person',
  };

  const businesses: Paginated<Business> = {
    total: 3,
    list: [
      {
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization',
      },
      {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization',
      },
      {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA',
      },
    ],
  };

  enum LenkerUinnlogget {
    PERSON_SKATT = 'https://www.skatteetaten.no/person/skatt/',
    PERSON_AVGIFTER = 'https://www.skatteetaten.no/person/avgifter/',
    PERSON_FOLKEREGISTER = 'https://www.skatteetaten.no/person/folkeregister/',
    PERSON_UTENLANDSK = 'https://www.skatteetaten.no/person/utenlandsk/',
    PERSON_BETALING_OG_INNKREVING = 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
    PERSON_FORSIDE = 'https://www.skatteetaten.no/person/',
    VIRKSOMHET_SKATT = 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
    VIRKSOMHET_AVGIFTER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
    VIRKSOMHET_RAPPORTERING_OG_BRANSJER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
    VIRKSOMHET_STARTE_OG_DRIVE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
    VIRKSOMHET_ARBEIDSGIVER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
    VIRKSOMHET_UTENLANDSK = 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
    VIRKSOMHET_FORSIDE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
    RETTSKILDER = 'https://www.skatteetaten.no/rettskilder/',
    PRESSE = 'https://www.skatteetaten.no/presse/',
    SAMARBEIDSPARTNERE = 'https://www.skatteetaten.no/samarbeidspartnere/',
    KONTAKT = 'https://www.skatteetaten.no/kontakt/',
  }

  enum LenkerInnloggetIkkeMinSide {
    SKATT = '/web/mineskatteforhold/',
    FOLKEREGISTER = '/web/minfolkeregisterside/',
    INNBOKS = '/web/innboks/',
    KJORETOY = '/web/desta/',
    AKSJEOPPGAVEN = '/web/aksjeoppgaven/?referrer=min-side',
  }

  enum MinsideLenker {
    VIRKSOMHET_KALENDER = '/virksomhet/kalender',
    VIRKSOMHET_KRAVOVERSIKT = '/virksomhet/kravoversikt',
    PERSON_FORSIDE = '/person',
    PERSON_ARBEIDINNTEKT = '/person/arbeidinntekt',
    PERSON_EIENDOMMER = '/person/eiendommer',
    PERSON_KRAVOVERSIKT = '/person/kravoversikt',
    PERSON_SAKSTATUS = '/person/sakstatus',
    VIRKSOMHET_SAKSTATUS = '/virksomhet/sakstatus',
  }

  const loggedInLinks = [
    {
      href: MinsideLenker.PERSON_FORSIDE,
      text: 'Min side',
    },
    {
      href: LenkerInnloggetIkkeMinSide.SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerInnloggetIkkeMinSide.FOLKEREGISTER,
      text: 'Folkeregister',
    },
    {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks',
    },
    {
      href: MinsideLenker.PERSON_SAKSTATUS,
      text: 'Mine saker',
    },
    {
      href: MinsideLenker.PERSON_KRAVOVERSIKT,
      text: 'Krav og betalinger',
    },
    {
      href: LenkerInnloggetIkkeMinSide.KJORETOY,
      text: 'Bil og andre kjøretøy',
    },
    {
      href: MinsideLenker.PERSON_ARBEIDINNTEKT,
      text: 'Arbeid og inntekt',
    },
    {
      href: LenkerInnloggetIkkeMinSide.AKSJEOPPGAVEN,
      text: 'Aksjeoppgaven',
    },
    {
      href: MinsideLenker.PERSON_EIENDOMMER,
      text: 'Eiendommer',
    },
  ];

  const personlinks = [
    {
      href: LenkerUinnlogget.PERSON_SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerUinnlogget.PERSON_AVGIFTER,
      text: 'Avgifter',
    },
    {
      href: LenkerUinnlogget.PERSON_FOLKEREGISTER,
      text: 'Folkeregisteret',
    },
    {
      href: LenkerUinnlogget.PERSON_UTENLANDSK,
      text: 'Utenlandsk',
    },
    {
      href: LenkerUinnlogget.PERSON_BETALING_OG_INNKREVING,
      text: 'Betaling og innkreving',
    },
  ];

  const virksomhetlinks = [
    {
      href: LenkerUinnlogget.VIRKSOMHET_SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_AVGIFTER,
      text: 'Avgifter',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_RAPPORTERING_OG_BRANSJER,
      text: 'Rapportering og bransjer',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_STARTE_OG_DRIVE,
      text: 'Starte, drive og avslutte',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_ARBEIDSGIVER,
      text: 'Arbeidsgiver',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_UTENLANDSK,
      text: 'Utenlandsk',
    },
  ];

  const virksomhetLinks = [
    {
      href: 'web/minside/virksomhet/',
      text: 'Min side',
    },
    {
      href: MinsideLenker.VIRKSOMHET_KALENDER,
      text: 'Kalender',
    },
    {
      href: MinsideLenker.VIRKSOMHET_KRAVOVERSIKT,
      text: 'Krav og betalinger',
    },
    {
      href: MinsideLenker.VIRKSOMHET_SAKSTATUS,
      text: 'Mine saker',
    },
    {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks',
    },
  ];

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        classNames={{
          columns: topBannerExternalExampleStyles.columns,
        }}
        firstColumn={
          user ? (
            <Card spacing={'s'}>
              <Card.Content>
                <Heading as={'h2'} level={3}>
                  {user.role === 'meg' && (
                    <FavoriteIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}
                  {user.role === 'andre' && (
                    <AccountMultipleIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}
                  {user.role === 'virksomhet' && (
                    <BriefcaseIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}

                  {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                </Heading>
                <Paragraph variant={'ingress'}>
                  {'Se, endre og send inn'}
                </Paragraph>
                <ul
                  className={`${topBannerExternalExampleStyles.linkWrapper} ${topBannerExternalExampleStyles.linkWrapperPadding}`}
                >
                  {(user.role === 'virksomhet'
                    ? virksomhetLinks
                    : loggedInLinks
                  ).map((link, index) => (
                    <li
                      key={index}
                      className={topBannerExternalExampleStyles.marginBottomS}
                    >
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ) : (
            <>
              <Heading
                as={'h2'}
                level={3}
                className={topBannerExternalExampleStyles.flex}
              >
                <PersonIcon
                  className={topBannerExternalExampleStyles.marginRightS}
                  size={'largePlus'}
                />

                {'Min side'}
              </Heading>
              <Paragraph
                className={topBannerExternalExampleStyles.marginBottomS}
              >
                {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
              </Paragraph>
              <Button
                svgPath={LockOutlineSVGpath}
                onClick={() => modalRef.current?.showModal()}
              >
                {'Logg inn'}
              </Button>
            </>
          )
        }
        secondColumn={
          <>
            <Heading as={'h2'} level={2} hasSpacing>
              {'Alle temaer'}
            </Heading>
            <div className={topBannerExternalExampleStyles.secondColumn}>
              <div>
                <Heading as={'h3'} level={3} hasSpacing>
                  <a href={LenkerUinnlogget.PERSON_FORSIDE}>{'For personer'}</a>
                </Heading>
                <LinkGroup
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  {personlinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
                <Heading as={'h3'} level={3} hasSpacing>
                  <a href={LenkerUinnlogget.VIRKSOMHET_FORSIDE}>
                    {'For bedrifter og organisasjoner'}
                  </a>
                </Heading>
                <LinkGroup
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  {virksomhetlinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
              </div>
              <div>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.PRESSE}>{'Presse'}</a>
                </Heading>
                <Heading
                  as={'h3'}
                  level={4}
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  <a href={LenkerUinnlogget.SAMARBEIDSPARTNERE}>
                    {'Samarbeidspartner'}
                  </a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.KONTAKT}>{'Kontakt oss'}</a>
                </Heading>
              </div>
            </div>
          </>
        }
        searchContent={
          <>
            <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
              {'Dette har andre søkt på:'}
            </Paragraph>
            <LinkGroup>
              <LinkGroup.Link href={'#'}>
                {'Se skatteoppgjøret ditt'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'}>
                {
                  'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift'
                }
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'}>
                {'Se dine skattekrav og betalinger'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
        onSearch={(e, value) => {
          alert(`søker etter ${value}`);
        }}
        onSearchClick={(e, value) => {
          alert(`søker etter ${value}`);
        }}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      <RolePicker
        ref={modalRef}
        me={me}
        businesses={businesses}
        onEntitySelect={async (entity) => {
          let role: User['role'];
          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }
          setUser({
            role: role,
            name: entity.name,
            orgnr: '999 999 999',
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
