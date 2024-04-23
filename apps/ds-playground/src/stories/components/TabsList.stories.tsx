import { Tabs } from '@skatteetaten/ds-collections';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Tabs.List,
  title: 'Komponenter/Tabs/List',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
  },
  args: {
    children: [
      <Tabs.Tab key={'t1'} value={'tab1'} index={1}>
        {'En tab'}
      </Tabs.Tab>,
      <Tabs.Tab key={'t2'} value={'tab2'} index={2}>
        {'En tab til'}
      </Tabs.Tab>,
    ],
  },
  parameters: {
    version: getVersion('ds-collections'),
  },
} satisfies Meta<typeof Tabs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
