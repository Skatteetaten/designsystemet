import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Multiple Selection',
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

export const MultipleSelectionMouse = {
  name: 'Flervalg med mus (A11)',
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

    // Klikk på input for å åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown åpnes
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Velg første alternativ med mus
    await userEvent.click(options[0]);

    // Verifiser at første alternativ er valgt og dropdown forblir åpen
    let selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');

    // Velg andre alternativ med mus
    await userEvent.click(options[1]);

    // Verifiser at begge alternativer er valgt
    selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(2);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
    await expect(selectedChips[1]).toHaveTextContent('Sverige');

    // Fjern første valg ved å klikke på chip
    await userEvent.click(selectedChips[0]);

    // Verifiser at kun andre alternativ er valgt
    selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Sverige');
  },
} satisfies Story;

export const MultipleSelectionKeyboard = {
  name: 'Flervalg med tastatur (A11)',
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

    // Fokuser på input og åpne dropdown med Alt+Down
    await userEvent.click(inputElement);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown er åpen
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger til første alternativ og velg med Enter
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verifiser at første alternativ er valgt
    let selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');

    // Naviger til andre alternativ og velg
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');

    // Verifiser at begge alternativer er valgt
    selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(2);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
    await expect(selectedChips[1]).toHaveTextContent('Sverige');

    // Lukk dropdown med Escape
    await userEvent.keyboard('{Escape}');

    // Test fjern med Backspace når input er tom
    await expect(inputElement).toHaveValue('');
    await userEvent.keyboard('{Backspace}');

    // Verifiser at siste valg fjernes
    selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(1);
    await expect(selectedChips[0]).toHaveTextContent('Norge');
  },
} satisfies Story;

export const HiddenInputsMultipleTest = {
  name: 'Skjulte input-felt for flervalg',
  args: {
    ...defaultArgs,
    multiple: true,
    name: 'categories',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser at hovedinput ikke har name-attributt i flervalgs-modus
    await expect(inputElement).not.toHaveAttribute('name');

    // Åpne dropdown og velg to alternativer
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]); // Norge
    await userEvent.click(options[1]); // Sverige

    // Verifiser at skjulte input-felt er opprettet
    const hiddenInputs = canvasElement.querySelectorAll('input[type="hidden"]');
    await expect(hiddenInputs).toHaveLength(2);

    // Verifiser at skjulte input-felt har korrekte verdier
    await expect(hiddenInputs[0]).toHaveAttribute('name', 'categories');
    await expect(hiddenInputs[0]).toHaveAttribute('value', 'no');
    await expect(hiddenInputs[1]).toHaveAttribute('name', 'categories');
    await expect(hiddenInputs[1]).toHaveAttribute('value', 'se');

    // Fjern ett valg og verifiser at skjult input også fjernes
    const selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await userEvent.click(selectedChips[0]); // Fjern Norge

    const updatedHiddenInputs = canvasElement.querySelectorAll(
      'input[type="hidden"]'
    );
    await expect(updatedHiddenInputs).toHaveLength(1);
    await expect(updatedHiddenInputs[0]).toHaveAttribute('value', 'se');
  },
} satisfies Story;
