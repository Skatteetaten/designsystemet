import { useRef, useState, MouseEvent, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { dsI18n, langToLocale } from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  ArrowUpDownSVGpath,
  BriefcaseIcon,
  ChatBubbleOutlineSVGpath,
  FavoriteIcon,
  LockOutlineSVGpath,
  PersonIcon,
  ShareSVGpath,
} from '@skatteetaten/ds-icons';
import {
  TopBannerExternal,
  TopBannerExternalHandle,
  TopBannerExternalUserMenu,
  User,
} from '@skatteetaten/ds-layout';
import {
  Business,
  Paginated,
  Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from '../../../../../libs/ds-layout/src/TopBannerLangPicker/defaults';
import { category, htmlEventDescription } from '../../../.storybook/helpers';
import customLogo from '../../assets/custom-logo.svg';
import skeLogo from '../../assets/ske-logo.svg';
import { exampleParameters } from '../utils/stories.utils';

import topBannerExternalExampleStyles from './TopBannerExternalExample.module.scss';

const meta = {
  component: TopBannerExternal,
  title: 'Komponenter/TopBannerExternal',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    showSami: {
      table: {
        category: category.props,
        defaultValue: {
          summary: String(getTopBannerLangPickerShowSamiDefault()),
        },
      },
    },
    defaultLocale: {
      table: {
        control: 'text',
        category: category.props,
        defaultValue: { summary: getTopBannerLangPickerLocaleDefault() },
      },
    },
    children: { control: 'text', table: { category: category.props } },
    skipLink: { control: false, table: { category: category.props } },
    logo: {
      table: { category: category.props },
      control: 'select',
      options: ['', customLogo, skeLogo],
    },
    user: { control: false, table: { category: category.props } },
    firstColumn: { control: 'text', table: { category: category.props } },
    secondColumn: { control: 'text', table: { category: category.props } },
    thirdColumn: { control: 'text', table: { category: category.props } },
    additionalLanguages: {
      control: false,
      table: { category: category.props },
    },
    searchContent: { control: 'text', table: { category: category.props } },
    // Events
    onSearchClick: {
      ...htmlEventDescription,
    },
    onSearch: {
      ...htmlEventDescription,
    },
    onLogInClick: {
      ...htmlEventDescription,
    },
    onLogOutClick: {
      ...htmlEventDescription,
    },
    onUserClick: {
      ...htmlEventDescription,
    },
    onLanguageClick: {
      ...htmlEventDescription,
    },
  },
  args: {
    // uten undefined så blir funksjonene initalisert med mockConstructor i Storybook
    onLogInClick: undefined,
    onLogOutClick: undefined,
    onUserClick: undefined,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TopBannerExternal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const ExampleWithRolePicker: Story = {
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();

    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };

    const handleLogOut = (): void => {
      setUser(undefined);
    };

    const handleLogIn = (): void => {
      modalRef.current?.showModal();
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
      RETTSKILDER_PER_EMNE = 'https://www.skatteetaten.no/rettskilder/emne/',
      RETTSKILDER_PER_TYPE = 'https://www.skatteetaten.no/rettskilder/type/',
      OM_OSS_KONTAKT = 'https://www.skatteetaten.no/kontakt/',
      OM_OSS_DELING_AV_DATA = 'https://www.skatteetaten.no/deling/',
      OM_OSS_PRESSE = 'https://www.skatteetaten.no/presse/',
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
        href: LenkerUinnlogget.PERSON_FORSIDE,
        text: 'Person forside',
      },
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
        text: 'Starte og drive',
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

    const omOssLinks = [
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Kontakt oss',
        svgPath: ChatBubbleOutlineSVGpath,
      },
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Deling av data',
        svgPath: ArrowUpDownSVGpath,
      },
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Presse',
        svgPath: ShareSVGpath,
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
                        <Link
                          href={link.href}
                          onClick={(e): void => {
                            e.preventDefault();
                            topBannerRef.current?.closeMenu?.();
                          }}
                        >
                          {link.text}
                        </Link>
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
                  {'Se dine oppgaver og oversikt. Les og svar på meldinger'}
                </Paragraph>
                <Button svgPath={LockOutlineSVGpath}>
                  {'Logg inn på min side'}
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
                    <a href={LenkerUinnlogget.PERSON_FORSIDE}>
                      {'For personer'}
                    </a>
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
                  <Heading as={'h3'} level={3} hasSpacing>
                    <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
                  </Heading>
                  <LinkGroup
                    className={topBannerExternalExampleStyles.marginBottomXL}
                  >
                    <LinkGroup.Link
                      href={LenkerUinnlogget.RETTSKILDER_PER_EMNE}
                    >
                      {'Rettskilder per emne'}
                    </LinkGroup.Link>
                    <LinkGroup.Link
                      href={LenkerUinnlogget.RETTSKILDER_PER_TYPE}
                    >
                      {'Rettskilder per type'}
                    </LinkGroup.Link>
                  </LinkGroup>
                  <Heading as={'h3'} level={3} hasSpacing>
                    {'Om oss'}
                  </Heading>
                  <ul
                    className={`${topBannerExternalExampleStyles.linkWrapper} ${topBannerExternalExampleStyles.noPadding}`}
                  >
                    {omOssLinks.map((link, index) => (
                      <li
                        key={index}
                        className={topBannerExternalExampleStyles.marginBottomS}
                      >
                        <Link href={link.href} svgPath={link.svgPath}>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          }
          user={user}
          searchContent={
            <>
              <Paragraph
                className={topBannerExternalExampleStyles.marginBottomS}
              >
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
          onLogInClick={handleLogIn}
          onLogOutClick={handleLogOut}
          onUserClick={(): void => modalRef.current?.showModal()}
          onSearch={(e, value) => {
            alert(`søker etter ${value}`);
          }}
          onSearchClick={(e, value) => {
            alert(`søker etter ${value}`);
          }}
        />
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
            });
            modalRef.current?.close();
          }}
        />
      </>
    );
  },
} satisfies Story;
ExampleWithRolePicker.parameters = exampleParameters;

