import { JSX, MouseEvent, useRef, useState } from 'react';

import { linkTo } from '@storybook/addon-links';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatNationalIdentityNumber,
  formatOrganisationNumber,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
} from '@skatteetaten/ds-icons';
import {
  RoleBanner,
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

import stylesAsString from './RoleBannerExample.module.scss?raw';
import { category } from '../../../.storybook/helpers';
import {
  exampleParameters,
  exampleParametersWithStylesInCode,
} from '../utils/stories.utils';

import styles from './RoleBannerExample.module.scss';
import topBannerExternalExampleStyles from './TopBannerExternalExample.module.scss';

const meta = {
  component: RoleBanner,
  title: 'Komponenter/RoleBanner',
  argTypes: {
    // Baseprops
    ref: { table: { category: category.baseProps } },
    id: { table: { category: category.baseProps } },
    className: { table: { category: category.baseProps } },
    lang: { table: { category: category.baseProps } },
    'data-testid': { table: { category: category.baseProps } },
    // Props
    user: {
      table: { category: category.props },
    },
    isSticky: {
      table: { category: category.props, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    user: {
      name: 'Ola Nordmann',
      role: 'andre',
      identifier: formatNationalIdentityNumber('12345678901'),
    },
  },
} satisfies Meta<typeof RoleBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (args): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {'Velg "logg inn" i '}
          <Link
            href={'#'}
            onClick={(e) => {
              e.preventDefault();
              linkTo('Sidetyper/Ekstern/Skjema Med Steg', 'Skjema Med Steg')();
            }}
          >
            {'skjema med steg'}
          </Link>
          {' for å se eksempel i kontekst.'}
        </Paragraph>
        <RoleBanner {...args} />
      </>
    );
  },
  parameters: exampleParameters,
} satisfies Story;

export const ExampleWithTopBannerExternalMegSelv: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <TopBannerExternal
          user={{ role: 'meg' }}
          onLogOutClick={() => alert('du logget ut')}
        >
          <TopBannerExternal.UserMenu
            className={styles.hiddenUserMenuButton}
            user={{ role: 'meg' }}
          />
        </TopBannerExternal>
        <RoleBanner
          user={{
            name: 'Ola Nordmann',
            role: 'meg',
            identifier: formatNationalIdentityNumber('12345678901'),
          }}
        />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>
    );
  },
} satisfies Story;
ExampleWithTopBannerExternalMegSelv.parameters =
  exampleParametersWithStylesInCode(stylesAsString);

