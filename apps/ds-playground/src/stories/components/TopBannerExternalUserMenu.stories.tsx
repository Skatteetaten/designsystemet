import { Meta, StoryObj } from '@storybook/react-vite';

import {
  TopBannerExternal,
  TopBannerExternalUserMenu,
  TopBannerExternalUserMenuProps,
} from '@skatteetaten/ds-layout';

import { category } from '../../../.storybook/helpers';

TopBannerExternal.UserMenu.displayName = 'TopBannerExternal.UserMenu';

const meta = {
  component: TopBannerExternalUserMenu,
  argTypes: {
    // Props
    notificationCount: { table: { category: category.props } },
    user: { table: { category: category.props } },
    children: { control: 'text', table: { category: category.props } },
    // Events
    onLogOutClick: { table: { category: category.event } },
    onSwitchUserClick: { table: { category: category.event } },
  },
  args: {
    user: {
      person: {
        personId: '123456789',
        name: 'John Doe',
        type: 'person',
      },
      role: 'meg',
    },
  },
} satisfies Meta<TopBannerExternalUserMenuProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
