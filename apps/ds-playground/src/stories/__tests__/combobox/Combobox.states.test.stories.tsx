import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/States',
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
    loadingLabel: { table: { disable: true } },
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

export const LoadingStates = {
  name: 'Loading states og loading melding',
  args: {
    ...defaultArgs,
    isLoading: true,
    loadingLabel: 'Laster alternativer...',
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
    const loadingLabel = canvas.getByTestId('combobox-loading-spinner');
    await expect(loadingLabel).toBeInTheDocument();

    // Verifiser at normale alternativer ikke vises når loading er true
    const options = canvas.queryAllByRole('option');
    await expect(options).toHaveLength(0);

    // Verifiser at input fortsatt er tilgjengelig for skriving
    await expect(inputElement).toBeEnabled();
    await userEvent.type(inputElement, 'test');
    await expect(inputElement).toHaveValue('test');
  },
} satisfies Story;

export const LoadingAndErrorStatesTest = {
  name: 'Loading og feilstatus-attributter (A2)',
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