export const ExampleWithTopBannerExternalAndre: Story = {
  render: (_args): JSX.Element => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const topBannerRef = useRef<TopBannerExternalHandle>(null);
    const [user, setUser] = useState<User>({
      role: 'andre',
      name: 'Kari Nordmann',
      person: {
        personId: '10101012345',
        name: 'Kari Nordmann',
        type: 'person',
      },
    });

    const isDesktop = useMediaQuery('(min-width: 640px)');

    const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
      const lang = e.currentTarget.lang;
      dsI18n.changeLanguage(langToLocale[lang]);
    };

    const me: Person = {
      name: 'Ola Nordmann',
      personId: '10101012345',
      type: 'Person',
    };

    const others: Paginated<Person> = {
      total: 2,
      list: [
        {
          name: 'Kari Nordmann',
          personId: '10107554321',
          type: 'Person',
        },
        {
          name: 'Ola Hansen',
          personId: '10108167890',
          type: 'Person',
        },
      ],
    };

    const businesses: Paginated<Business> = {
      total: 2,
      list: [
        {
          name: 'Costco AS',
          organizationNumber: '123456777',
          isDeleted: false,
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

    const loggedInLinks = [
      { href: '/person', text: 'Min side' },
      { href: '/web/mineskatteforhold/', text: 'Skatt' },
      { href: '/web/minfolkeregisterside/', text: 'Folkeregister' },
      { href: '/web/innboks/', text: 'Innboks' },
      { href: '/person/sakstatus', text: 'Mine saker' },
      { href: '/person/kravoversikt', text: 'Krav og betaling' },
      { href: '/web/desta/', text: 'Bil og andre kjøretøy' },
      { href: '/person/arbeidinntekt', text: 'Arbeid og inntekt' },
      { href: '/web/aksjeoppgaven/?referrer=min-side', text: 'Aksjeoppgaven' },
      { href: '/person/eiendommer', text: 'Eiendommer' },
    ];

    const personlinks = [
      { href: 'https://www.skatteetaten.no/person/skatt/', text: 'Skatt' },
      {
        href: 'https://www.skatteetaten.no/person/avgifter/',
        text: 'Avgifter',
      },
      {
        href: 'https://www.skatteetaten.no/person/folkeregister/',
        text: 'Folkeregisteret',
      },
      {
        href: 'https://www.skatteetaten.no/person/utenlandsk/',
        text: 'Utenlandsk',
      },
      {
        href: 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
        text: 'Betaling og innkreving',
      },
    ];

    const virksomhetlinks = [
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
        text: 'Skatt',
      },
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
        text: 'Avgifter',
      },
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
        text: 'Rapportering og bransjer',
      },
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
        text: 'Starte, drive og avslutte',
      },
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
        text: 'Arbeidsgiver',
      },
      {
        href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
        text: 'Utenlandsk',
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
                <ul className={topBannerExternalExampleStyles.linkWrapper}>
                  {loggedInLinks.map((link, index) => (
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
          }
          secondColumn={
            <>
              <Heading as={'h2'} hasSpacing>
                {'Alle temaer'}
              </Heading>
              <div className={topBannerExternalExampleStyles.secondColumn}>
                <div>
                  <Heading as={'h3'} hasSpacing>
                    <a href={'https://www.skatteetaten.no/person/'}>
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
                  <Heading as={'h3'} hasSpacing>
                    <a
                      href={
                        'https://www.skatteetaten.no/bedrift-og-organisasjon/'
                      }
                    >
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
                    <a href={'https://www.skatteetaten.no/rettskilder/'}>
                      {'Rettskilder'}
                    </a>
                  </Heading>
                  <Heading as={'h3'} level={4} hasSpacing>
                    <a href={'https://www.skatteetaten.no/presse/'}>
                      {'Presse'}
                    </a>
                  </Heading>
                  <Heading
                    as={'h3'}
                    level={4}
                    className={topBannerExternalExampleStyles.marginBottomXL}
                  >
                    <a href={'https://www.skatteetaten.no/samarbeidspartnere/'}>
                      {'Samarbeidspartner'}
                    </a>
                  </Heading>
                  <Heading as={'h3'} level={4} hasSpacing>
                    <a href={'https://www.skatteetaten.no/kontakt/'}>
                      {'Kontakt oss'}
                    </a>
                  </Heading>
                </div>
              </div>
            </>
          }
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
          user={user}
          onLogOutClick={() => alert('du logget ut')}
          onLanguageClick={handleLanguageClick}
          onSearch={(_e, value): void => {
            alert(`søker etter ${value}`);
          }}
          onSearchClick={(_e, value): void => {
            alert(`søker etter ${value}`);
          }}
        >
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={(): void => setUser({ role: 'meg', name: me.name })}
            onSwitchUserClick={(): void => modalRef.current?.showModal()}
          />
        </TopBannerExternal>
        <RoleBanner
          user={{
            name: user?.name ?? 'Kari Nordmann',
            role: user?.role ?? 'andre',
            identifier:
              user.role === 'virksomhet'
                ? formatOrganisationNumber(user.orgnr ?? '123 456 789')
                : (formatNationalIdentityNumber(user.person?.personId ?? '') ??
                  '01.01.2026'),
          }}
        />
        <RolePicker
          ref={modalRef}
          me={me}
          people={others}
          businesses={businesses}
          onEntitySelect={async (entity): Promise<void> => {
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
              orgnr:
                entity.type === 'Organization'
                  ? (entity as Business).organizationNumber
                  : undefined,
              person: entity.type === 'Person' ? (entity as Person) : undefined,
            });
            modalRef.current?.close();
          }}
        />
        <main>
          <Paragraph>{'Hovedinnhold'}</Paragraph>
        </main>
      </>
    );
  },
} satisfies Story;
ExampleWithTopBannerExternalAndre.parameters = exampleParameters;
