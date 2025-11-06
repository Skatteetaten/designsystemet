import React, { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxButton } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxButton';

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
} satisfies Meta<typeof ComboboxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  isOpen: false,
  onClick: fn(),
};

export const ClearButtonClick = {
  name: 'Clear button click handler (A9, B2)',
  args: {
    ...defaultArgs,
    multiple: false,
    hasValue: true,
    onClear: fn(),
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
      name: dsI18n.t('ds_forms:combobox.ResetSuggestion'),
    });
    await userEvent.click(clearButton);
    await waitFor(() => expect(args.onClear).toHaveBeenCalled());
  },
} satisfies Story;

export const DisabledStateHandling = {
  name: 'Disabled state handling',
  args: {
    ...defaultArgs,
    disabled: true,
    onClick: fn(),
  },
  play: async ({
    args,
    canvasElement,
  }: {
    args: ComboboxButtonProps;
    canvasElement: HTMLElement;
  }): Promise<void> => {
    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toHaveStyle('pointer-events: none');

    // Prøv å trigge click event direkte (simulerer en programmatisk klikk)
    if (chevron) {
      chevron.dispatchEvent(new Event('click', { bubbles: true }));
    }
    await expect(args.onClick).not.toHaveBeenCalled();
  },
} satisfies Story;
