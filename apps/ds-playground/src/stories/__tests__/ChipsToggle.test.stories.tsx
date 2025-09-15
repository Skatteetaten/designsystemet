import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Chips, ChipsToggleProps } from '@skatteetaten/ds-collections';

const elementId = 'htmlId';

const meta = {
  component: Chips.Toggle,
  title: 'Tester/Chips/Toggle',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    size: { table: { disable: true } },
    isSelected: { table: { disable: true } },
    showCheckmark: { table: { disable: true } },
    children: { table: { disable: true } },
    // HTML
    disabled: { table: { disable: true } },
    // Events
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Chips.Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: ChipsToggleProps = {
  children: 'Trondheim',
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes(FA2-5)',
  args: {
    ...defaultArgs,
    id: elementId,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
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
    const container = canvas.getByRole('button');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('id', elementId);
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(container).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A2, A4,A5 delvis, A7, B1, B4)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('aria-pressed', 'false');
  },
} satisfies Story;

export const WithoutCheckmark = {
  name: 'Without Checkmark (A4)',
  args: {
    showCheckmark: false,
    ...defaultArgs,
  },
  argTypes: {
    showCheckmark: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const icon = canvas.queryByRole('img');
    await expect(icon).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithSelected = {
  name: 'With Selected (A6, B4)',
  args: {
    isSelected: true,
    ...defaultArgs,
  },
  argTypes: {
    showCheckmark: { table: { disable: false } },
    isSelected: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('button');
    await expect(container).toHaveAttribute('aria-pressed', 'true');
  },
} satisfies Story;

export const WithSizeSmall = {
  name: 'With Size Small (A1)',
  args: {
    size: 'small',
    ...defaultArgs,
  },
  argTypes: {
    size: { table: { disable: false } },
    showCheckmark: { table: { disable: false } },
    isSelected: { table: { disable: false } },
  },
} satisfies Story;
