import type { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: TopBannerInternal.ActionMenu,
  title: 'Komponenter/TopBannerInternal/ActionMenu',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    menuActionsRef: { table: { category: category.props } },
  },
  args: {
    children: 'Menu Content',
  },
  parameters: {
    backgrounds: { default: 'themePrimary' },
  },
} satisfies Meta<typeof TopBannerInternal.ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  decorators: [
    (Story): JSX.Element => (
      <div className={'bottomSpacingXL'}>
        <Story />
      </div>
    ),
  ],
} satisfies Story;
