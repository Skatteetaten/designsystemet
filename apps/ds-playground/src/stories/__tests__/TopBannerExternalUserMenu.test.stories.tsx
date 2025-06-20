import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { TopBannerExternalUserMenu } from '@skatteetaten/ds-layout';

const meta: Meta<typeof TopBannerExternalUserMenu> = {
  title: 'Tester/TopBannerExternalUserMenu',
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
    varslerAmount: 5,
    canRepresentOthers: true,
    onUserClick: fn(),
    onLogOutClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof TopBannerExternalUserMenu>;

export const Default: Story = {
  name: 'Default View',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Sjekker om brukerens navn er synlig
    const userName = canvas.getByText('Buljo Tulljo');
    await expect(userName).toBeInTheDocument();

    // Sjekker om org nummeret er synlig
    const orgnr = canvas.getByText('Orgnr. 123456789');
    await expect(orgnr).toBeInTheDocument();

    // Sjekker om varsler-tallet er synlig
    const notificationAmount = canvas.getByText('5');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const WithNoNotifications: Story = {
  name: 'No Notifications',
  args: {
    varslerAmount: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Sjekker at varsel-sirkelen ikke er synlig
    const varselCircle = canvas.queryByTestId('varsel-circle');
    await expect(varselCircle).not.toBeInTheDocument();
  },
};

export const WithMoreThan9Notifications: Story = {
  name: 'More Than 99 Notifications',
  args: {
    varslerAmount: 100,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Sjekker at varsler-tallet vises som "9+"
    const notificationAmount = canvas.getByText('99+');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const switchUser: Story = {
  name: 'Switch User',
  args: {
    onUserClick: fn(),
    onLogOutClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const switchUserButton = canvas.getByRole('button', {
      name: 'Bytt bruker',
    });
    await expect(switchUserButton).toBeInTheDocument();

    await userEvent.click(switchUserButton);

    await waitFor(() => expect(args.onUserClick).toHaveBeenCalled());
  },
};

export const logOut: Story = {
  name: 'Log Out',
  args: {
    onLogOutClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

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

    // Sjekker at "på vegne av" ikke vises
    const onBehalfOfText = canvas.queryByText('På vegne av');
    await expect(onBehalfOfText).not.toBeInTheDocument();
  },
};
