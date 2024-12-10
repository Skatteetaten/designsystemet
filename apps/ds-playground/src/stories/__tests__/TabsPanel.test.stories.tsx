import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

import { Tabs } from '@skatteetaten/ds-collections';

const meta = {
  component: Tabs.Panel,
  title: 'Tester/Tabs/Panel',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    key: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: false } },
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
      <Tabs.Panel {...args}>{'PanelInnhold'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
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
    HTMLSnapshot: { disable: true },
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
