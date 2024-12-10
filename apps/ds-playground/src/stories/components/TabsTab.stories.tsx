import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Tabs } from '@skatteetaten/ds-collections';
import { BriefcaseSVGpath } from '@skatteetaten/ds-icons';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Tabs.Tab,
  title: 'Komponenter/Tabs/Tab',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    svgPath: {
      table: { category: category.props },
    },
    value: { control: 'text', table: { category: category.props } },
  },
  args: {
    children: 'TabKnapp',
    value: 'random',
  },
} satisfies Meta<typeof Tabs.Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsTabTemplate: StoryFn<typeof Tabs.Tab> = () => (
  <Tabs defaultValue={'tab1'}>
    <Tabs.List key={'list1'}>
      <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
      <Tabs.Tab value={'tab2'} svgPath={BriefcaseSVGpath}>
        {'Bedrift'}
      </Tabs.Tab>
    </Tabs.List>
  </Tabs>
);

export const Preview: Story = {
  render: TabsTabTemplate,
} satisfies Story;
