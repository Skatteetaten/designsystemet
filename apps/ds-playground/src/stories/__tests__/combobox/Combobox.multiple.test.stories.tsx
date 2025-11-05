import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Multiple',
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
    helpSvgPath: { table: { disable: true } },
    maxSelected: { table: { disable: true } },
    spinnerProps: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    spinnerLabel: { table: { disable: true } },
    // HTML attributes
    accessKey: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    disabled: { table: { disable: true } },
    required: { table: { disable: true } },
    tabIndex: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onSelectionChange: { table: { disable: true } },
    onInputChange: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    chromatic: { disableSnapshot: false },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults = {
  name: 'Defaults (A1, A10)',
  args: {
    ...defaultArgs,
    multiple: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    const inputContainer = inputElement.closest('[data-variant]');
    await expect(inputContainer).toHaveAttribute('data-variant', 'large');
    await userEvent.click(inputElement);

    const chevron = canvasElement.querySelector('div[class*="chevronButton"]');
    await expect(chevron).toBeInTheDocument();
    await expect(chevron).toHaveAttribute('aria-hidden', 'true');
  },
} satisfies Story;

export const WithSelectedValues = {
  name: 'With Selected Values (A11)',
  args: {
    ...defaultArgs,
    multiple: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await userEvent.click(options[1]);
    await expect(options[0]).toHaveAttribute('aria-selected', 'true');
    await expect(options[1]).toHaveAttribute('aria-selected', 'true');

    const hiddenInputs = canvasElement.querySelectorAll('input[type="hidden"]');
    await expect(hiddenInputs).toHaveLength(2);

    await expect(inputElement).toBeEnabled();

    await expect(
      canvas.queryByRole('button', {
        name: dsI18n.t('ds_forms:combobox.ResetSuggestion'),
      })
    ).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithMaxSelected = {
  name: 'With MaxSelected (A12)',
  args: {
    ...defaultArgs,
    multiple: true,
    maxSelected: 3,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await expect(options[1]).not.toHaveAttribute('aria-disabled');
    await expect(options[2]).not.toHaveAttribute('aria-disabled');
    const maxSelectedMessage = canvasElement.querySelector('[role="status"]');
    await expect(maxSelectedMessage).toHaveAttribute('aria-live', 'polite');
    await expect(maxSelectedMessage).toHaveAttribute('aria-atomic', 'true');
    await expect(maxSelectedMessage).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalSingular', {
        selected: 1,
        total: 3,
      })
    );
  },
} satisfies Story;

export const WithMaxSelectedValues = {
  name: 'With MaxSelected Values (A12)',
  args: {
    ...defaultArgs,
    multiple: true,
    maxSelected: 2,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);
    await userEvent.click(options[1]);
    // TODO skal siste option også være disabled?
    // await expect(options[2]).toBeDisabled();
    await expect(options[2]).toHaveAttribute('aria-disabled', 'true');
    // TODO skal det være mulig å søke/skrive mer?
    const maxSelectedMessage = canvasElement.querySelector('[role="status"]');
    await expect(maxSelectedMessage).toHaveAttribute('aria-live', 'polite');
    await expect(maxSelectedMessage).toHaveAttribute('aria-atomic', 'true');
    await expect(maxSelectedMessage).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.SelectedOfTotalSingular', {
        selected: 2,
        total: 2,
      })
    );
  },
} satisfies Story;

export const MultipleSelectionMouse = {
  name: 'Flervalg med mus (A11)',
  args: {
    ...defaultArgs,
    multiple: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);

    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

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
    chromatic: { disableSnapshot: true },
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

export const WithName = {
  name: 'With Name',
  args: {
    ...defaultArgs,
    multiple: true,
    name: 'categories',
  },
  parameters: {
    chromatic: { disableSnapshot: true },
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