export const ExampleWithUserMenu: Story = {
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };

    const handleLogOut = (): void => {
      setUser(undefined);
      setIsLoggedIn(false);
    };

    const handleLogIn = (): void => {
      modalRef.current?.showModal();
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
      RETTSKILDER_PER_EMNE = 'https://www.skatteetaten.no/rettskilder/emne/',
      RETTSKILDER_PER_TYPE = 'https://www.skatteetaten.no/rettskilder/type/',
      OM_OSS_KONTAKT = 'https://www.skatteetaten.no/kontakt/',
      OM_OSS_DELING_AV_DATA = 'https://www.skatteetaten.no/deling/',
      OM_OSS_PRESSE = 'https://www.skatteetaten.no/presse/',
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
        href: LenkerUinnlogget.PERSON_FORSIDE,
        text: 'Person forside',
      },
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
        text: 'Starte og drive',
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

    const omOssLinks = [
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Kontakt oss',
        svgPath: ChatBubbleOutlineSVGpath,
      },
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Deling av data',
        svgPath: ArrowUpDownSVGpath,
      },
      {
        href: LenkerUinnlogget.OM_OSS_KONTAKT,
        text: 'Presse',
        svgPath: ShareSVGpath,
      },
    ];

    return (
      <>
        <TopBannerExternal
          ref={topBannerRef}
          firstColumn={
            user ? (
              <Card spacing={'s'}>
                <Card.Content>
                  <Heading as={'h2'} level={3}>
                    {user.role === 'meg' && (
                      <FavoriteIcon className={'marginRightS'} />
                    )}
                    {user.role === 'andre' && (
                      <AccountMultipleIcon className={'marginRightS'} />
                    )}
                    {user.role === 'virksomhet' && (
                      <BriefcaseIcon className={'marginRightS'} />
                    )}

                    {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                  </Heading>
                  <Paragraph variant={'ingress'}>
                    {'Se, endre og send inn'}
                  </Paragraph>
                  <ul
                    className={`${styles.linkWrapper} ${styles.columnOneLinkPadding}`}
                  >
                    {(user.role === 'virksomhet'
                      ? virksomhetLinks
                      : loggedInLinks
                    ).map((link, index) => (
                      <li key={index} className={styles.menuSpacingSmall}>
                        <Link
                          href={link.href}
                          onClick={(e): void => {
                            e.preventDefault();
                            topBannerRef.current?.closeMenu?.();
                          }}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>
            ) : (
              <>
                <Heading as={'h2'} level={3} className={styles.flex}>
                  <PersonIcon className={'marginRightS'} size={'largePlus'} />

                  {'Min side'}
                </Heading>
                <Paragraph className={styles.menuSpacingSmall}>
                  {'Se dine oppgaver og oversikt. Les og svar på meldinger'}
                </Paragraph>
                <Button svgPath={LockOutlineSVGpath}>
                  {'Logg inn på min side'}
                </Button>
              </>
            )
          }
          secondColumn={
            <>
              <Heading as={'h2'} level={2} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <Heading as={'h3'} level={3} hasSpacing>
                <a href={LenkerUinnlogget.PERSON_FORSIDE}>{'For personer'}</a>
              </Heading>
              <LinkGroup className={styles.menuSpacingLarge}>
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
              <LinkGroup>
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
            </>
          }
          thirdColumn={
            <div className={styles.columnWrapper}>
              <Heading as={'h3'} level={3} hasSpacing>
                <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
              </Heading>
              <LinkGroup className={styles.menuSpacingLarge}>
                <LinkGroup.Link href={LenkerUinnlogget.RETTSKILDER_PER_EMNE}>
                  {'Rettskilder per emne'}
                </LinkGroup.Link>
                <LinkGroup.Link href={LenkerUinnlogget.RETTSKILDER_PER_TYPE}>
                  {'Rettskilder per type'}
                </LinkGroup.Link>
              </LinkGroup>
              <Heading as={'h3'} level={3} hasSpacing>
                {'Om oss'}
              </Heading>
              <ul
                className={`${styles.linkWrapper} ${styles.columnThreeLinkPadding}`}
              >
                {omOssLinks.map((link, index) => (
                  <li key={index} className={styles.menuSpacingSmall}>
                    <Link href={link.href} svgPath={link.svgPath}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          }
          user={user}
          searchContent={
            <>
              <Paragraph className={'bottomSpacingS'}>
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
          onLogInClick={handleLogIn}
          onLogOutClick={handleLogOut}
          onUserClick={(): void => modalRef.current?.showModal()}
          onSearch={(e, value) => {
            alert(`søker etter ${value}`);
          }}
          onSearchClick={(e, value) => {
            alert(`søker etter ${value}`);
          }}
        />
        <RolePicker
          ref={modalRef}
          me={me}
          businesses={businesses}
          people={people}
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
            });
            modalRef.current?.close();
          }}
        />
        <TopBannerExternalUserMenu children={'Hei Lasse!'} />
      </>
    );
  },
} satisfies Story;
ExampleWithUserMenu.parameters = exampleParameters;
