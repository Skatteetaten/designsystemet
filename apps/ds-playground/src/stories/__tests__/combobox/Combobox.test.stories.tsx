import { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Combobox } from '@skatteetaten/ds-forms';

import { defaultArgs } from './utils/combobox.test.utils';

const meta = {
  component: Combobox,
  title: 'Tester/Combobox',
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
    helpSvgPath: { table: { disable: true } },
    maxSelected: { table: { disable: true } },
    spinnerProps: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
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
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'combobox-id',
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
    a11y: {
      test: 'off',
    },
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getAllByRole('generic')[1];
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    const combobox = canvas.getByRole('combobox');
    await expect(combobox).toHaveAttribute('id', 'combobox-id');
    await expect(combobox).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      input: 'dummyClassname',
      options: 'dummyClassname',
      chips: 'dummyClassname',
      errorMessage: 'dummyClassname',
      label: 'dummyClassname',
      helpText: 'dummyClassname',
      description: 'dummyClassname',
    },
    description: 'Beskrivelse',
    helpText: 'Hjelp!',
    errorMessage: 'Error melding',
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    const helpButton = canvas.getAllByRole('button')[0];
    await userEvent.click(helpButton);

    const container = canvas.getAllByRole('generic')[1];
    const optionsContainer = canvasElement.querySelector(
      'div[class*="optionsListContainer"]'
    );
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=comboboxErrorId]>div'
    );
    const label = canvas.getByText(defaultArgs.label as string);
    const helpTextContainer = canvasElement.querySelector(
      'div[class*="helpBox"]'
    );
    const description = canvas.getByText('Beskrivelse');

    await expect(container).toHaveClass('dummyClassname');
    await expect(input).toHaveClass('dummyClassname');
    await expect(optionsContainer).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(helpTextContainer).toHaveClass('dummyClassname');
    await expect(description).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, B3, B6)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    label: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByLabelText(defaultArgs.label as string);
    await expect(combobox).toBeInTheDocument();
    await expect(combobox).not.toBeRequired();
    await expect(combobox).not.toBeDisabled();
    await expect(combobox).toHaveAttribute('type', 'text');
    await expect(combobox).toHaveAttribute('role', 'combobox');
    await expect(combobox).toHaveAttribute('aria-expanded', 'false');
    await expect(combobox).toHaveAttribute('aria-autocomplete', 'list');
    await expect(combobox).toHaveAttribute('autoComplete', 'off');
    await expect(combobox).not.toHaveAttribute('aria-invalid');
    await expect(combobox).not.toHaveAttribute('aria-busy');
    await expect(combobox).toHaveAttribute(
      'placeholder',
      dsI18n.t('ds_forms:combobox.TypeOrSelect')
    );

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=comboboxErrorId]'
    );
    await expect(errorMessageContainer).toBeInTheDocument();
  },
} satisfies Story;

export const WithHover = {
  name: 'With Hover (A1)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    pseudo: { hover: true },
  },
} satisfies Story;

export const WithFocus = {
  name: 'With Focus (A1)',
  args: {
    ...defaultArgs,
  },
  parameters: {
    pseudo: { focus: true },
  },
} satisfies Story;

export const IsOpen = {
  name: 'IsOpen (A1)',
  args: {
    ...defaultArgs,
    id: 'test-combobox',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
    await expect(combobox).toHaveAttribute('aria-expanded', 'true');

    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
    await expect(listbox).toHaveAttribute('id', 'test-combobox-list');
    await expect(listbox).toHaveAttribute('aria-multiselectable', 'false');

    const options = canvas.getAllByRole('option');
    await expect(options[0]).toHaveAttribute('id', 'test-combobox-option-0');
    await expect(options[0]).toHaveAttribute('aria-selected', 'false');
  },
} satisfies Story;

export const WithErrorMessage = {
  name: 'With ErrorMessage (A2)',
  args: {
    ...defaultArgs,
    errorMessage: 'Error melding',
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=comboboxErrorId]'
    );
    await expect(errorMessageContainer).toHaveAttribute('id');
    const inputElement = canvas.getByRole('combobox', {
      description: 'Error melding',
    });
    await expect(inputElement).toHaveAttribute('aria-invalid', 'true');
  },
} satisfies Story;

export const NoResults = {
  name: 'No Results (A6)',
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.type(inputElement, 'xyz');
    await expect(inputElement).toHaveValue('xyz');

    const listbox = canvas.getByRole('listbox');
    await expect(listbox).toBeInTheDocument();
    await expect(listbox).toHaveTextContent(
      dsI18n.t('ds_forms:combobox.NoResults', { searchTerm: 'xyz' })
    );
  },
} satisfies Story;

export const VariantLarge = {
  name: 'Variant Large (A7)',
  args: {
    ...defaultArgs,
    variant: 'large',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole('combobox');
    await userEvent.click(combobox);
  },
} satisfies Story;

export const WithRequired = {
  name: 'With Required (B4)',
  args: {
    ...defaultArgs,
    required: true,
  },
  argTypes: {
    required: { table: { disable: false } },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toBeRequired();
  },
} satisfies Story;

export const WithHideLabel = {
  name: 'With HideLabel (B5)',
  args: {
    ...defaultArgs,
    hideLabel: true,
  },
  argTypes: {
    hideLabel: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelElement = canvas.getByText(defaultArgs.label as string);
    await expect(labelElement).toBeInTheDocument();
  },
} satisfies Story;

export const WithPlaceholder = {
  name: 'With Placeholder (B6)',
  args: {
    ...defaultArgs,
    placeholder: 'Søk etter land...',
  },
  argTypes: {
    placeholder: { table: { disable: false } },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute(
      'placeholder',
      'Søk etter land...'
    );
  },
} satisfies Story;

export const WithAccessKey = {
  name: 'With AccessKey (B7)',
  args: {
    ...defaultArgs,
    accessKey: 'c',
  },
  argTypes: {
    accessKey: { table: { disable: false } },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('accesskey', 'c');
  },
} satisfies Story;

export const WithSpacing = {
  name: 'With Spacing',
  args: {
    ...defaultArgs,
    hasSpacing: true,
  },
  argTypes: {
    hasSpacing: { table: { disable: false } },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled',
  args: {
    ...defaultArgs,
    disabled: true,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toBeDisabled();
    await expect(inputElement).toHaveStyle('cursor: not-allowed');
  },
} satisfies Story;

export const WithLoading = {
  name: 'With Loading (A13)',
  args: {
    ...defaultArgs,
    isLoading: true,
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);

    const spinner = await canvas.findByText(
      dsI18n.t('ds_progress:spinner.LoadingLabel')
    );
    await expect(spinner).toBeInTheDocument();

    await expect(canvas.queryByRole('listbox')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithSpinnerLabel = {
  name: 'With SpinnerLabel',
  args: {
    ...defaultArgs,
    isLoading: true,
    spinnerLabel: 'Laster alternativer...',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await userEvent.click(inputElement);

    const spinner = await canvas.findByText('Laster alternativer...');
    await expect(spinner).toBeInTheDocument();

    // Verifiser at input fortsatt er tilgjengelig for skriving
    await expect(inputElement).toBeEnabled();
    await userEvent.type(inputElement, 'test');
    await expect(inputElement).toHaveValue('test');
  },
} satisfies Story;

export const WithName = {
  name: 'With Name',
  args: {
    ...defaultArgs,
    name: 'category',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('combobox');
    await expect(inputElement).toHaveAttribute('name', 'category');
  },
} satisfies Story;
