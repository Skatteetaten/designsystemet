import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxButton } from '../../../../../libs/ds-forms/src/Combobox/ComboboxButton';

type ComboboxButtonProps = React.ComponentProps<typeof ComboboxButton>;

const meta = {
  component: ComboboxButton,
  title: 'Tester/Combobox/Button',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    // Props
    isOpen: { table: { disable: true } },
    hasValue: { table: { disable: true } },
    multiple: { table: { disable: true } },
    disabled: { table: { disable: true } },
    variant: { table: { disable: true } },
    onClear: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof ComboboxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  isOpen: false,
  onClick: fn(),
};

export const ClearButtonFunctionality = {
  name: 'Clear button functionality (single select) (A7, A8, A9)',
  args: {
    ...defaultArgs,
    multiple: false,
    hasValue: true,
    onClear: fn(),
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

    // Verifiser at clear button vises når hasValue og onClear er oppgitt
    const clearButton = canvas.getByRole('button', {
      name: /nullstill valg/i,
    });
    await expect(clearButton).toBeInTheDocument();
    await expect(clearButton).toHaveAttribute('type', 'button');
    await expect(clearButton).toHaveAttribute('data-chevron-button');
  },
} satisfies Story;

export const ClearButtonClick = {
  name: 'Clear button click handler (A9, B2)',
  args: {
    ...defaultArgs,
    multiple: false,
    hasValue: true,
    onClear: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxButtonProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    const clearButton = canvas.getByRole('button', {
      name: /nullstill valg/i,
    });

    // Klikk på clear button
    await userEvent.click(clearButton);

    // Verifiser at onClear ble kalt
    await waitFor(() => expect(args.onClear).toHaveBeenCalled());
  },
} satisfies Story;

export const LargeVariantStyles = {
  name: 'Large variant styles (A7)',
  args: {
    ...defaultArgs,
    variant: 'large',
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

    const openButton = canvas.getByLabelText('Åpne forslag');
    const buttonContainer = openButton.closest('[data-chevron-button]');

    // Verifiser at large variant styles er anvendt - sjekk faktisk størrelse
    const computedStyles = getComputedStyle(buttonContainer as Element);
    await expect(computedStyles.width).toBe('28px');
    await expect(computedStyles.height).toBe('28px');
  },
} satisfies Story;

export const MultipleSelectNoClearButton = {
  name: 'Multiple select - no clear button (A9)',
  args: {
    ...defaultArgs,
    hasValue: true,
    multiple: true,
    onClear: fn(),
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

    // A9 - Verifiser at clear button IKKE vises for multiple select
    await expect(
      canvas.queryByRole('button', { name: /nullstill valg/i })
    ).not.toBeInTheDocument();

    // Men åpne forslag button skal fortsatt være der
    await expect(canvas.getByLabelText('Åpne forslag')).toBeInTheDocument();
  },
} satisfies Story;

export const DisabledStateHandling = {
  name: 'Disabled state handling',
  args: {
    ...defaultArgs,
    disabled: true,
    onClick: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxButtonProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByLabelText('Åpne forslag');
    const buttonContainer = openButton.closest('[data-chevron-button]');

    // Verifiser at elementet er disabled ved å sjekke styles
    await expect(buttonContainer).toHaveStyle('pointer-events: none');

    // Prøv å trigge click event direkte (simulerer en programmatisk klikk)
    if (buttonContainer) {
      buttonContainer.dispatchEvent(new Event('click', { bubbles: true }));
    }

    // Verifiser at onClick IKKE ble kalt når disabled
    await expect(args.onClick).not.toHaveBeenCalled();
  },
} satisfies Story;
