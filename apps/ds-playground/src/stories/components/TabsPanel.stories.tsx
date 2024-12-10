import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@skatteetaten/ds-collections';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Tabs.Panel,
  title: 'Komponenter/Tabs/Panel',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
  },
  args: {
    children: 'Innhold',
    value: 'random',
  },
} satisfies Meta<typeof Tabs.Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
