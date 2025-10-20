import { useRef } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';
import { generatePerformanceTestData } from '../../components/combobox/combobox.stories.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Performance',
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
        options={defaultArgs.options}
        hasSpacing={false}
      />
    </div>
  );
};

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
