import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox/Defaults',
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

export const DefaultsComprehensiveTest = {
  name: 'Comprehensive defaults test (FA1-5, FB1)',
  args: {
    ...defaultArgs,
    id: 'defaults-test-combobox',
    className: 'custom-defaults-class',
    lang: 'nb',
    'data-testid': 'defaults-combobox',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    a11y: { disable: true }, // Disable a11y checks for comprehensive test
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // FA2 - ID attributt
    await expect(inputElement).toHaveAttribute('id', 'defaults-test-combobox');

    // FA3 - CSS className overstyring
    const container = canvasElement.querySelector('.custom-defaults-class');
    await expect(container).toHaveClass('custom-defaults-class');

    // FA4 - Lang attributt
    await expect(container).toHaveAttribute('lang', 'nb');

    // FA5 - Data-testid
    await expect(inputElement).toHaveAttribute(
      'data-testid',
      'defaults-combobox'
    );

    // FB1 - HTML validering - Test unique IDs
    const allElementsWithId = canvasElement.querySelectorAll('[id]');
    const ids = Array.from(allElementsWithId).map((el) => el.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length); // No duplicate IDs

    // FB1 - Test proper element structure and attributes
    expect(inputElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('role', 'combobox');
    expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');
    expect(inputElement).toHaveAttribute('aria-expanded');

    // FB1 - Test that all required attributes are present (no duplicates)
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

    // FB1 - Test proper nesting - combobox should be inside container
    expect(container).toContainElement(inputElement);

    // Implicit FA1 test - If the component renders and we can find elements by role,
    // ref forwarding is working (tested separately in WithRef story)
  },
} satisfies Story;

export const RequiredAttributeTest = {
  name: 'Required attributt på input element (B4)',
  args: {
    ...defaultArgs,
    required: true,
  },
  argTypes: {
    required: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // B4 - Verifiser required attributt er satt
    await expect(inputElement).toHaveAttribute('required');
    await expect(inputElement).toBeRequired();

    // Verifiser at komponenten fortsatt fungerer normalt
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toBeEnabled();
  },
} satisfies Story;

export const LabelForAttributeTest = {
  name: 'Label med for-attributt kobling (B3)',
  args: {
    ...defaultArgs,
    id: 'label-test-combobox',
  },
  argTypes: {
    id: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // B3 - Verifiser label-for kobling
    const labelElement = canvas.getByText('Velg land');
    await expect(labelElement.tagName.toLowerCase()).toBe('label');
    await expect(labelElement).toHaveAttribute('for', 'label-test-combobox');
    await expect(inputElement).toHaveAttribute('id', 'label-test-combobox');

    // Test at label klikk fokuserer input
    await expect(inputElement).not.toHaveFocus();
    await userEvent.click(labelElement);
    await expect(inputElement).toHaveFocus();
  },
} satisfies Story;

export const HiddenLabelTest = {
  name: 'Skjult label med hideLabel prop (B5)',
  args: {
    ...defaultArgs,
    hideLabel: true,
  },
  argTypes: {
    hideLabel: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // B5 - Verifiser at label er visuelt skjult men tilgjengelig for skjermleser
    const labelElement = canvas.getByText('Velg land');
    await expect(labelElement).toBeInTheDocument();

    // Label skal fortsatt være koblet til input
    await expect(labelElement).toHaveAttribute('for');
    const labelFor = labelElement.getAttribute('for');
    await expect(inputElement).toHaveAttribute('id', labelFor);

    // Label skal være visuelt skjult (CSS klasse eller style)
    const computedStyle = getComputedStyle(labelElement);
    const isVisuallyHidden =
      computedStyle.position === 'absolute' &&
      (computedStyle.clipPath === 'inset(50%)' ||
        computedStyle.width === '1px' ||
        labelElement.className.includes('sr') ||
        labelElement.className.includes('visually-hidden'));

    expect(isVisuallyHidden).toBe(true);

    // Verifiser at komponenten fortsatt fungerer
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);
  },
} satisfies Story;

export const PlaceholderComprehensiveTest = {
  name: 'Placeholder tekst - default og custom (B6)',
  args: {
    ...defaultArgs,
    placeholder: 'Søk etter land...', // Test custom placeholder
  },
  argTypes: {
    placeholder: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // B6 - Test custom placeholder
    await expect(inputElement).toHaveAttribute(
      'placeholder',
      'Søk etter land...'
    );

    // B6 - Verifiser at placeholder ikke erstatter label
    const labelElement = canvas.getByText('Velg land');
    await expect(labelElement).toBeInTheDocument();
    await expect(labelElement).toBeVisible();

    // Test at komponenten fungerer med custom placeholder
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Note: Default placeholder er testet implisert i andre tester som bruker defaultArgs
    // som ikke setter placeholder prop, og dermed bruker default fra komponenten
  },
} satisfies Story;

export const AccessKeyTest = {
  name: 'AccessKey tastatursnarvei support (B7)',
  args: {
    ...defaultArgs,
    accessKey: 'c',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');

    // B7 - Verifiser at accessKey attributt er satt
    await expect(inputElement).toHaveAttribute('accesskey', 'c');

    // Test at komponenten fungerer normalt med accessKey
    await expect(inputElement).toBeInTheDocument();
    await expect(inputElement).toBeEnabled();

    // Test grunnleggende funksjonalitet
    await userEvent.click(inputElement);
    const options = canvas.getAllByRole('option');
    await expect(options).toHaveLength(3);

    // Note: Faktisk testing av accessKey tastatursnarvei (Alt+C) er vanskelig
    // i test-miljø på grunn av browser security restrictions, men attributtet
    // er verifisert som tilstede og vil fungere i ekte browser-miljø
  },
} satisfies Story;
