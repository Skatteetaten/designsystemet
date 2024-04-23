import { Tabs, TabsProps } from '@skatteetaten/ds-collections';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';

const meta = {
  component: Tabs,
  title: 'Tester/Tabs/Tabs',
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
    defaultValue: { table: { disable: true } },
    value: { table: { disable: true } },
    isMultiline: { table: { disable: true } },
    variant: { table: { disable: true } },
    hasBorder: { table: { disable: true } },
    // Events
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: TabsProps = {
  defaultValue: 'tab1',
};

const TemplateTabs: StoryFn<typeof Tabs> = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
        <Tabs.Tab value={'tab3'}>{'Rettskilder'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
      <Tabs.Panel value={'tab3'}>{'Tabs.Panel Rettskilder'}</Tabs.Panel>
    </Tabs>
  );
};

export const Defaults = {
  name: 'Defaults (A2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab1',
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  parameters: {},
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', { name: 'Person' });
    await expect(tab).toBeInTheDocument();
  },
} satisfies Story;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLDivElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: { imageSnapshot: { disable: true } },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('generic')[1];
    await expect(tabs).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithVariantCompact = {
  name: 'With Variant Compact (A1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab1',
    variant: 'compact',
  },
  parameters: {
    imageSnapshot: { disable: false },
  },
  /*   play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person',
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
  }, */
} satisfies Story;

export const WithTabSelected = {
  name: 'With Tab Click (A2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab1',
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person',
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift',
    });
    await userEvent.click(secondTab);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A4)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab1',
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > tab`,
      hover: `${wrapper} > tab`,
      click: `${wrapper} > tab`,
    },
  },
  /*   play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person',
    });
    await expect(firstTab).toBeInTheDocument();
    await expect(firstTab).toHaveAttribute('aria-selected', 'true');
  }, */
} satisfies Story;
