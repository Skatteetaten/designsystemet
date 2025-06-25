import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TopBannerExternalUserMenu } from '@skatteetaten/ds-layout';

const meta: Meta<typeof TopBannerExternalUserMenu> = {
  title: 'Tester/TopBanner/TopBannerExternalUserMenu',
  component: TopBannerExternalUserMenu,
  args: {
    user: {
      name: 'Buljo Tulljo',
      role: 'virksomhet',
      orgnr: '123456789',
      person: {
        name: 'Buljo Tulljo',
        personId: '6969420420',
        type: '',
      },
    },
    notificationCount: 5,
    canRepresentOthers: true,
    onSwitchUserClick: fn(),
    onLogOutClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof TopBannerExternalUserMenu>;

const menuText = dsI18n.t('ds_layout:topbannerbutton.Menu');
const userIconTitle = dsI18n.t('ds_layout:topbannerbutton.CompanyTitle');
const defaultUserName = 'Buljo Tulljo';

export const Default: Story = {
  name: 'Default View',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const userMenu = menuButton.nextSibling as HTMLDivElement;

    // Sjekker om brukerens navn er synlig
    const userName = within(userMenu).getByText('Buljo Tulljo');
    await expect(userName).toBeInTheDocument();

    // Sjekker om org nummeret er synlig
    const orgnr = within(userMenu).getByText('Orgnr. 123 456 789');
    await expect(orgnr).toBeInTheDocument();

    // Sjekker om varsler-tallet er synlig
    const notificationAmount = canvas.getByText('5');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const WithNoNotifications: Story = {
  name: 'No Notifications',
  args: {
    notificationCount: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    // Sjekker at varsel-sirkelen ikke er synlig
    const varselCircle = canvas.queryByTestId('varsel-circle');
    await expect(varselCircle).not.toBeInTheDocument();
  },
};

export const WithMoreThan9Notifications: Story = {
  name: 'More Than 99 Notifications',
  args: {
    notificationCount: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    // Sjekker at varsler-tallet vises som "99+"
    const notificationAmount = canvas.getByText('99+');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const SwitchUser: Story = {
  args: {
    onSwitchUserClick: fn(),
    onLogOutClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    const switchUserButton = canvas.getByRole('button', {
      name: 'Bytt bruker',
    });
    await expect(switchUserButton).toBeInTheDocument();

    await userEvent.click(switchUserButton);

    await waitFor(() => expect(args.onSwitchUserClick).toHaveBeenCalled());
  },
};

export const LogOut: Story = {
  args: {
    onLogOutClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    const logOutButton = canvas.getByRole('button', { name: 'Logg ut' });
    await expect(logOutButton).toBeInTheDocument();

    await userEvent.click(logOutButton);

    await waitFor(() => expect(args.onLogOutClick).toHaveBeenCalled());
  },
};

export const NoPaaVegneAv: Story = {
  name: 'No "På vegne av"',
  args: {
    user: {
      name: 'Buljo Tulljo',
      role: 'meg',
      person: {
        name: 'Buljo Tulljo',
        personId: '6969420420',
        type: '',
      },
    },
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')} ${dsI18n.t('ds_layout:topbannerbutton.Myself')} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    // Sjekker at "på vegne av" ikke vises
    const onBehalfOfText = canvas.queryByText('På vegne av');
    await expect(onBehalfOfText).not.toBeInTheDocument();
  },
};

export const WithChildren: Story = {
  args: {
    children: <div data-testid={'usermenu-child'}>{'Child'}</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText}`,
    });
    await userEvent.click(menuButton);

    const customChild = canvas.getByTestId('usermenu-child');
    await expect(customChild).toBeInTheDocument();
    await expect(customChild).toHaveTextContent('Child');
  },
};
