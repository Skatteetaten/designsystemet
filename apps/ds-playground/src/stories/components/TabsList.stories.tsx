import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@skatteetaten/ds-collections';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Tabs.List,
  title: 'Komponenter/Tabs/List',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  args: {
    children: [
      <Tabs.Tab key={'t1'} value={'tab1'}>
        {'Alle oppgaver'}
      </Tabs.Tab>,
      <Tabs.Tab key={'t2'} value={'tab2'}>
        {'Prioriterte oppgaver'}
      </Tabs.Tab>,
    ],
  },
} satisfies Meta<typeof Tabs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
