import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox, ComboboxOption } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

// Grupperte test-options
const groupedOptions: ComboboxOption[] = [
  { label: 'Trondheim', value: 'trondheim', group: 'Trøndelag' },
  { label: 'Steinkjer', value: 'steinkjer', group: 'Trøndelag' },
  { label: 'Bergen', value: 'bergen', group: 'Vestland' },
  { label: 'Voss', value: 'voss', group: 'Vestland' },
  { label: 'Stavanger', value: 'stavanger', group: 'Rogaland' },
  { label: 'Sandnes', value: 'sandnes', group: 'Rogaland' },
];

// Blandet grupperte og ugrupperte options
const mixedOptions: ComboboxOption[] = [
  { label: 'Alle kommuner', value: 'alle' },
  { label: 'Trondheim', value: 'trondheim', group: 'Trøndelag' },
  { label: 'Steinkjer', value: 'steinkjer', group: 'Trøndelag' },
  { label: 'Annen kommune', value: 'annen' },
  { label: 'Bergen', value: 'bergen', group: 'Vestland' },
  { label: 'Voss', value: 'voss', group: 'Vestland' },
];

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Grouped',
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
    spinnerLabel: { table: { disable: true } },
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

export const GroupedOptionsRendering = {
  name: 'Grupperte alternativer rendres korrekt',
  args: {
    ...defaultArgs,
    options: groupedOptions,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);

    // Verifiser gruppe-labels
    const trondelagLabel = canvas.getByText('Trøndelag');
    const vestlandLabel = canvas.getByText('Vestland');
    const rogalandLabel = canvas.getByText('Rogaland');
    await expect(trondelagLabel).toBeInTheDocument();
    await expect(vestlandLabel).toBeInTheDocument();
    await expect(rogalandLabel).toBeInTheDocument();

    // Verifiser at options er innenfor grupper
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(6);
  },
} satisfies Story;

export const GroupedOptionsAriaLabelledby = {
  name: 'Grupper har aria-labelledby',
  args: {
    ...defaultArgs,
    id: 'test-grouped',
    options: groupedOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await userEvent.click(inputElement);

    // Verifiser at grupper har aria-labelledby som peker til gruppeoverskriften
    const groups = canvasElement.querySelectorAll('[role="group"]');

    for (const group of groups) {
      const labelledBy = group.getAttribute('aria-labelledby');
      await expect(labelledBy).toBeTruthy();

      // Verifiser at elementet som refereres eksisterer
      const labelElement = canvasElement.querySelector(`#${labelledBy}`);
      await expect(labelElement).toBeInTheDocument();
    }
  },
} satisfies Story;

export const GroupedOptionsKeyboardNavigation = {
  name: 'Tastaturnavigasjon gjennom grupper',
  args: {
    ...defaultArgs,
    options: groupedOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser og åpne dropdown
    await userEvent.click(inputElement);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Naviger gjennom alle options med piltaster
    await userEvent.keyboard('{ArrowDown}');
    const activeDescendant = inputElement.getAttribute('aria-activedescendant');
    await expect(activeDescendant).toBeTruthy();

    // Naviger videre til neste option
    await userEvent.keyboard('{ArrowDown}');
    const newActiveDescendant = inputElement.getAttribute(
      'aria-activedescendant'
    );
    await expect(newActiveDescendant).toBeTruthy();
    await expect(newActiveDescendant).not.toBe(activeDescendant);

    // Naviger til første option i neste gruppe
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget ble gjort (en av kommunene i Vestland)
    const value = inputElement.getAttribute('value');
    await expect(['Bergen', 'Voss']).toContain(value);
  },
} satisfies Story;

export const GroupedOptionsFiltering = {
  name: 'Filtrering skjuler tomme grupper',
  args: {
    ...defaultArgs,
    options: groupedOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at alle grupper er synlige
    let groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);

    // Filtrer på "Trondheim" - kun Trøndelag-gruppen skal vises
    await userEvent.type(inputElement, 'Trondheim');

    // Verifiser at kun én option vises
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(1);
    await expect(options[0]).toHaveTextContent('Trondheim');

    // Verifiser at kun Trøndelag-gruppen er synlig
    groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(1);

    // Slett filtrering
    await userEvent.clear(inputElement);

    // Alle grupper skal være synlige igjen
    groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);
  },
} satisfies Story;

export const MixedGroupedAndUngrouped = {
  name: 'Blandet grupperte og ugrupperte alternativer',
  args: {
    ...defaultArgs,
    options: mixedOptions,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at ugrupperte options vises direkte i listen
    const alleKommuner = canvas.getByRole('option', { name: 'Alle kommuner' });
    await expect(alleKommuner).toBeInTheDocument();

    const annenKommune = canvas.getByRole('option', { name: 'Annen kommune' });
    await expect(annenKommune).toBeInTheDocument();

    // Verifiser at grupperte options er i grupper
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(2); // Trøndelag og Vestland

    // Alle options skal være tilgjengelige
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBe(6);
  },
} satisfies Story;

export const GroupedOptionsMultipleSelection = {
  name: 'Flervalg med grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    multiple: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Velg første option (Trondheim)
    const options = canvas.getAllByRole('option');
    await userEvent.click(options[0]);

    // Dropdown skal fortsatt være åpen
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();

    // Velg en option fra en annen gruppe (Bergen)
    const bergenOption = canvas.getByRole('option', { name: 'Bergen' });
    await userEvent.click(bergenOption);

    // Verifiser at chips vises for valgte alternativer
    const trondheimChip = canvas.getByRole('button', {
      name: /Trondheim/i,
    });
    const bergenChip = canvas.getByRole('button', { name: /Bergen/i });
    await expect(trondheimChip).toBeInTheDocument();
    await expect(bergenChip).toBeInTheDocument();
  },
} satisfies Story;

export const GroupedOptionsSelectFromGroup = {
  name: 'Velg alternativ fra gruppe',
  args: {
    ...defaultArgs,
    options: groupedOptions,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const vestlandLabel = canvas.getByText('Vestland');
    await expect(vestlandLabel).toBeInTheDocument();

    // Velg Bergen fra Vestland-gruppen
    const bergenOption = canvas.getByRole('option', { name: 'Bergen' });
    await userEvent.click(bergenOption);

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Bergen');
  },
} satisfies Story;

export const GroupedOptionsVisualSnapshot = {
  name: 'Visuelt snapshot - grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    classNames: { options: 'maxHeight300' },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown for visual snapshot
    await userEvent.click(inputElement);

    // Vent på at listen rendres
    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
  },
} satisfies Story;

export const GroupedOptionsLargeVariant = {
  name: 'Large variant med grupperte alternativer',
  args: {
    ...defaultArgs,
    options: groupedOptions,
    variant: 'large',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at grupper er synlige
    const groups = canvasElement.querySelectorAll('[role="group"]');
    await expect(groups.length).toBe(3);
  },
} satisfies Story;
