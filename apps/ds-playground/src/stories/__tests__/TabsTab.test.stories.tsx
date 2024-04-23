import { Tabs } from '@skatteetaten/ds-collections';
import {
  DeploySVGpath,
  LockSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

const meta = {
  component: Tabs.Tab,
  title: 'Tester/Tabs/Tab',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    index: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    value: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
    //    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof Tabs.Tab>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'Tabben',
};

const TemplateTabs: StoryFn<typeof Tabs.Tab> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Tab {...args} svgPath={PersonSVGpath} value={'tab1'}>
          {'Person'}
        </Tabs.Tab>
        <Tabs.Tab {...args} svgPath={LockSVGpath} value={'tab2'}>
          {'Bedrift'}
        </Tabs.Tab>
        <Tabs.Tab {...args} svgPath={DeploySVGpath} value={'tab3'}>
          {'Astronaut'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
      <Tabs.Panel value={'tab3'}>{'Tabs.Panel Astronaut'}</Tabs.Panel>
    </Tabs>
  );
};

export const Defaults = {
  name: 'Defaults (A2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    value: 'tab1',
  },
  argTypes: {
    svgPath: { table: { disable: false } },
  },
  parameters: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', { name: 'Person' });
    await expect(tab).toBeInTheDocument();
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A4)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    value: 'tab2',
  },
  parameters: {
    imageSnapshot: { disable: false },
  },
} satisfies Story;
