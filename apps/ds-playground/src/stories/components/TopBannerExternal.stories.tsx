import { useState } from 'react';

import { TopBannerExternal } from '@skatteetaten/ds-layout';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { getTopBannerLogoHrefDefault } from '../../../../../libs/ds-layout/src/TopBannerLogo/defaults';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getTopBannerSkipLinkHrefDefault } from '../../../../../libs/ds-layout/src/TopBannerSkipLink/defaults';
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
    classNames: { table: { category: category.props } },
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
    logoURL: {
      table: {
        category: category.props,
        defaultValue: { summary: getTopBannerLogoHrefDefault() },
      },
    },
    noLinkLogo: { table: { category: category.props } },
    username: { table: { category: category.props } },
    isLoggedIn: { table: { category: category.props } },
    firstColumn: { control: 'text', table: { category: category.props } },
    secondColumn: { control: 'text', table: { category: category.props } },
    thirdColumn: { control: 'text', table: { category: category.props } },
    onLogIn: {
      table: { category: category.props },
      control: false,
    },
    onLogOut: {
      table: { category: category.props },
      control: false,
    },
  },
  parameters: {
    version: getVersion('ds-layout'),
  },
} satisfies Meta<typeof TopBannerExternal>;

export const Preview: StoryObj<typeof TopBannerExternal> = {};

export const Example: StoryFn<typeof TopBannerExternal> = (_args) => {
  const usernameExample = 'Knotten, Gudleik';

  const [username, setUsername] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setIsLoggedIn(false);
  };
  const handleLogIn = (): void => {
    setIsLoggedIn(true);
    setUsername(usernameExample);
    alert(
      'Hvis bruker har flere roller, så skal en modal tilby roller som kan velges.'
    );
  };
  const handleSwitchUserRole = (): void => {
    alert('Siden jeg er knapp, så skal bruker kunne bytte rolle');
  };

  return (
    <>
      <TopBannerExternal
        firstColumn={isLoggedIn ? 'First Column' : ''}
        secondColumn={'Second column'}
        thirdColumn={'Third column'}
        isLoggedIn={isLoggedIn}
        username={username}
        onLogIn={handleLogIn}
        onLogOut={handleLogOut}
        onSwitchUserRole={handleSwitchUserRole}
      />

      <TopBannerExternal
        firstColumn={'First column'}
        username={usernameExample}
        isLoggedIn
      />
      <TopBannerExternal
        firstColumn={'First column'}
        secondColumn={'Second column'}
        username={usernameExample}
        userRole={'verge'}
        isLoggedIn
      />
      <TopBannerExternal
        firstColumn={'First column'}
        secondColumn={'Second column'}
        thirdColumn={'Third column'}
        username={usernameExample}
        userRole={'virksomhet'}
        isLoggedIn
      />
    </>
  );
};

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};

export const ExampleSource: StoryFn<typeof TopBannerExternal> = () => {
  const usernameExample = 'Knotten, Gudleik';

  const [username, setUsername] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogOut = (): void => {
    setIsLoggedIn(false);
  };
  const handleLogIn = (): void => {
    setIsLoggedIn(true);
    setUsername(usernameExample);
    alert(
      'Hvis bruker har flere roller, så skal en modal tilby roller som kan velges'
    );
  };
  const handleSwitchUserRole = (): void => {
    alert('Siden jeg er knapp, så skal bruker kunne bytte rolle');
  };

  return (
    <>
      <TopBannerExternal
        firstColumn={isLoggedIn ? 'First Column' : ''}
        secondColumn={'Second column'}
        thirdColumn={'Third column'}
        isLoggedIn={isLoggedIn}
        username={username}
        onLogIn={handleLogIn}
        onLogOut={handleLogOut}
        onSwitchUserRole={handleSwitchUserRole}
      />

      <TopBannerExternal
        firstColumn={'First column'}
        username={usernameExample}
        isLoggedIn
      />
      <TopBannerExternal
        firstColumn={'First column'}
        secondColumn={'Second column'}
        username={usernameExample}
        userRole={'verge'}
        isLoggedIn
      />
      <TopBannerExternal
        firstColumn={'First column'}
        secondColumn={'Second column'}
        thirdColumn={'Third column'}
        username={usernameExample}
        userRole={'virksomhet'}
        isLoggedIn
      />
    </>
  );
};

ExampleSource.tags = ['isHidden'];
ExampleSource.parameters = {
  controls: {
    exclude: /.*/,
  },
};
