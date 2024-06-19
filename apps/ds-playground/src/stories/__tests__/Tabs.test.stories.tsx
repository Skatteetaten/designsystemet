import { JSX } from 'react';

import { Tabs, TabsProps } from '@skatteetaten/ds-collections';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@skatteetaten/ds-buttons';

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
  onChange: fn(),
  defaultValue: 'tab1',
};

const TemplateTabs: StoryFn<typeof Tabs> = (args) => {
  return (
    <Tabs
      {...args}
      onChange={(e): void => {
        args.onChange?.(e);
      }}
    >
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
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  parameters: {
    viewport: {
      defaultViewport: undefined,
    },
  },
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

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
  args: {
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    defaultValue: 'tab1',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'htmlId');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithVariantCompact = {
  name: 'With Variant Compact (A1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    variant: 'compact',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: false },
  },
} satisfies Story;

export const WithDefaultValue = {
  name: 'With DefaultValue',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    defaultValue: 'tab2',
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift',
    });
    await expect(secondTab).toBeInTheDocument();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',
  args: {
    ...defaultArgs,
    defaultValue: undefined,
    value: 'tab2',
  },
  argTypes: {
    value: { table: { disable: false } },
  },
  render: (args): JSX.Element => {
    const [{ value }, updateArgs] = useArgs();
    const onChange = (val: string): void => {
      updateArgs({ value: val });
    };
    return (
      <Tabs
        value={value}
        {...args}
        onChange={(e): void => {
          onChange(e);
        }}
      >
        <Tabs.List>
          <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
          <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>
        <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>
      </Tabs>
    );
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift',
    });
    await expect(secondTab).toBeInTheDocument();
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');
    args.value = 'tab1';

    // const button = canvas.getByRole('button');
    // await userEvent.click(button);

    const firsttab = canvas.getByRole('tab', {
      name: 'Person',
    });
    await expect(firsttab).toHaveAttribute('aria-selected', 'true');
  },
} satisfies Story;

export const WithAriaRolesTabindex = {
  name: 'With Aria Roles tabIndex (B1, B2)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByRole('tab', {
      name: 'Person',
    });
    await expect(firstTab).toBeInTheDocument();
    const tabList = canvas.getByRole('tablist');
    await expect(tabList).toBeInTheDocument();
    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toBeInTheDocument();
    await step(
      'Sjekk om korrekt tabIndex på aktiv og ikke-aktive tabs',
      async () => {
        const tabs = canvas.getAllByRole('tab');
        Object.entries(tabs).forEach(async ([_i, tabElement], index) => {
          await expect(tabElement).toHaveAttribute(
            'tabIndex',
            index === 0 ? '0' : '-1'
          );
        });
      }
    );
  },
} satisfies Story;

export const WithMultiline = {
  name: 'With Multiline (A5)',
  args: {
    ...defaultArgs,
    isMultiline: true,
  },
  argTypes: {
    isMultiline: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: false },
    viewport: {
      defaultViewport: '--mobile',
    },
  },
  render: (args): JSX.Element => {
    return (
      <Tabs {...args}>
        <Tabs.List>
          <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
          <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
          <Tabs.Tab value={'tab3'}>{'Ubehandlede saker (+99)'}</Tabs.Tab>
          <Tabs.Tab value={'tab4'}>{'Behandlede saker (1)'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>
        <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>
        <Tabs.Panel value={'tab3'}>
          {'Tabs.Panel - Ubehandlede saker (+99)'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab4'}>{'Tabs.Panel - Behandlede'}</Tabs.Panel>
      </Tabs>
    );
  },
} satisfies Story;

export const WithTabClick = {
  name: 'With Tab Click (A2, B2, B3, B4)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
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
    await expect(firstTab).toHaveAttribute('tabIndex', '0');
    const secondTab = canvas.getByRole('tab', {
      name: 'Bedrift',
    });
    await userEvent.click(secondTab);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    await expect(firstTab).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;
