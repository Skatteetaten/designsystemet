import { useRef, useState } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { RadioGroup } from '@skatteetaten/ds-forms';
import {
  TopBannerExternal,
  TopBannerExternalHandle,
  User,
} from '@skatteetaten/ds-layout';
import { Modal } from '@skatteetaten/ds-overlays';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  getTopBannerLogoAsDefault,
  getTopBannerLogoHrefDefault,
} from '../../../../../libs/ds-layout/src/TopBannerLogo/defaults';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { logoAsArr } from '../../../../../libs/ds-layout/src/TopBannerLogo/TopBannerLogo.types';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getTopBannerSkipLinkTargetDefault } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/defaults';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UserRole } from '../../../../../libs/ds-layout/src/TopBannerUserButton/TopBannerUserButton.types';
import { category } from '../../../.storybook/helpers';
import customLogo from '../../assets/custom-logo.svg';
import customMobileLogo from '../../assets/custom-mobile-logo.svg';
import skeMobileLogo from '../../assets/ske-logo-mobile.svg';
import skeLogo from '../../assets/ske-logo.svg';
import { getVersion } from '../utils/version.utils';

export default {
  component: TopBannerExternal,
  title: 'Komponenter/TopBannerExternal',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    skipLinkText: { table: { category: category.props } },
    skipLinkTarget: {
      table: {
        category: category.props,
        defaultValue: { summary: getTopBannerSkipLinkTargetDefault() },
      },
    },
    skipLinkShadowRootNode: { table: { category: category.props } },
    logo: {
      table: { category: category.props },
      control: 'select',
      options: ['', customLogo, skeLogo],
    },
    mobileLogo: {
      table: { category: category.props },
      control: 'select',
      options: ['', customMobileLogo, skeMobileLogo],
    },
    logoAltText: { table: { category: category.props } },
    logoAs: {
      table: { category: category.props },
      options: [...logoAsArr],
      control: 'inline-radio',
      defaultValue: { summary: getTopBannerLogoAsDefault() },
    },
    logoURL: {
      table: {
        category: category.props,
        defaultValue: { summary: getTopBannerLogoHrefDefault() },
      },
    },
    user: { table: { category: category.props } },
    firstColumn: { control: 'text', table: { category: category.props } },
    secondColumn: { control: 'text', table: { category: category.props } },
    thirdColumn: { control: 'text', table: { category: category.props } },
    // Events
    onLogInClick: {
      control: { type: null },
      table: { category: category.event },
    },
    onLogOutClick: {
      control: { type: null },
      table: { category: category.event },
    },
    onUserClick: {
      control: { type: null },
      table: { category: category.event },
    },
  },
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof TopBannerExternal>;

export const Preview: StoryObj<typeof TopBannerExternal> = {
  args: {
    // uten undefined så blir funksjonene initalisert med mockConstructor i Storybook
    onLogInClick: undefined,
    onLogOutClick: undefined,
    onUserClick: undefined,
  },
};

export const Example: StoryFn<typeof TopBannerExternal> = (_args) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setUser(undefined);
    setIsLoggedIn(false);
  };

  const handleLogIn = (): void => {
    modalRef.current?.showModal();
  };

  const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsLoggedIn(true);
    const role = e.target.value as UserRole;
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
      </Modal>
    </>
  );
};

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};

export const ExampleSource: StoryFn<typeof TopBannerExternal> = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setUser(undefined);
    setIsLoggedIn(false);
  };

  const handleLogIn = (): void => {
    modalRef.current?.showModal();
  };

  const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsLoggedIn(true);
    const role = e.target.value as UserRole;
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
      </Modal>
    </>
  );
};

ExampleSource.tags = ['isHidden'];
ExampleSource.parameters = {
  controls: {
    exclude: /.*/,
  },
};
