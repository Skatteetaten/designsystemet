import { useRef, useState, MouseEvent, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import {
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

// eslint-disable-next-line @nx/enforce-module-boundaries
import { dsI18n, langToLocale } from '../../../../../libs/ds-core-utils/src';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  getTopBannerLangPickerLocaleDefault,
  getTopBannerLangPickerShowSamiDefault,
} from '../../../../../libs/ds-layout/src/TopBannerLangPicker/defaults';
import { category, htmlEventDescription } from '../../../.storybook/helpers';
import customLogo from '../../assets/custom-logo.svg';
import skeLogo from '../../assets/ske-logo.svg';
import { exampleParameters } from '../utils/stories.utils';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '101010 12345',
  type: 'Person',
};

const businesses: Paginated<Business> = {
  total: 12,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
        {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF',
        },
      ],
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
      ],
    },
    {
      name: 'Samsung DA',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'DA',
    },
    {
      name: 'Toshiba AS',
      organizationNumber: '312643218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Hitachi AS',
      organizationNumber: '312743218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Vanguard AS',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Amazon ASA',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ASA',
    },
    {
      name: 'Meta ANS',
      organizationNumber: '212843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ANS',
    },
  ],
};

const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '138899 99726',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '188495 74503',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '088896 74513',
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '148924 49911',
      type: 'Person',
      isDeleted: false,
    },
  ],
};

const meta = {
  component: TopBannerExternal,
  title: 'Komponenter/TopBannerExternal',
  argTypes: {
    // Props
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
    skipLink: { table: { category: category.props } },
    logo: {
      table: { category: category.props },
      control: 'select',
      options: ['', customLogo, skeLogo],
    },
    user: { table: { category: category.props } },
    firstColumn: { control: 'text', table: { category: category.props } },
    secondColumn: { control: 'text', table: { category: category.props } },
    thirdColumn: { control: 'text', table: { category: category.props } },
    additionalLanguages: { table: { category: category.props } },
    // Events
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

export const Examples: Story = {
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

    const links = [
      { href: '#storybook-root', text: 'Skatt' },
      { href: '#storybook-root', text: 'Avgift' },
      { href: '#storybook-root', text: 'Folkeregisteret' },
    ];

    return (
      <>
        <TopBannerExternal
          ref={topBannerRef}
          firstColumn={
            <LinkGroup>
              {links.map((link, index) => (
                <LinkGroup.Link
                  key={index}
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
          }
          secondColumn={isLoggedIn ? 'Second column' : ''}
          thirdColumn={isLoggedIn ? 'Third column' : ''}
          user={user}
          onLanguageClick={handleLanguageClick}
          onLogInClick={handleLogIn}
          onLogOutClick={handleLogOut}
          onUserClick={(): void => modalRef.current?.showModal()}
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
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
