import { useRef, useState, ChangeEvent, MouseEvent, JSX } from 'react';

import { Button, LinkGroup } from '@skatteetaten/ds-buttons';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Modal } from '@skatteetaten/ds-overlays';
import { Meta, StoryObj } from '@storybook/react';

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

    const handleChangeRole = (e: ChangeEvent<HTMLInputElement>): void => {
      setIsLoggedIn(true);
      const role = e.target.value as User['role'];
      if (role === 'meg') {
        setUser({ role });
      } else {
        setUser({
          role,
          name: 'Knotten, Gudleik',
        });
      }
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
        <Modal ref={modalRef} title={'Dette er dine roller'}>
          <RadioGroup
            legend={'Velge en rolle'}
            selectedValue={user?.role ?? ''}
            onChange={handleChangeRole}
          >
            <RadioGroup.Radio value={'meg'}>
              {'Innlogget som meg selv'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'andre'}>
              {'Innlogget som annen person'}
            </RadioGroup.Radio>
            <RadioGroup.Radio value={'virksomhet'}>
              {'Innlogget som virksomhet'}
            </RadioGroup.Radio>
          </RadioGroup>
          <Button onClick={(): void => modalRef.current?.close()}>
            {'Ok'}
          </Button>
        </Modal>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
