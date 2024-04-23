import { Tabs } from '@skatteetaten/ds-collections';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

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
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof Tabs.Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
