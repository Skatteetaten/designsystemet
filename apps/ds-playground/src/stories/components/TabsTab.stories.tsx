import { Tabs } from '@skatteetaten/ds-collections';
import { BriefcaseSVGpath } from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Tabs.Tab,
  title: 'Komponenter/Tabs/Tab',
  argTypes: {
    // Props
    children: { control: 'text', table: { category: category.props } },
    svgPath: {
      table: { category: category.props },
    },
    index: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    //Events
    onClick: { ...htmlEventDescription, table: { disable: true } },
  },
  args: {
    children: 'TabKnapp',
    value: 'random',
  },
  parameters: {
    version: getVersion('ds-collections'),
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
