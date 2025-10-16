import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

// eslint-disable-next-line @nx/enforce-module-boundaries
import type { ComboboxOption } from '../../../../../libs/ds-forms/src/Combobox/Combobox.types';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxSelectedOptions } from '../../../../../libs/ds-forms/src/Combobox/ComboboxSelectedOptions';

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
    classNames: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
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

export const ConditionalRenderingMultipleFalse = {
  name: 'Conditional rendering - multiple false',
  args: {
    ...defaultProps,
    multiple: false,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    // Should return null when multiple is false (Storybook wraps in container, so check if empty)
    await expect(canvasElement.firstElementChild?.textContent).toBe('');
  },
} satisfies Story;

export const ConditionalRenderingEmptyValues = {
  name: 'Conditional rendering - empty selectedValues',
  args: {
    ...defaultProps,
    selectedValues: [],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    // Should return null when selectedValues is empty (Storybook wraps in container, so check if empty)
    await expect(canvasElement.firstElementChild?.textContent).toBe('');
  },
} satisfies Story;

export const ConditionalRenderingMultipleFalseAndEmptyValues = {
  name: 'Conditional rendering - multiple false and empty values',
  args: {
    ...defaultProps,
    multiple: false,
    selectedValues: [],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    // Should return null when multiple is false and selectedValues is empty (Storybook wraps in container, so check if empty)
    await expect(canvasElement.firstElementChild?.textContent).toBe('');
  },
} satisfies Story;

export const ConditionalRenderingWithItems = {
  name: 'Conditional rendering - with items',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should render when multiple is true and selectedValues has items
    const chipsList = canvas.getByRole('list');
    await expect(chipsList).toBeInTheDocument();
  },
} satisfies Story;

export const ChipsRenderingCorrectNumber = {
  name: 'Chips rendering - correct number',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should render correct number of chips
    const chips = canvas.getAllByRole('button');
    await expect(chips).toHaveLength(3);
  },
} satisfies Story;

export const ChipsRenderingLabels = {
  name: 'Chips rendering - correct labels',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should render chips with correct labels
    await expect(canvas.getByText('Norge')).toBeInTheDocument();
    await expect(canvas.getByText('Sverige')).toBeInTheDocument();
    await expect(canvas.getByText('Danmark')).toBeInTheDocument();
  },
} satisfies Story;

export const ChipsRenderingSmallSize = {
  name: 'Chips rendering - small size',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should render chips with small size (check CSS class)
    const chips = canvas.getAllByRole('button');
    chips.forEach(async (chip) => {
      await expect(chip.className).toMatch(/removableChip_small/);
    });
  },
} satisfies Story;

export const ChipsRenderingSingleChip = {
  name: 'Chips rendering - single chip',
  args: {
    ...defaultProps,
    selectedValues: [{ label: 'Norge', value: 'no' }],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should render single chip correctly
    const chips = canvas.getAllByRole('button');
    await expect(chips).toHaveLength(1);
    await expect(canvas.getByText('Norge')).toBeInTheDocument();
  },
} satisfies Story;

export const OnRemoveValueCallbackCorrectOption = {
  name: 'onRemoveValue callback - correct option',
  args: {
    ...defaultProps,
    onRemoveValue: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
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

export const OnRemoveValueCallbackDifferentChips = {
  name: 'onRemoveValue callback - different chips',
  args: {
    ...defaultProps,
    onRemoveValue: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxSelectedOptionsProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should call onRemoveValue with correct option for different chips
    // Click on Sverige chip button
    const sverigeChipButton = canvas.getByRole('button', { name: /Sverige/i });
    await userEvent.click(sverigeChipButton);

    await expect(args.onRemoveValue).toHaveBeenCalledWith({
      label: 'Sverige',
      value: 'se',
    });

    // Click on Danmark chip button
    const danmarkChipButton = canvas.getByRole('button', { name: /Danmark/i });
    await userEvent.click(danmarkChipButton);

    await expect(args.onRemoveValue).toHaveBeenCalledWith({
      label: 'Danmark',
      value: 'dk',
    });
    await expect(args.onRemoveValue).toHaveBeenCalledTimes(2);
  },
} satisfies Story;

export const OnRemoveValueCallbackMultipleClicks = {
  name: 'onRemoveValue callback - multiple clicks',
  args: {
    ...defaultProps,
    onRemoveValue: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxSelectedOptionsProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should handle multiple clicks on same chip button
    const norgeChipButton = canvas.getByRole('button', { name: /Norge/i });

    await userEvent.click(norgeChipButton);
    await userEvent.click(norgeChipButton);

    await expect(args.onRemoveValue).toHaveBeenCalledTimes(2);
    await expect(args.onRemoveValue).toHaveBeenNthCalledWith(1, {
      label: 'Norge',
      value: 'no',
    });
    await expect(args.onRemoveValue).toHaveBeenNthCalledWith(2, {
      label: 'Norge',
      value: 'no',
    });
  },
} satisfies Story;

export const CustomClassNamesDefault = {
  name: 'Custom classNames - default styles',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should apply default styles when no custom classNames provided
    const container = canvas.getByRole('list').parentElement;
    // CSS modules will transform the class name, so we check for the presence of class
    await expect(container?.className).toMatch(/chipsInline/);
  },
} satisfies Story;

export const CustomClassNamesCustom = {
  name: 'Custom classNames - custom class',
  args: {
    ...defaultProps,
    classNames: { chips: 'custom-chips-class' },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should apply custom chips className when provided
    const container = canvas.getByRole('list').parentElement;
    // CSS modules will transform the class name, but custom class should be preserved
    await expect(container?.className).toMatch(/chipsInline/);
    await expect(container).toHaveClass('custom-chips-class');
  },
} satisfies Story;

export const CustomClassNamesEmpty = {
  name: 'Custom classNames - empty class',
  args: {
    ...defaultProps,
    classNames: { chips: '' },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should handle empty custom chips className
    const container = canvas.getByRole('list').parentElement;
    // CSS modules will transform the class name
    await expect(container?.className).toMatch(/chipsInline/);
    await expect(container?.className).toMatch(/\s$/); // ends with space
  },
} satisfies Story;

export const CustomClassNamesUndefined = {
  name: 'Custom classNames - undefined',
  args: {
    ...defaultProps,
    classNames: undefined,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should handle undefined classNames prop
    const container = canvas.getByRole('list').parentElement;
    // CSS modules will transform the class name
    await expect(container?.className).toMatch(/chipsInline/);
  },
} satisfies Story;

export const ComponentDisplayName = {
  name: 'Component display name',
  args: {
    ...defaultProps,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async (): Promise<void> => {
    // Should have correct displayName
    await expect(ComboboxSelectedOptions.displayName).toBe(
      'ComboboxComboboxSelectedOptions'
    );
  },
} satisfies Story;

export const EdgeCasesSpecialCharacters = {
  name: 'Edge cases - special characters',
  args: {
    ...defaultProps,
    selectedValues: [
      { label: 'Åland & Øyer', value: 'ao' },
      { label: "Côte d'Ivoire", value: 'ci' },
      { label: 'São Tomé', value: 'st' },
    ],
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    // Should handle options with special characters in labels
    await expect(canvas.getByText('Åland & Øyer')).toBeInTheDocument();
    await expect(canvas.getByText("Côte d'Ivoire")).toBeInTheDocument();
    await expect(canvas.getByText('São Tomé')).toBeInTheDocument();
  },
} satisfies Story;
