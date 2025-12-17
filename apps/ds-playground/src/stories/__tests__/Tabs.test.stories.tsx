import { JSX, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import { Tabs, TabsProps } from '@skatteetaten/ds-collections';

const meta = {
  component: Tabs,
  title: 'Tester/Tabs',
  argTypes: {
    // Baseprops
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
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
        <Tabs.Tab value={'tab3'}>{'Organisasjon'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
      <Tabs.Panel value={'tab3'}>{'Tabs.Panel Organisasjon'}</Tabs.Panel>
    </Tabs>
  );
};

const TemplateTabsWithOnClick: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = useState('tab1');

  const handleOnClick = (v: string): void => {
    setValue(v);
  };

  return (
    <Tabs {...args} value={value}>
      <Tabs.List>
        <Tabs.Tab value={'tab1'} onClick={() => handleOnClick('tab1')}>
          {'Person'}
        </Tabs.Tab>
        <Tabs.Tab value={'tab2'} onClick={() => handleOnClick('tab2')}>
          {'Bedrift'}
        </Tabs.Tab>
        <Tabs.Tab value={'tab3'} onClick={() => handleOnClick('tab3')}>
          {'Organisasjon'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
      <Tabs.Panel value={'tab3'}>{'Tabs.Panel Organisasjon'}</Tabs.Panel>
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
    imageSnapshot: { disableSnapshot: true },
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
    const [value, setValue] = useState('tab2');
    const toggleTab = (): void => {
      if (value === 'tab1') {
        setValue('tab2');
      } else {
        setValue('tab1');
      }
    };
    return (
      <>
        <Tabs {...args} value={value}>
          <Tabs.List>
            <Tabs.Tab value={'tab1'}>{'Person'}</Tabs.Tab>
            <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value={'tab1'}>{'Tabs.Panel - Person'}</Tabs.Panel>
          <Tabs.Panel value={'tab2'}>{'Tabs.Panel - Bedrift'}</Tabs.Panel>
        </Tabs>
        <Button onClick={toggleTab}>{'ToggleTab'}</Button>
      </>
    );
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const secondTab = await canvas.findByRole('tab', {
      name: 'Bedrift',
    });
    await expect(secondTab).toHaveAttribute('aria-selected', 'true');

    const button = await canvas.findByRole('button', { name: 'ToggleTab' });
    await userEvent.click(button);
    const firstTab = await canvas.findByRole('tab', {
      name: 'Person',
    });
    await waitFor(() =>
      expect(firstTab).toHaveAttribute('aria-selected', 'true')
    );
    await waitFor(() =>
      expect(secondTab).toHaveAttribute('aria-selected', 'false')
    );
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
    imageSnapshot: { disableSnapshot: true },
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
  },
  globals: {
    viewport: {
      value: '--mobile',
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
    imageSnapshot: { disableSnapshot: true },
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

export const WithTabOnClickEvent = {
  name: 'With Tab OnClick Event',
  render: TemplateTabsWithOnClick,
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
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
    await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    await expect(firstTab).toHaveAttribute('tabIndex', '-1');
  },
} satisfies Story;

export const WithId = {
  render: TemplateTabs,
  args: {
    id: 'skatt',
    defaultValue: 'tab1',
  },
  argTypes: {
    id: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveAttribute('id', 'skatt');
    const tab = canvas.getByRole('tab', { name: 'Person' });
    await expect(tab).toHaveAttribute(
      'aria-controls',
      'ds-tab-panel-skatt-tab1'
    );
    await expect(tab).toHaveAttribute('id', 'ds-tab-id-skatt-tab1');
    const tabPanel = canvas.getByRole('tabpanel');
    await expect(tabPanel).toHaveAttribute('id', 'ds-tab-panel-skatt-tab1');
    await expect(tabPanel).toHaveAttribute(
      'aria-labelledby',
      'ds-tab-id-skatt-tab1'
    );
  },
} satisfies Story;
