/* eslint-disable @nx/enforce-module-boundaries */
import React, { JSX, createRef } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, waitFor, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import type { ComboboxOption } from '@skatteetaten/ds-forms';

import { ComboboxLoadingMessage } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxLoadingMessage';
import { ComboboxOptions } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxOptions';

type ComboboxOptionsProps = React.ComponentProps<typeof ComboboxOptions>;

const meta = {
  component: ComboboxOptions,
  title: 'Tester/Combobox/Options',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    isOpen: { table: { disable: true } },
    isLoading: { table: { disable: true } },
    spinnerProps: { table: { disable: true } },
    displayOptions: { table: { disable: true } },
    searchTerm: { table: { disable: true } },
    multiple: { table: { disable: true } },
    selectedValues: { table: { disable: true } },
    comboboxId: { table: { disable: true } },
    listId: { table: { disable: true } },
    focusedIndex: { table: { disable: true } },
    classNames: { table: { disable: true } },
    handleButtonFocus: { table: { disable: true } },
    handleOptionSelect: { table: { disable: true } },
    customListRef: { table: { disable: true } },
    hasError: { table: { disable: true } },
    maxSelected: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof ComboboxOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockOptions: ComboboxOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const defaultArgs: ComboboxOptionsProps = {
  isOpen: true,
  displayOptions: mockOptions,
  searchTerm: '',
  multiple: false,
  selectedValues: [],
  comboboxId: 'test-combobox',
  listId: 'test-list',
  focusedIndex: -1,
  handleButtonFocus: fn(),
  handleOptionSelect: fn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customListRef: undefined as any, // Will be overridden in render
};

export const OptionsListWithARIAAttributes = {
  name: 'Options list with correct ARIA attributes (B2)',
  args: defaultArgs,
  render: (args: ComboboxOptionsProps): JSX.Element => (
    <ComboboxOptions {...args} customListRef={createRef<HTMLUListElement>()} />
  ),
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks for tests
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const listbox = canvas.getByRole('listbox');

    await expect(listbox).toBeInTheDocument();
    await expect(listbox).toHaveAttribute('id', 'test-list');
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'false');

    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);
    await expect(options[0]).toHaveTextContent('Option 1');
    await expect(options[0]).toHaveAttribute('id', 'test-combobox-option-0');
    await expect(options[0]).toHaveAttribute('aria-selected', 'false');
  },
} satisfies Story;

export const LoadingStateWithSpinner = {
  name: 'Loading state with spinner (A13)',
  args: {
    ...defaultArgs,
    isLoading: true,
  },
  render: (args: ComboboxOptionsProps): JSX.Element => (
    <ComboboxOptions {...args} customListRef={createRef<HTMLUListElement>()} />
  ),
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks for tests
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByTestId('combobox-loading-spinner')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        canvas.getByText(dsI18n.t('ds_progress:spinner.LoadingLabel'))
      ).toBeInTheDocument();
    });

    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  },
} satisfies Story;

export const NoResultsMessage = {
  name: 'No results message when search has no matches (A6)',
  args: {
    ...defaultArgs,
    searchTerm: 'xyz',
    displayOptions: [],
  },
  render: (args: ComboboxOptionsProps): JSX.Element => (
    <ComboboxOptions {...args} customListRef={createRef<HTMLUListElement>()} />
  ),
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks for tests
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);
    const listbox = canvas.getByRole('listbox');

    await expect(listbox).toBeInTheDocument();
    await expect(canvas.getByText(/Ingen treff for «xyz»/)).toBeInTheDocument();
  },
} satisfies Story;

export const LoadingMessageDefaultText = {
  name: 'Loading message with default text',
  args: defaultArgs,
  render: (): JSX.Element => (
    <ComboboxLoadingMessage comboboxId={'test-combobox'} />
  ),
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks for tests
  },
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    await expect(
      canvas.getByTestId('combobox-loading-spinner')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        canvas.getByText(dsI18n.t('ds_progress:spinner.LoadingLabel'))
      ).toBeInTheDocument();
    });
  },
} satisfies Story;
