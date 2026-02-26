import { expect, within } from 'storybook/test';
import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

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
    // Aria
    ariaLabel: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
  parameters: {
    a11y: {
      test: 'off',
    },
  },
} satisfies Story;

const ariaLabel = 'Velg type';

export const WithAriaLabel = {
  name: 'With AriaLabel',
  render: TemplateTabsList,
  args: {
    ariaLabel,
    children: [
      <Tabs.Tab key={'k1'} value={'tab1'}>
        {'Person'}
      </Tabs.Tab>,
      <Tabs.Tab key={'k2'} value={'tab2'}>
        {'Bedrift'}
      </Tabs.Tab>,
    ],
  },
  argTypes: {
    ariaLabel: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tablist = canvas.getByRole('tablist');
    await expect(tablist).toHaveAttribute('aria-label', ariaLabel);
  },
} satisfies Story;
