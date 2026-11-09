import { Meta, StoryObj } from '@storybook/react-vite';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: TopBannerInternal.ActionMenu,
  title: 'Komponenter/TopBannerInternal/ActionMenu',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    menuActionsRef: { control: false, table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
  },
  args: {
    children: 'Menu Content',
  },
  globals: {
    backgrounds: { value: 'themePrimary' },
  },
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
