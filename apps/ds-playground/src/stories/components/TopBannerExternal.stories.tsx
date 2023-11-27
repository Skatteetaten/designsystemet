import { useRef, useState } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { RadioGroup } from '@skatteetaten/ds-forms';
import { TopBannerExternal } from '@skatteetaten/ds-layout';
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
import { getTopBannerSkipLinkHrefDefault } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/defaults';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  UserRole,
  userRoleArr,
} from '../../../../../libs/ds-layout/src/TopBannerUserButton/TopBannerUserButton.types';
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
    skipLinkURL: {
      table: {
        category: category.props,
        defaultValue: { summary: getTopBannerSkipLinkHrefDefault() },
      },
    },
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
    username: { table: { category: category.props } },
    userRole: {
      table: { category: category.props },
      options: [...userRoleArr],
      control: 'inline-radio',
    },
    firstColumn: { control: 'text', table: { category: category.props } },
    secondColumn: { control: 'text', table: { category: category.props } },
    thirdColumn: { control: 'text', table: { category: category.props } },
    // Events
    onLogIn: { control: { type: null }, table: { category: category.event } },
    onLogOut: { control: { type: null }, table: { category: category.event } },
    onUsername: {
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
    onLogIn: undefined,
    onLogOut: undefined,
    onUsername: undefined,
  },
};

export const Example: StoryFn<typeof TopBannerExternal> = (_args) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [username, setUsername] = useState<string>('');
  const [userRole, setUserRole] = useState<UserRole | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setUserRole(undefined);
    setUsername('');
    setIsLoggedIn(false);
  };

  const handleLogIn = (): void => {
    modalRef.current?.showModal();
  };

  const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRole(e.target.value as UserRole);
    setIsLoggedIn(true);
    setUsername('Knotten, Gudleik');
  };

  return (
    <>
      <TopBannerExternal logoAs={'div'} />
      <TopBannerExternal
        firstColumn={
          isLoggedIn && (
            <LinkGroup>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Skatt'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Avgift'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Folkeregisteret'}
              </LinkGroup.Link>
            </LinkGroup>
          )
        }
        secondColumn={isLoggedIn ? 'Second column' : ''}
        thirdColumn={isLoggedIn ? 'Third column' : ''}
        username={username}
        userRole={userRole}
        onLogIn={handleLogIn}
        onLogOut={handleLogOut}
        onUsername={(): void => modalRef.current?.showModal()}
      />
      <Modal ref={modalRef} title={'Dette er dine roller'}>
        <RadioGroup
          legend={'Velge en rolle'}
          selectedValue={userRole}
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
  const [username, setUsername] = useState<string>('');
  const [userRole, setUserRole] = useState<UserRole | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setUserRole(undefined);
    setUsername('');
    setIsLoggedIn(false);
  };

  const handleLogIn = (): void => {
    modalRef.current?.showModal();
  };

  const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserRole(e.target.value as UserRole);
    setIsLoggedIn(true);
    setUsername('Knotten, Gudleik');
  };

  return (
    <>
      <TopBannerExternal logoAs={'div'} />
      <TopBannerExternal
        firstColumn={
          isLoggedIn && (
            <LinkGroup>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Skatt'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Avgift'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#storybook-root'}>
                {'Folkeregisteret'}
              </LinkGroup.Link>
            </LinkGroup>
          )
        }
        secondColumn={isLoggedIn ? 'Second column' : ''}
        thirdColumn={isLoggedIn ? 'Third column' : ''}
        username={username}
        userRole={userRole}
        onLogIn={handleLogIn}
        onLogOut={handleLogOut}
        onUsername={(): void => modalRef.current?.showModal()}
      />
      <Modal ref={modalRef} title={'Dette er dine roller'}>
        <RadioGroup
          legend={'Velge en rolle'}
          selectedValue={userRole}
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
