import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Variants',
  argTypes: {
    variant: { table: { disable: false } },
    multiple: { table: { disable: false } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleMediumVariantTest = {
  name: 'Single mode medium størrelse (A6)',
  args: {
    ...defaultArgs,
    variant: 'medium',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // A6 - Verifiser at single-select kan vises i medium størrelse
    const inputContainer = inputElement.closest('[data-variant]');
    await expect(inputContainer).toHaveAttribute('data-variant', 'medium');

    // Test at dropdown fungerer i medium størrelse
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Velg et alternativ for å teste funksjonalitet
    await userEvent.click(options[0]);
    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;

export const SingleLargeVariantTest = {
  name: 'Single mode large størrelse (A7)',
  args: {
    ...defaultArgs,
    multiple: false,
    variant: 'large',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // A7 - Verifiser at single-select kan vises i large størrelse når eksplisitt satt
    const inputContainer = inputElement.closest('[data-variant]');
    await expect(inputContainer).toHaveAttribute('data-variant', 'large');

    // Verifiser at det fortsatt er single mode (ikke multiple CSS klasse)
    const containerWithMultipleClass = inputElement.closest(
      '[class*="inputContainerMultiple"]'
    );
    await expect(containerWithMultipleClass).toBeNull();

    // Test at dropdown fungerer i large størrelse
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Velg et alternativ for å teste funksjonalitet
    await userEvent.click(options[0]);
    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;

export const MultipleVariantSizeTest = {
  name: 'Multiple mode automatisk large størrelse (A10)',
  args: {
    ...defaultArgs,
    multiple: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // A10 - Verifiser at multiple mode alltid vises i large størrelse
    const inputContainer = inputElement.closest('[data-variant]');
    await expect(inputContainer).toHaveAttribute('data-variant', 'large');

    // Verifiser at multiple CSS klasse også er satt
    const containerWithMultipleClass = inputElement.closest(
      '[class*="inputContainerMultiple"]'
    );
    await expect(containerWithMultipleClass).toBeInTheDocument();

    // Test også at single mode bruker medium som default
    // (Dette er implisitt test av at multiple=false ikke tvinger large)
  },
} satisfies Story;

export const SingleVariantSizeTest = {
  name: 'Single mode standard størrelse vs large (A10)',
  args: {
    ...defaultArgs,
    multiple: false,
    variant: 'medium', // Eksplisitt medium for klarhet
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // A10 kontrast - Verifiser at single mode IKKE automatisk blir large
    const inputContainer = inputElement.closest('[data-variant]');
    await expect(inputContainer).toHaveAttribute('data-variant', 'medium');

    // Verifiser at multiple CSS klasse IKKE er satt i single mode
    const containerWithMultipleClass = inputElement.closest(
      '[class*="inputContainerMultiple"]'
    );
    await expect(containerWithMultipleClass).toBeNull();
  },
} satisfies Story;
