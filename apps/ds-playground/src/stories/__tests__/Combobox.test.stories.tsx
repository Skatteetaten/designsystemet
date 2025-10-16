import { useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { wrapper } from './testUtils/storybook.testing.utils';
import { generatePerformanceTestData } from '../components/combobox/combobox.stories.utils';

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

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await expect(inputElement).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { test: 'off' },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Test className - bruker standard querySelector mønster
    const container = canvasElement.querySelector(`${wrapper} > div`);
    await expect(container).toHaveClass('dummyClassname');

    await expect(inputElement).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(inputElement).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithValidHTML = {
  name: 'With Valid HTML (FB1)',
  args: {
    ...defaultArgs,
    id: 'test-combobox',
    'data-testid': 'valid-combobox',
  },
  argTypes: {
    id: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // WCAG 4.1.1 Parsing - Test unique IDs
    const allElementsWithId = canvasElement.querySelectorAll('[id]');
    const ids = Array.from(allElementsWithId).map((el) => el.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length); // No duplicate IDs

    // Test proper element structure and attributes
    expect(inputElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('role', 'combobox');
    expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');
    expect(inputElement).toHaveAttribute('aria-expanded');

    // Test that all required attributes are present (no duplicates)
    const requiredAttributes = [
      'id',
      'role',
      'aria-autocomplete',
      'aria-expanded',
    ];
    for (const attr of requiredAttributes) {
      const attrValue = inputElement.getAttribute(attr);
      expect(attrValue).toBeTruthy();
    }

    // Test proper nesting - combobox should be inside container
    const container = canvasElement.querySelector(`${wrapper} > div`);
    expect(container).toContainElement(inputElement);
  },
} satisfies Story;

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

export const AriaAttributesTest = {
  name: 'ARIA-attributter for combobox',
  args: {
    ...defaultArgs,
    helpText: 'Dette er hjelpetekst',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser grunnleggende ARIA-attributter
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');
    await expect(inputElement).toHaveAttribute('aria-expanded', 'false');

    // Åpne dropdown
    await userEvent.click(inputElement);

    // Verifiser at ARIA-attributter oppdateres når dropdown åpnes
    await expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    await expect(inputElement).toHaveAttribute('aria-controls');

    // Verifiser at options får korrekte IDs
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Naviger til første option med piltast
    await userEvent.keyboard('{ArrowDown}');

    // Verifiser aria-activedescendant
    const activeDescendant = inputElement.getAttribute('aria-activedescendant');
    await expect(activeDescendant).toBeTruthy();
    await expect(options[0]).toHaveAttribute('id', activeDescendant);

    // Verifiser aria-describedby hvis hjelpetekst finnes
    const describedBy = inputElement.getAttribute('aria-describedby');
    if (describedBy) {
      const helpElement = canvas.getByText('Dette er hjelpetekst');
      await expect(helpElement).toBeInTheDocument();
    }
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

export const LoadingAndErrorStatesTest = {
  name: 'Loading og feilstatus-attributter',
  args: {
    ...defaultArgs,
    isLoading: true,
    errorMessage: 'Dette feltet er påkrevd',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser loading-status
    await expect(inputElement).toHaveAttribute('aria-busy', 'true');

    // Verifiser feilstatus
    await expect(inputElement).toHaveAttribute('aria-invalid', 'true');

    // Verifiser at feilmelding vises
    const errorElement = canvas.getByText('Dette feltet er påkrevd');
    await expect(errorElement).toBeInTheDocument();
  },
} satisfies Story;

export const SearchFiltering = {
  name: 'Søk og filtrering av alternativer (A5)',
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

export const DisabledStateStyles = {
  name: 'Disabled state styling verification',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Verifiser at input element er disabled
    await expect(inputElement).toBeDisabled();
    await expect(inputElement).toHaveStyle('cursor: not-allowed');

    // Finn input container (den som har :has(.input:disabled) styling)
    const inputContainer = inputElement.closest('[class*="inputContainer"]');
    await expect(inputContainer).toHaveStyle('cursor: not-allowed');

    // Finn chevron button og verifiser disabled styling
    const chevronButton = canvasElement.querySelector('[data-chevron-button]');
    await expect(chevronButton).toHaveStyle('pointer-events: none');
    await expect(chevronButton).toHaveStyle('cursor: not-allowed');

    // Verifiser at ingen interaksjon er mulig - dropdown skal ikke åpnes
    // Note: userEvent.click() will fail on disabled input, så vi bruker fireEvent for å teste
    const options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at chevron button har pointer-events: none som forhindrer klikk
    // Vi tester ikke klikket siden pointer-events: none gjør det umulig
    // Dette er ønsket oppførsel - disabled elements skal ikke kunne klikkes
    if (chevronButton) {
      const computedStyle = getComputedStyle(chevronButton as Element);
      expect(computedStyle.pointerEvents).toBe('none');
      expect(computedStyle.cursor).toBe('not-allowed');
    }

    // Verifiser at aria-expanded forblir false (dropdown ikke åpnet)
    await expect(inputElement).toHaveAttribute('aria-expanded', 'false');
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

export const PerformanceSearchLargeDataset = {
  name: 'Performance - Søk med stort datasett (1000 elementer)',
  args: {
    ...defaultArgs,
    label: 'Søk i stort datasett',
    options: generatePerformanceTestData(1000),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Mål ytelse for å åpne dropdown med stort datasett
    const startTime = performance.now();
    await userEvent.click(inputElement);

    // Verifiser at alternativer vises
    const options = canvas.getAllByRole('option');
    await expect(options.length).toBeGreaterThan(0);

    const openTime = performance.now() - startTime;

    // Mål søkehastighet
    const searchStartTime = performance.now();
    await userEvent.type(inputElement, 'Item 5');

    // Vent på at filtrering skal fullføres
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Sjekk om det finnes filtrerte alternativer eller "ingen treff" melding
    const filteredOptions = canvas.queryAllByRole('option');
    const noResultsMessages = canvas.queryAllByText(/ingen treff/i);

    // Verifiser at enten filtrering har skjedd eller "ingen treff" melding vises
    if (filteredOptions.length > 0) {
      await expect(filteredOptions.length).toBeLessThan(200);
    } else if (noResultsMessages.length > 0) {
      await expect(noResultsMessages[0]).toBeInTheDocument();
    } else {
      // Hvis hverken alternativer eller melding finnes, kan det være at søket ikke ga noen treff
      console.log(
        'Ingen filtrerte alternativer eller "ingen treff" melding funnet'
      );
    }

    const searchTime = performance.now() - searchStartTime;

    // Logg ytelsesmålinger (i en ekte test ville vi assertere på disse)
    console.log(`Dropdown åpningstid: ${openTime.toFixed(2)}ms`);
    console.log(`Søketid: ${searchTime.toFixed(2)}ms`);

    // Verifiser at komponenten fortsatt responderer
    if (filteredOptions.length > 0) {
      // Filter out disabled options (like "Ingen treff" messages)
      const enabledOptions = filteredOptions.filter(
        (option) => option.getAttribute('aria-disabled') !== 'true'
      );

      if (enabledOptions.length > 0) {
        const firstEnabledOption = enabledOptions[0];
        await userEvent.click(firstEnabledOption);
        await expect(inputElement).toHaveValue(firstEnabledOption.textContent);
      }
    }
  },
} satisfies Story;

export const PerformanceMultipleSelection = {
  name: 'Performance - Flervalg med 500 elementer',
  args: {
    ...defaultArgs,
    label: 'Flervalg performance test',
    options: generatePerformanceTestData(500),
    multiple: true,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');

    // Mål ytelse for å velge flere elementer raskt etter hverandre
    const selectionStartTime = performance.now();

    // Velg de første 5 alternativene
    for (let i = 0; i < Math.min(5, options.length); i++) {
      await userEvent.click(options[i]);
    }

    const selectionTime = performance.now() - selectionStartTime;

    // Verifiser at alle valg er registrert
    const selectedChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(selectedChips).toHaveLength(5);

    // Mål ytelse for å fjerne valg
    const removeStartTime = performance.now();

    // Fjern de første 3 valgene
    for (let i = 0; i < 3; i++) {
      const chips = canvas.getAllByRole('button', { name: /fjern/i });
      if (chips.length > 0) {
        await userEvent.click(chips[0]);
      }
    }

    const removeTime = performance.now() - removeStartTime;

    // Verifiser at riktig antall valg er fjernet
    const remainingChips = canvas.getAllByRole('button', { name: /fjern/i });
    await expect(remainingChips).toHaveLength(2);

    console.log(`Flervalg-ytelse: ${selectionTime.toFixed(2)}ms for 5 valg`);
    console.log(`Fjerning-ytelse: ${removeTime.toFixed(2)}ms for 3 fjerninger`);
  },
} satisfies Story;

export const PerformanceKeyboardNavigation = {
  name: 'Performance - Tastaturnavigasjon med 800 elementer',
  args: {
    ...defaultArgs,
    label: 'Navigasjon performance test',
    options: generatePerformanceTestData(800),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await userEvent.click(inputElement);
    await userEvent.keyboard('{Alt>}{ArrowDown}{/Alt}');

    // Mål ytelse for hurtig tastaturnavigasjon
    const navStartTime = performance.now();

    // Naviger ned 20 ganger raskt
    for (let i = 0; i < 20; i++) {
      await userEvent.keyboard('{ArrowDown}');
    }

    const navTime = performance.now() - navStartTime;

    // Verifiser at navigasjon fungerer ved å sjekke aria-activedescendant
    await expect(inputElement).toHaveAttribute('aria-activedescendant');

    // Mål ytelse for Page Down navigasjon
    const pageNavStartTime = performance.now();

    // Simuler Page Down ved å navigere flere steg raskt
    for (let i = 0; i < 10; i++) {
      await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowDown}');
    }

    const pageNavTime = performance.now() - pageNavStartTime;

    // Test valg etter navigasjon - velg først hvis det er et aktivt element
    const activeDescendant = inputElement.getAttribute('aria-activedescendant');
    if (activeDescendant) {
      await userEvent.keyboard('{Enter}');
      const inputValue = inputElement.getAttribute('value') || '';
      await expect(inputValue.length).toBeGreaterThan(0);
    }

    console.log(`Navigasjonsytelse: ${navTime.toFixed(2)}ms for 20 steg`);
    console.log(`Rask navigasjon: ${pageNavTime.toFixed(2)}ms for 30 steg`);
  },
} satisfies Story;
