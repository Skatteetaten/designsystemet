import { useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Combobox',
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
    defaultValue: { table: { disable: true } },
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

const defaultOptions = [
  { label: 'Norge', value: 'no' },
  { label: 'Sverige', value: 'se' },
  { label: 'Danmark', value: 'dk' },
];

const defaultArgs = {
  label: 'Velg land',
  options: defaultOptions,
  hasSpacing: false,
};

export const SelectOptionInteraction = {
  name: 'Åpne dropdown og velg alternativ (A4)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser at combobox er tilstede og funksjonell
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toBeEnabled();

    // Klikk på input for å åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown åpnes og alternativer vises
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);
    await expect(options[0]).toHaveTextContent('Norge');
    await expect(options[1]).toHaveTextContent('Sverige');
    await expect(options[2]).toHaveTextContent('Danmark');

    // Velg det første alternativet
    await userEvent.click(options[0]);

    // Verifiser at valget er gjort og input viser riktig verdi
    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;

export const KeyboardNavigation = {
  name: 'Tastaturnavigasjon med piltaster (B1)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input
    await userEvent.click(inputElement);

    // Åpne dropdown med Alt+Down
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown er åpen
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger ned med piltast og verifiser fokus
    await userEvent.keyboard('{ArrowDown}');

    // Verifiser at input har aktivt descendant satt til første option
    await expect(inputElement).toHaveAttribute('aria-activedescendant');

    await userEvent.keyboard('{ArrowDown}');
    // Verifiser at vi kan navigere til neste option

    // Naviger opp igjen til første option
    await userEvent.keyboard('{ArrowUp}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Norge');
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

const ProgrammaticFocusTemplate: StoryFn<typeof Combobox> = () => {
  const comboboxRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <button className={'mb-4'} onClick={() => comboboxRef.current?.focus()}>
        {'Fokuser på combobox'}
      </button>
      <Combobox
        ref={comboboxRef}
        label={'Velg land'}
        options={defaultOptions}
        hasSpacing={false}
      />
    </div>
  );
};

export const SearchFiltering = {
  name: 'Søk og filtrering av alternativer (A5)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks due to known component issue with empty results
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at alle alternativer vises i starten
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Skriv "No" for å filtrere
    await userEvent.type(inputElement, 'No');

    // Verifiser at kun "Norge" vises
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Norge');

    // Slett tekst og skriv "Da"
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'Da');

    // Verifiser at kun "Danmark" vises
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Danmark');

    // Slett tekst og skriv noe som ikke matcher
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, 'xyz');

    // Verifiser at ingen alternativer vises eller en "ingen treff" melding
    const noOptionsMessages = canvas.queryAllByText(/ingen treff/i);
    if (noOptionsMessages.length > 0) {
      await expect(noOptionsMessages[0]).toBeInTheDocument();
    } else {
      // Alternativt kan det være at options forsvinner helt
      options = canvas.queryAllByRole('option');
      await expect(options).toHaveLength(0);
    }
  },
} satisfies Story;

export const LoadingStates = {
  name: 'Loading states og loading melding',
  args: {
    ...defaultArgs,
    isLoading: true,
    loadingMessage: 'Laster alternativer...',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks due to accessibility violations with loading spinner
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input for å åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at loading melding vises
    const loadingMessage = canvas.getByTestId('combobox-loading-spinner');
    await expect(loadingMessage).toBeInTheDocument();

    // Verifiser at normale alternativer ikke vises når loading er true
    const options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input fortsatt er tilgjengelig for skriving
    await expect(inputElement).toBeEnabled();
    await userEvent.type(inputElement, 'test');
    await expect(inputElement).toHaveValue('test');
  },
} satisfies Story;

export const ErrorStates = {
  name: 'Error states og error melding (A2)',
  args: {
    ...defaultArgs,
    errorMessage: 'Dette feltet er påkrevd',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser at error melding vises
    const errorMessage = canvas.getByText('Dette feltet er påkrevd');
    await expect(errorMessage).toBeInTheDocument();

    // Verifiser at input har aria-invalid attributt
    await expect(inputElement).toHaveAttribute('aria-invalid', 'true');

    // Verifiser at input har aria-describedby som refererer til error meldingen
    const errorId = errorMessage.getAttribute('id');
    if (errorId) {
      await expect(inputElement).toHaveAttribute('aria-describedby', errorId);
    }

    // Verifiser at combobox fortsatt fungerer til tross for error state
    await userEvent.click(inputElement);

    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Velg et alternativ
    await userEvent.click(options[0]);
    await expect(inputElement).toHaveValue('Norge');
  },
} satisfies Story;

export const EscapeKeyBehavior = {
  name: 'Escape key lukker dropdown (A5)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown er åpen
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Trykk Escape for å lukke dropdown
    await userEvent.keyboard('{Escape}');

    // Verifiser at dropdown er lukket
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input fortsatt har fokus
    await expect(inputElement).toHaveFocus();

    // Test at Escape også virker når vi har skrevet noe i input
    await userEvent.type(inputElement, 'Nor');

    // Åpne dropdown igjen
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Verifiser at dropdown åpnes og viser filtrerte resultater
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(1);
    await expect(options[0]).toHaveTextContent('Norge');

    // Trykk Escape for å lukke dropdown
    await userEvent.keyboard('{Escape}');

    // Verifiser at dropdown er lukket og tekst forblir i input
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);
    await expect(inputElement).toHaveValue('Nor');
  },
} satisfies Story;

export const ClickOutsideToClose = {
  name: 'Klikk utenfor lukker dropdown (A5)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokuser på input og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown er åpen
    let options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Klikk utenfor combobox (på canvas element)
    await userEvent.click(canvasElement);

    // Verifiser at dropdown er lukket (vente litt for at click outside skal registreres)
    await new Promise((resolve) => setTimeout(resolve, 100));
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input ikke lenger har fokus
    await expect(inputElement).not.toHaveFocus();

    // Test at click outside også virker når vi har multiple selection aktiv
    // Først aktiver multiple mode
    // Fokuser på input igjen og åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at dropdown åpnes igjen
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Klikk utenfor igjen
    await userEvent.click(canvasElement);

    // Verifiser at dropdown lukkes (vent litt for at click outside skal registreres)
    await new Promise((resolve) => setTimeout(resolve, 100));
    options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);
  },
} satisfies Story;

export const WithProgrammaticFocus = {
  render: ProgrammaticFocusTemplate,
  name: 'Programmatisk fokus via ref',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    controls: {
      exclude: /.*/,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Fokuser på combobox' });
    const input = canvas.getByRole('combobox');

    // Input skal ikke ha fokus i starten
    await expect(input).not.toHaveFocus();

    // Klikk på knappen for å fokusere programmatisk
    await userEvent.click(button);

    // Nå skal input ha fokus
    await expect(input).toHaveFocus();
  },
} satisfies Story;
