import { JSX, useRef, useState, MouseEvent, useId } from 'react';

import { linkTo } from '@storybook/addon-links';

import {
  Button,
  Link,
  LinkGroup,
  ScrollToTopButton,
} from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, Panel } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
  InfoIcon,
  LockOutlineSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';
import {
  Footer,
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import {
  Business,
  Modal,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import stylesAsString from './ExternalLayout.module.scss?raw';
import { includeStylesTransform } from '../../../.storybook/helpers';

import styles from './ExternalLayout.module.scss';

export default {
  title: 'Sidetyper/Ekstern/Layout',
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

export const Layout = (): JSX.Element => {
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const [user, setUser] = useState<User>();

  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step2, setStep2] = useState<string | undefined>(undefined);
  const [hasStep2Error, setHasStep2Error] = useState(false);
  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  const me: Person = {
    name: 'Knuslete Foxtrot',
    personId: '12345678910',
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
      text: 'Krav og betaling',
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
      text: 'Krav og betaling',
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
    <div className={styles.page}>
      <TopBannerExternal
        ref={topBannerRef}
        classNames={{
          columns: styles.columns,
        }}
        firstColumn={
          user ? (
            <Card spacing={'s'}>
              <Card.Content>
                <Heading as={'h2'} level={3}>
                  {user.role === 'meg' && (
                    <FavoriteIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'andre' && (
                    <AccountMultipleIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'virksomhet' && (
                    <BriefcaseIcon className={styles.marginRightS} />
                  )}

                  {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                </Heading>
                <Paragraph variant={'ingress'}>
                  {'Se, endre og send inn'}
                </Paragraph>
                <ul className={styles.linkWrapper}>
                  {(user.role === 'virksomhet'
                    ? virksomhetLinks
                    : loggedInLinks
                  ).map((link, index) => (
                    <li key={index} className={styles.marginBottomS}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ) : (
            <>
              <Heading as={'h2'} level={3} className={styles.flex}>
                <PersonIcon
                  className={styles.marginRightS}
                  size={'largePlus'}
                />

                {'Min side'}
              </Heading>
              <Paragraph className={styles.marginBottomS}>
                {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
              </Paragraph>
              <Button
                svgPath={LockOutlineSVGpath}
                onClick={() => rolePickerRef.current?.showModal()}
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
            <div className={styles.secondColumn}>
              <div>
                <Heading as={'h3'} level={3} hasSpacing>
                  <a href={LenkerUinnlogget.PERSON_FORSIDE}>{'For personer'}</a>
                </Heading>
                <LinkGroup className={styles.marginBottomXL}>
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
                <LinkGroup className={styles.marginBottomXL}>
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
                <Heading as={'h3'} level={4} className={styles.marginBottomXL}>
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
            <Paragraph className={styles.marginBottomS}>
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
          !user ? (): void => rolePickerRef.current?.showModal() : undefined
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
            onSwitchUserClick={() => rolePickerRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      <RolePicker
        ref={rolePickerRef}
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
          rolePickerRef.current?.close();
        }}
      />
      <main className={styles.mainContent}>
        <Breadcrumbs className={styles.marginBottomXL}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 1'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 2'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 3'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 4'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
        <div className={styles.article}>
          <Heading as={'h1'} level={2} hasSpacing>
            {'Eksempel på layout i publikumsløsninger'}
          </Heading>
          <Paragraph hasSpacing>
            {
              'Dette er et eksempel på hvordan layouten i eksterne løsninger kan se ut. Layouten er sentret. På storre skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare en.'
            }
          </Paragraph>
          <Button
            className={styles.marginBottomXL}
            onClick={(): void => modalRef.current?.showModal()}
          >
            {'Åpne Modal med StepList'}
          </Button>
          <Modal ref={modalRef} title={'Test med StepList i Modal'}>
            <StepList className={styles.marginBottomXL}>
              {activeStep >= 1 && (
                <StepList.Step
                  id={`${stepId}-1`}
                  variant={activeStep === 1 ? 'active' : 'passive'}
                  title={'StepList har også en innebygd containerbredde'}
                  stepNumber={1}
                  //slik at ikke første steg stjeler fokus ved initiell lasting av siden
                  shouldAutoFocusWhenActive={false}
                  onNext={onNext}
                >
                  {
                    'Dette innholdet har en fast bredde på --semantic-responsive-article.'
                  }
                  <br />
                  {
                    'Hvis vi erstatter bredden med minmax(40px, var(--semantic-responsive-article)) vil innholdet tilpasse seg bredden på Modal.'
                  }
                </StepList.Step>
              )}

              {activeStep >= 2 && (
                <StepList.Step
                  id={`${stepId}-2`}
                  variant={activeStep === 2 ? 'active' : 'passive'}
                  title={'Vil du gå videre?'}
                  stepNumber={2}
                  onEdit={
                    activeStep > 3 && activeStep < 5
                      ? (): void => setActiveStep(2)
                      : undefined
                  }
                  onNext={(): void => {
                    if (step2) {
                      onNext();
                    } else {
                      setHasStep2Error(true);
                    }
                  }}
                >
                  {activeStep === 2 ? (
                    <>
                      <RadioGroup
                        legend={'Vil du gå videre?'}
                        errorMessage={
                          hasStep2Error
                            ? 'Kryss av om du vil gå videre'
                            : undefined
                        }
                        hideLegend
                        onChange={(e): void => {
                          setHasStep2Error(false);
                          setStep2(e.target.value);
                        }}
                      >
                        <RadioGroup.Radio id={'step2radio'} value={'ja'}>
                          {'Ja'}
                        </RadioGroup.Radio>
                        <RadioGroup.Radio value={'nei'}>
                          {'Nei'}
                        </RadioGroup.Radio>
                      </RadioGroup>
                      <ErrorSummary showErrorSummary={hasStep2Error}>
                        <ErrorSummary.Error referenceId={'step2radio'}>
                          {'Vil du gå videre?'}
                        </ErrorSummary.Error>
                      </ErrorSummary>
                    </>
                  ) : (
                    <div>{step2}</div>
                  )}
                </StepList.Step>
              )}

              {activeStep >= 3 && (
                <StepList.Step
                  id={`${stepId}-3`}
                  variant={activeStep === 3 ? 'active' : 'passive'}
                  title={'Oppsummering før innsending'}
                  stepNumber={3}
                  onNext={onNext}
                >
                  {activeStep === 3 ? (
                    <Card color={'ochre'}>
                      <Card.Content>
                        <List>
                          <List.Element>
                            {'Du har forstått innholdet'}
                          </List.Element>
                          <List.Element>{'Du vil gå videre'}</List.Element>
                        </List>
                        <Checkbox>
                          {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                        </Checkbox>
                      </Card.Content>
                    </Card>
                  ) : (
                    <div>{'Oppsummering'}</div>
                  )}
                </StepList.Step>
              )}

              {activeStep >= 4 && step2 === 'ja' && (
                <StepList.Step
                  id={`${stepId}-4`}
                  title={'Vårt veiledende svar'}
                  variant={'positiveResult'}
                  stepNumber={4}
                  introTitle={
                    'Virksomheten skal registreres som særavgiftspliktig.'
                  }
                  introTitleAs={'h4'}
                  introContent={
                    <Paragraph>
                      {
                        'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
                      }
                    </Paragraph>
                  }
                >
                  <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
                  <List as={'ol'}>
                    <List.Element>
                      {
                        'Du må bestemme hvilken organisasjonsform som passer best.'
                      }
                    </List.Element>
                    <List.Element>
                      {
                        'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'
                      }
                      {'registermelding'}
                    </List.Element>
                    <List.Element>
                      {
                        'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'
                      }
                      {
                        'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'
                      }
                      {'registrere virksomheten i Merverdiavgiftsregisteret.'}
                    </List.Element>
                  </List>
                </StepList.Step>
              )}

              {activeStep >= 4 && step2 === 'nei' && (
                <StepList.Step
                  id={`${stepId}-4`}
                  title={'neutralt resultat'}
                  variant={'neutralResult'}
                  stepNumber={4}
                >
                  {'more brødtekst'}
                </StepList.Step>
              )}
            </StepList>
          </Modal>
        </div>
        <Panel
          className={styles.marginBottomXL}
          variant={'filled'}
          titleAs={'h2'}
          title={'Størrelser er en del av komponentene'}
          renderIcon={(): JSX.Element => <InfoIcon size={'largePlus'} />}
        >
          {
            'Panel har en maksbredde på --container-m, mens innholdet i Panel har en maksbredde på --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: '
          }
          <Link
            href={'#'}
            onClick={(e) => {
              e.preventDefault();
              linkTo('Designtokens/Containers')();
            }}
          >
            {'Containers'}
          </Link>
          {'.'}
        </Panel>
        <StepList className={styles.marginBottomXL}>
          {activeStep >= 1 && (
            <StepList.Step
              id={`${stepId}-1`}
              variant={activeStep === 1 ? 'active' : 'passive'}
              title={'StepList har også en innebygd containerbredde'}
              stepNumber={1}
              //slik at ikke første steg stjeler fokus ved initiell lasting av siden
              shouldAutoFocusWhenActive={false}
              onNext={onNext}
            >
              {
                '--semantic-responsive-article er bredden på StepList innholdet.'
              }
            </StepList.Step>
          )}

          {activeStep >= 2 && (
            <StepList.Step
              id={`${stepId}-2`}
              variant={activeStep === 2 ? 'active' : 'passive'}
              title={'Vil du gå videre?'}
              stepNumber={2}
              onEdit={
                activeStep > 3 && activeStep < 5
                  ? (): void => setActiveStep(2)
                  : undefined
              }
              onNext={(): void => {
                if (step2) {
                  onNext();
                } else {
                  setHasStep2Error(true);
                }
              }}
            >
              {activeStep === 2 ? (
                <>
                  <RadioGroup
                    legend={'Vil du gå videre?'}
                    errorMessage={
                      hasStep2Error ? 'Kryss av om du vil gå videre' : undefined
                    }
                    hideLegend
                    onChange={(e): void => {
                      setHasStep2Error(false);
                      setStep2(e.target.value);
                    }}
                  >
                    <RadioGroup.Radio id={'step2radio'} value={'ja'}>
                      {'Ja'}
                    </RadioGroup.Radio>
                    <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
                  </RadioGroup>
                  <ErrorSummary showErrorSummary={hasStep2Error}>
                    <ErrorSummary.Error referenceId={'step2radio'}>
                      {'Vil du gå videre?'}
                    </ErrorSummary.Error>
                  </ErrorSummary>
                </>
              ) : (
                <div>{step2}</div>
              )}
            </StepList.Step>
          )}

          {activeStep >= 3 && (
            <StepList.Step
              id={`${stepId}-3`}
              variant={activeStep === 3 ? 'active' : 'passive'}
              title={'Oppsummering før innsending'}
              stepNumber={3}
              onNext={onNext}
            >
              {activeStep === 3 ? (
                <Card color={'ochre'}>
                  <Card.Content>
                    <List>
                      <List.Element>{'Du har forstått innholdet'}</List.Element>
                      <List.Element>{'Du vil gå videre'}</List.Element>
                    </List>
                    <Checkbox>
                      {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                    </Checkbox>
                  </Card.Content>
                </Card>
              ) : (
                <div>{'Oppsummering'}</div>
              )}
            </StepList.Step>
          )}

          {activeStep >= 4 && step2 === 'ja' && (
            <StepList.Step
              id={`${stepId}-4`}
              title={'Vårt veiledende svar'}
              variant={'positiveResult'}
              stepNumber={4}
              introTitle={
                'Virksomheten skal registreres som særavgiftspliktig.'
              }
              introTitleAs={'h4'}
              introContent={
                <Paragraph>
                  {
                    'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
                  }
                </Paragraph>
              }
            >
              <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
              <List as={'ol'}>
                <List.Element>
                  {'Du må bestemme hvilken organisasjonsform som passer best.'}
                </List.Element>
                <List.Element>
                  {
                    'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'
                  }
                  {'registermelding'}
                </List.Element>
                <List.Element>
                  {
                    'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'
                  }
                  {
                    'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'
                  }
                  {'registrere virksomheten i Merverdiavgiftsregisteret.'}
                </List.Element>
              </List>
            </StepList.Step>
          )}

          {activeStep >= 4 && step2 === 'nei' && (
            <StepList.Step
              id={`${stepId}-4`}
              title={'neutralt resultat'}
              variant={'neutralResult'}
              stepNumber={4}
            >
              {'more brødtekst'}
            </StepList.Step>
          )}
        </StepList>
        <Card color={'ochre'} className={styles.marginBottomXL}>
          <Card.Header>
            <strong>{'Card har også innebygd containerbredde:'}</strong>
          </Card.Header>
          <Card.Content>
            <List>
              <List.Element>{'max-width er --container-m'}</List.Element>
              <List.Element>
                {'ser ikke bra ut på større skjermer enn container-m'}
              </List.Element>
            </List>
          </Card.Content>
        </Card>
        <section className={styles.responsiveContainer}>
          {'--semantic-responsive-container'}
        </section>
        <section className={styles.responsiveWideContent}>
          {'--semantic-responsive-wide-content'}
        </section>
        <section className={styles.responsiveArticle}>
          {'--semantic-responsive-article'}
        </section>
        <ScrollToTopButton />
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
    </div>
  );
};
