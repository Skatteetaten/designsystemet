import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { TopBannerExternalUserMenu } from '@skatteetaten/ds-layout';

const meta: Meta<typeof TopBannerExternalUserMenu> = {
  title: 'Tester/TopBanner/TopBannerExternalUserMenu',
  component: TopBannerExternalUserMenu,
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    user: { table: { disable: true } },
    notificationCount: { table: { disable: true } },
    children: { table: { disable: true } },
    // Events
    onLogOutClick: { table: { disable: true } },
    onSwitchUserClick: { table: { disable: true } },
  },
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
  },
} satisfies Meta<typeof TopBannerExternalUserMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

const menuText = dsI18n.t('ds_layout:topbannerbutton.Menu');
const userIconTitle = dsI18n.t('ds_layout:topbannerbutton.CompanyTitle');
const defaultUserName = 'Buljo Tulljo';

export const Default: Story = {
  name: 'With Defaults (A1, A2, B1, B2)',
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText} ${dsI18n.t(
        'ds_overlays:topbannerexternalusermenu.NotificationCountMessage',
        { count: args.notificationCount }
      )}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(menuButton);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const userMenu = menuButton.nextSibling as HTMLDivElement;

    const userName = within(userMenu).getByText('Buljo Tulljo'.toUpperCase());
    await expect(userName).toBeInTheDocument();

    const orgnr = within(userMenu).getByText(
      `${dsI18n.t('ds_overlays:rolepicker.BusinessDescriptionPrefix')} 123 456 789`
    );
    await expect(orgnr).toBeInTheDocument();

    const notificationAmount = canvas.getByText('5');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const WithNoNotifications: Story = {
  name: 'No Notifications',
  args: {
    notificationCount: 0,
  },
  argTypes: {
    notificationCount: { table: { disable: false } },
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

export const WithMoreThan99Notifications: Story = {
  name: 'More Than 99 Notifications (A3)',
  args: {
    notificationCount: 100,
  },
  argTypes: {
    notificationCount: { table: { disable: false } },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText} ${dsI18n.t(
        'ds_overlays:topbannerexternalusermenu.NotificationCountMessage',
        { count: args.notificationCount }
      )}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    const notificationAmount = canvas.getByText('99+');
    await expect(notificationAmount).toBeInTheDocument();
  },
};

export const SwitchUser: Story = {
  args: {
    onSwitchUserClick: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${userIconTitle} ${defaultUserName} ${menuText} ${dsI18n.t(
        'ds_overlays:topbannerexternalusermenu.NotificationCountMessage',
        { count: args.notificationCount }
      )}`,
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
    notificationCount: 0,
  },
  parameters: {
    imageSnapshot: { disable: true },
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
    },
    notificationCount: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuButton = canvas.getByRole('button', {
      name: `${dsI18n.t('ds_layout:topbannerbutton.MyselfTitle')} ${dsI18n.t('ds_layout:topbannerbutton.Myself')} ${menuText}`,
    });

    await expect(menuButton).toBeInTheDocument();
    await userEvent.click(menuButton);

    const onBehalfOfText = canvas.queryByText('På vegne av');
    await expect(onBehalfOfText).not.toBeInTheDocument();
  },
};

export const WithChildren: Story = {
  name: 'With Custom Children (A6)',
  args: {
    children: <div data-testid={'usermenu-child'}>{'Child'}</div>,
    notificationCount: 0,
  },
  argTypes: {
    children: { table: { disable: false } },
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

export const WithLongBusinessName: Story = {
  args: {
    user: {
      name: 'Ytre Enebakk Trefelling og økologisk Lemon Curd Ringo Hirtshals',
      role: 'virksomhet',
      orgnr: '123456789',
    },
  },
};
