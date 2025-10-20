import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';
import type { ComboboxOption } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Callbacks',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    label: { table: { disable: true } },
    options: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    variant: { table: { disable: true } },
    multiple: { table: { disable: true } },
    value: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    helpText: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    minSearchLength: { table: { disable: true } },
    isLoading: { table: { disable: true } },
    loadingMessage: { table: { disable: true } },
    // HTML attributes
    name: { table: { disable: true } },
    disabled: { table: { disable: true } },
    required: { table: { disable: true } },
    // Events
    onSelectionChange: { table: { disable: true } },
    onInputChange: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnFocusCallbackTest = {
  name: 'onFocus callback test (A3)',
  args: {
    ...defaultArgs,
    onFocus: (): void => {
      console.log('Combobox focused');
    },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Focus the input element - callback will be called if prop is working
    await userEvent.click(inputElement);
    await expect(inputElement).toHaveFocus();
  },
} satisfies Story;

export const OnBlurCallbackTest = {
  name: 'onBlur callback test (A3)',
  args: {
    ...defaultArgs,
    onBlur: (): void => {
      console.log('Combobox blurred');
    },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Focus and then blur the input element - callback will be called if prop is working
    await userEvent.click(inputElement);
    await expect(inputElement).toHaveFocus();

    await userEvent.click(canvasElement);
    await expect(inputElement).not.toHaveFocus();
  },
} satisfies Story;

export const OnInputChangeCallbackTest = {
  name: 'onInputChange callback test (A3)',
  args: {
    ...defaultArgs,
    onInputChange: (searchTerm: string): void => {
      console.log('Input changed:', searchTerm);
    },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Type in the input element - callback will be called if prop is working
    await userEvent.click(inputElement);
    await userEvent.type(inputElement, 'Norge');

    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;

export const OnSelectionChangeCallbackTest = {
  name: 'onSelectionChange callback test (A3)',
  args: {
    ...defaultArgs,
    onSelectionChange: (selectedOption: ComboboxOption | null): void => {
      console.log('Selection changed:', selectedOption);
    },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Open dropdown and select an option - callback will be called if prop is working
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);

    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;
