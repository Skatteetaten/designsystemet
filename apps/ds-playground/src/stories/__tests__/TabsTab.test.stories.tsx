import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Tabs } from '@skatteetaten/ds-collections';
import { PersonSVGpath } from '@skatteetaten/ds-icons';

const meta = {
  component: Tabs.Tab,
  title: 'Tester/Tabs/Tab',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    value: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
    a11y: {
      // turn off accessibility tests since the tabs.tab component requires a parent component to fullfill accessibility requirements
      test: 'off',
    },
  },
} satisfies Meta<typeof Tabs.Tab>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'Person',
  value: 'TabValue',
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLButtonElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await expect(tab).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

// not possible to set id
export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  args: {
    ...defaultArgs,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await expect(tab).toHaveClass('dummyClassname');
    await expect(tab).toHaveAttribute('lang', 'nb');
    await expect(tab).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab');
    await expect(tab).toBeInTheDocument();
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A4)',
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath,
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
} satisfies Story;
