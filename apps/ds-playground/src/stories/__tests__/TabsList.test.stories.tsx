import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Tabs } from '@skatteetaten/ds-collections';

const meta = {
  component: Tabs.List,
  title: 'Tester/Tabs/List',
  argTypes: {
    // Baseprops
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: false } },
  },
} satisfies Meta<typeof Tabs.List>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateTabsList: StoryFn<typeof Tabs.List> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List {...args}>
        <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Panel'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
    </Tabs>
  );
};

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabsList,
  args: {
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    children: [
      <Tabs.Tab key={'k1'} value={'tab1'}>
        {'Person'}
      </Tabs.Tab>,
      <Tabs.Tab key={'k1'} value={'tab2'}>
        {'Bedrift'}
      </Tabs.Tab>,
    ],
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
} satisfies Story;
