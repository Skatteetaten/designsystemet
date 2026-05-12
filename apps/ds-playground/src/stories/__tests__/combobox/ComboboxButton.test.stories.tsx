import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { ComboboxButton } from '../../../../../../libs/ds-forms/src/Combobox/ComboboxButton';

const meta = {
  component: ComboboxButton,
  title: 'Tester/Combobox/Button',
  decorators: [(Story): JSX.Element => <Story />],
  argTypes: {
    // Props
    isOpen: { table: { disable: true } },
    disabled: { table: { disable: true } },
    variant: { table: { disable: true } },
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

export const DisabledStateHandling = {
  name: 'Disabled state handling',
  args: {
    ...defaultArgs,
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toHaveStyle('pointer-events: none');

    // Prøv å trigge click event direkte (simulerer en programmatisk klikk)
    if (chevron) {
      chevron.dispatchEvent(new Event('click', { bubbles: true }));
    }
    await expect(args.onClick).not.toHaveBeenCalled();
  },
} satisfies Story;
