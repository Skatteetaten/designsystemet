import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { within, expect, userEvent } from 'storybook/test';

import { Tabs } from '@skatteetaten/ds-collections';

const meta = {
  component: Tabs.Panel,
  title: 'Tester/Tabs/Panel',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    keepMounted: { table: { disable: true } },
    children: { table: { disable: false } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Tabs.Panel>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateTabs: StoryFn<typeof Tabs.Panel> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel {...args} value={'tab1'}>
        {'PanelInnhold'}
      </Tabs.Panel>
      <Tabs.Panel {...args} value={'tab2'}>
        {'Tabs.Panel Bedrift'}
      </Tabs.Panel>
    </Tabs>
  );
};

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
  args: {
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    children: 'PanelInnhold',
    value: 'tab1',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step(
      'Autogenerert id-attributt basert på tab name "tab1"',
      async () => {
        const tabpanel = canvas.getByRole('tabpanel', {
          name: 'Person',
          hidden: true,
        });
        await expect(tabpanel).toHaveAttribute(
          'id',
          expect.stringMatching(/^ds-tab-panel-.*-tab1$/)
        );
        await expect(tabpanel).toHaveClass('dummyClassname');
        await expect(tabpanel).toHaveAttribute('lang', 'nb');
        await expect(tabpanel).toHaveAttribute('data-testid', '123ID');
      }
    );
  },
} satisfies Story;

const TemplateWithKeepMounted: StoryFn<typeof Tabs.Panel> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Tab value={'tab1'}>{'Tab 1'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Tab 2'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'} keepMounted={args.keepMounted}>
        {'Content Tab 1'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab2'} keepMounted={args.keepMounted}>
        {'Content Tab 2'}
      </Tabs.Panel>
    </Tabs>
  );
};

export const WithKeepMountedFalse = {
  name: 'With KeepMounted False (A6)',
  render: TemplateWithKeepMounted,
  args: {
    keepMounted: false,
    children: 'Test content',
    value: 'tab1',
  },
  argTypes: {
    keepMounted: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    // Initially tab1 should be active and visible, tab2 content should not be in DOM
    const tab1Panel = canvas.getByRole('tabpanel', { name: 'Tab 1' });
    expect(tab1Panel).toBeInTheDocument();
    expect(tab1Panel).not.toHaveAttribute('hidden');

    const tab2Content = canvas.queryByText('Content Tab 2');
    expect(tab2Content).not.toBeInTheDocument();

    // Click tab2 to switch
    const tab2Button = canvas.getByRole('tab', { name: 'Tab 2' });
    await userEvent.click(tab2Button);

    // Now tab2 should be visible, tab1 content should be removed from DOM
    const tab2Panel = canvas.getByRole('tabpanel', { name: 'Tab 2' });
    expect(tab2Panel).toBeInTheDocument();
    expect(tab2Panel).not.toHaveAttribute('hidden');

    const tab1Content = canvas.queryByText('Content Tab 1');
    expect(tab1Content).not.toBeInTheDocument();
  },
} satisfies Story;
