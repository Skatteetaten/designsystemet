import { Tabs } from '@skatteetaten/ds-collections';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta = {
  component: Tabs.List,
  title: 'Tester/Tabs/List',
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

const TemplateTabsList: StoryFn<typeof Tabs> = (args) => {
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
  /*   play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step(
      'Autogenerert id-attributt basert på tab name "tab1"',
      async () => {
        const tabpanel = canvas.getByRole('tabpanel', {
          name: 'Person',
          hidden: true,
        });
        await expect(tabpanel).toHaveAttribute('id', 'ds-tab-panel-tab1');
        await expect(tabpanel).toHaveClass('dummyClassname');
        await expect(tabpanel).toHaveAttribute('lang', 'nb');
        await expect(tabpanel).toHaveAttribute('data-testid', '123ID');
      }
    );
  }, */
} satisfies Story;
