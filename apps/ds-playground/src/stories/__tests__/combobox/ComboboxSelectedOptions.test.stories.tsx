import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import type { ComboboxOption } from '@skatteetaten/ds-forms';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxSelectedOptions } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxSelectedOptions';

type ComboboxSelectedOptionsProps = React.ComponentProps<
  typeof ComboboxSelectedOptions
>;

const meta = {
  component: ComboboxSelectedOptions,
  title: 'Tester/Combobox/SelectedOptions',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    multiple: { table: { disable: true } },
    selectedValues: { table: { disable: true } },
    onRemoveValue: { table: { disable: true } },
  },
  tags: ['test'],
} satisfies Meta<typeof ComboboxSelectedOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions: ComboboxOption[] = [
  { label: 'Norge', value: 'no' },
  { label: 'Sverige', value: 'se' },
  { label: 'Danmark', value: 'dk' },
];

const defaultProps = {
  multiple: true,
  selectedValues: mockOptions,
  onRemoveValue: fn(),
};

export const OnRemoveValueCallback = {
  name: 'onRemoveValue callback (A11)',
  args: {
    ...defaultProps,
    onRemoveValue: fn(),
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxSelectedOptionsProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should call onRemoveValue with correct option when chip button is clicked
    const norgeChipButton = canvas.getByRole('button', { name: /Norge/i });
    await userEvent.click(norgeChipButton);

    await expect(args.onRemoveValue).toHaveBeenCalledTimes(1);
    await expect(args.onRemoveValue).toHaveBeenCalledWith({
      label: 'Norge',
      value: 'no',
    });
  },
} satisfies Story;

export const WithDisabledChips = {
  name: 'Disabled chips',
  args: {
    ...defaultProps,
    disabled: true,
  },
  parameters: {
    chromatic: { disableSnapshot: false },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole('button');
    for (const chip of chips) {
      await expect(chip).toBeDisabled();
    }
  },
} satisfies Story;
