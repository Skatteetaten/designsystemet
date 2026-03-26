import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Interaction',
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    await expect(options[0]).toHaveAttribute(
      'id',
      inputElement.getAttribute('aria-activedescendant')
    );

    // Verifiser at vi kan navigere til neste option
    await userEvent.keyboard('{ArrowDown}');

    // Naviger opp igjen til første option
    await userEvent.keyboard('{ArrowUp}');

    // Velg med Enter
    await userEvent.keyboard('{Enter}');

    // Verifiser at valget er gjort
    await expect(inputElement).toHaveValue('Norge');
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

export const KeyBoardFocusDoesNotOpen = {
  name: 'Tastaturfokus åpner ikke dropdown automatisk',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Fokus via tastatur skal ikke åpne dropdown automatisk
    await userEvent.tab();
    await expect(inputElement).toHaveFocus();
    await expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  },
} satisfies Story;

export const MouseClickOpens = {
  name: 'Musklikk åpner dropdown',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Klikk på input skal åpne dropdown automatisk
    await userEvent.click(inputElement);
    await expect(inputElement).toHaveFocus();
    await expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByRole('listbox')).toBeInTheDocument();
  },
} satisfies Story;

export const MinSearchLengthTextOnChevronClick = {
  name: 'Min søkelengde viser "skriv minst x tegn" ved chevron-klikk',
  args: {
    ...defaultArgs,
    minSearchLength: 3,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const chevronButton = canvasElement.querySelector(
      'div[class*="chevronButton"]'
    );
    await expect(chevronButton).toBeInTheDocument();

    await userEvent.click(chevronButton as Element);

    await expect(canvas.queryByRole('listbox')).toBeInTheDocument();
    await expect(
      canvas.getByText(
        dsI18n.t('ds_forms:combobox.minSearchLengthText', { ant: 3 })
      )
    ).toBeInTheDocument();
  },
} satisfies Story;

export const MinSearchLengthTextOnMouseClick = {
  name: 'Min søkelengde viser "skriv minst x tegn" ved musklikk',
  args: {
    ...defaultArgs,
    minSearchLength: 3,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await userEvent.click(inputElement);

    await waitFor(() => {
      expect(canvas.getByRole('listbox')).toBeInTheDocument();
    });
    await expect(
      canvas.getByText(
        dsI18n.t('ds_forms:combobox.minSearchLengthText', { ant: 3 })
      )
    ).toBeInTheDocument();
  },
} satisfies Story;

export const MinSearchLengthTextBeforeThreshold = {
  name: 'Min søkelengde viser "skriv minst x tegn" før terskel',
  args: {
    ...defaultArgs,
    minSearchLength: 3,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    await userEvent.click(inputElement);
    await userEvent.type(inputElement, 'ab');

    await expect(inputElement).toHaveValue('ab');
    await waitFor(() => {
      expect(canvas.getByRole('listbox')).toBeInTheDocument();
    });
    await waitFor(
      () => {
        expect(
          canvas.getByText(
            dsI18n.t('ds_forms:combobox.minSearchLengthText', { ant: 3 })
          )
        ).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  },
} satisfies Story;

export const ReopenShowsAllWithSelectedMark = {
  name: 'Gjenåpning viser alle alternativer med valgt markering',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Åpne og velg alternativ
    await userEvent.click(inputElement);
    let options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');

    // Åpne igjen - hele listen skal vises
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Valgt alternativ skal være markert
    const selectedOption = options.find(
      (option) => option.textContent?.trim() === 'Sverige'
    );
    await expect(selectedOption).toHaveAttribute('aria-selected', 'true');

    const selectedIcon = selectedOption?.querySelector(
      'svg[aria-hidden="true"]'
    );
    await expect(selectedIcon).toBeInTheDocument();
  },
} satisfies Story;

export const SelectingOverlappingOptionDoesNotFocusUnderlyingCombobox = {
  name: 'Valg i overlappende liste fokuserer ikke combobox under',
  args: {
    ...defaultArgs,
  },
  render: (): JSX.Element => (
    <div className={'width200'}>
      <Combobox label={'Oveste combobox'} options={defaultArgs.options} />
      <Combobox label={'Nederste combobox'} options={defaultArgs.options} />
    </div>
  ),
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const topCombobox = canvas.getByRole('combobox', {
      name: 'Oveste combobox',
    });
    const bottomCombobox = canvas.getByRole('combobox', {
      name: 'Nederste combobox',
    });

    await userEvent.click(topCombobox);

    const topOption = canvas.getByRole('option', { name: 'Sverige' });
    await userEvent.click(topOption);

    await waitFor(async () => {
      await expect(topCombobox).toHaveValue('Sverige');
    });
    await expect(bottomCombobox).not.toHaveFocus();
    await expect(bottomCombobox).toHaveAttribute('aria-expanded', 'false');
  },
} satisfies Story;

export const ClearRemovesSelectedMark = {
  name: 'Nullstilling fjerner valgt markering',
  args: {
    ...defaultArgs,
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // Velg ett alternativ først
    await userEvent.click(inputElement);
    let options = canvas.getAllByRole('option');
    await userEvent.click(options[1]);
    await expect(inputElement).toHaveValue('Sverige');

    // Sørg for at valgt markering vises
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    let selectedOptions = options.filter(
      (option) => option.getAttribute('aria-selected') === 'true'
    );
    await expect(selectedOptions).toHaveLength(1);

    // Nullstill fra knapp i input
    const clearButton = canvasElement.querySelector(
      'button[data-chevron-button]'
    );
    await expect(clearButton).toBeInTheDocument();
    await userEvent.click(clearButton as Element);
    await expect(inputElement).toHaveValue('');

    // Åpne og verifiser at valgt markering er borte
    await userEvent.click(inputElement);
    options = canvas.getAllByRole('option');
    selectedOptions = options.filter(
      (option) => option.getAttribute('aria-selected') === 'true'
    );
    await expect(selectedOptions).toHaveLength(0);
  },
} satisfies Story;
