import { useState } from 'react';

import { TextField, textFieldVariantArr } from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('textbox');
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute(attribute, expectedValue);
  };

export default {
  component: TextField,
  title: 'Tester/TextField',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasError: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    isLarge: { table: { disable: true } },
    label: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    thousandSeparator: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...textFieldVariantArr],
      control: 'inline-radio',
    },
    // HTML
    autoComplete: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    disabled: { table: { disable: true } },
    inputMode: { table: { disable: true } },
    name: { table: { disable: true } },
    maxLength: { table: { disable: true } },
    minLength: { table: { disable: true } },
    pattern: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    readOnly: { table: { disable: true } },
    required: { table: { disable: true } },
    rows: { table: { disable: true } },
    value: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof TextField>;

const valueText = 'Kari Nordmann';
const errorMessageText = 'Navn er obligatorisk';

const defaultLabelText = 'Navn';
const defaultArgs = {
  label: defaultLabelText,
};

const Template: ComponentStory<typeof TextField> = (args) => (
  <div data-test-block>
    <TextField {...args} />
  </div>
);

// Når TextField har en ref, så får dom elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLInputElement | null): void => {
    if (instance) {
      instance.name = 'dummyNameForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('name', 'dummyNameForwardedFromRef');

// Når TextField har en id, så har input-elementet id'en satt
// Når TextField har en custom className, så har containeren className satt og custom stil vises
// Når TextField har en lang, så har containeren lang satt
// Når TextField har en data-testid, så har input-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlid',
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const field = canvas.getByRole('textbox');
  const container = canvas.getAllByRole('generic')[1];
  await expect(field).toHaveAttribute('id', 'htmlid');
  await expect(container).toHaveClass('dummyClassname');
  await expect(container).toHaveAttribute('lang', 'nb');
  await expect(field).toHaveAttribute('data-testid', '123ID');
};

// Når TextField instansieres, får den riktige default-verdier og riktig html-element
export const Defaults = Template.bind({});
Defaults.storyName =
  'Defaults Variant Standard (A1 delvis, A2 delvis, B2, FS-A2)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  label: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} input`,
    focus: `${wrapper} input`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox', { name: defaultLabelText });
  await expect(textbox).toBeInTheDocument();
  await expect(textbox).toBeEnabled();
  await expect(textbox).toHaveAttribute('id');
  await expect(textbox.tagName).toBe('INPUT');
  await expect(textbox).not.toBeRequired();
  await expect(textbox).not.toHaveAttribute('aria-invalid');
  await expect(textbox).not.toHaveAttribute('aria-describedby');
  const errorMessage = canvas.getAllByRole('generic')[3];
  await expect(errorMessage).toBeInTheDocument();
};

// Når TextField har en variant, så vises stilsett for variant og riktig html-element
export const VariantMultiline = Template.bind({});
VariantMultiline.storyName = 'Variant Multiline (A1 delvis, A2 delvis)';
VariantMultiline.args = {
  ...defaultArgs,
  variant: 'multiline',
};
VariantMultiline.argTypes = {
  variant: { table: { disable: false } },
};
VariantMultiline.parameters = {
  imageSnapshot: {
    hover: `${wrapper} textarea`,
    focus: `${wrapper} textarea`,
  },
};
VariantMultiline.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox.tagName).toBe('TEXTAREA');
};

// Når TextField er disabled, så er disabled satt på input og riktig stil er satt
export const WithDisabled = Template.bind({});
WithDisabled.storyName = 'With Disabled (B1 delvis, B8 delvis)';
WithDisabled.args = {
  ...defaultArgs,
  disabled: true,
  value: valueText,
};
WithDisabled.argTypes = {
  disabled: { table: { disable: false } },
  value: { table: { disable: false } },
};
WithDisabled.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toBeDisabled();
};

// Når TextField har en autoComplete, så er autoComplete satt på input
export const WithAutoComplete = Template.bind({});
WithAutoComplete.storyName = 'With AutoComplete (B1 delvis)';
WithAutoComplete.args = {
  ...defaultArgs,
  autoComplete: 'given-name',
};
WithAutoComplete.argTypes = {
  autoComplete: { table: { disable: false } },
};
WithAutoComplete.parameters = {
  imageSnapshot: { disable: true },
};
WithAutoComplete.play = verifyAttribute('autoComplete', 'given-name');

// Når TextField har defaultValue, så er defaultValue satt
export const WithDefaultValue = Template.bind({});
WithDefaultValue.storyName = 'With DefaultValue';
WithDefaultValue.args = {
  ...defaultArgs,
  defaultValue: valueText,
};
WithDefaultValue.argTypes = {
  defaultValue: { table: { disable: false } },
};
WithDefaultValue.parameters = {
  imageSnapshot: { disable: true },
};
WithDefaultValue.play = verifyAttribute('value', valueText);

// Når TextField har inputmode, så er riktig inputmode satt på input
export const WithInputMode = Template.bind({});
WithInputMode.storyName = 'With InputMode (A6 delvis, B1 delvis)';
WithInputMode.args = {
  ...defaultArgs,
  label: 'E-postadresse',
  inputMode: 'email',
};
WithInputMode.argTypes = {
  inputMode: { table: { disable: false } },
};
WithInputMode.parameters = {
  imageSnapshot: { disable: true },
};
WithInputMode.play = verifyAttribute('inputmode', 'email');

// Når TextField har en name, så er name satt
export const WithName = Template.bind({});
WithName.storyName = 'With Name (B1 delvis)';
WithName.args = {
  ...defaultArgs,
  name: 'test_name',
};
WithName.argTypes = {
  name: { table: { disable: false } },
};
WithName.parameters = {
  imageSnapshot: { disable: true },
};
WithName.play = verifyAttribute('name', 'test_name');

// Når TextField har placeholder, så er placeholder satt på input
export const WithPlaceholder = Template.bind({});
WithPlaceholder.storyName = 'With Placeholder (A3 delvis, B1 delvis)';
WithPlaceholder.args = {
  ...defaultArgs,
  placeholder: valueText,
};
WithPlaceholder.argTypes = {
  placeholder: { table: { disable: false } },
};
WithPlaceholder.play = verifyAttribute('placeholder', valueText);

// Når TextField har readonly, så er readonly satt på input
export const WithReadOnly = Template.bind({});
WithReadOnly.storyName = 'With ReadOnly (B1 delvis, B6 delvis)';
WithReadOnly.args = {
  ...defaultArgs,
  value: valueText,
  readOnly: true,
};
WithReadOnly.argTypes = {
  readOnly: { table: { disable: false } },
};
WithReadOnly.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toHaveAttribute('readonly');
};

// Når TextField er required, så er required satt på input-elementet
export const WithRequired = Template.bind({});
WithRequired.storyName = 'With Required (B4 delvis)';
WithRequired.args = {
  ...defaultArgs,
  required: true,
};
WithRequired.argTypes = {
  required: { table: { disable: false } },
};
WithRequired.parameters = {
  imageSnapshot: { disable: true },
};
WithRequired.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toBeRequired();
};

// Når TextField er required og showRequiredMark er satt, så er required satt på input-elementet og vises stjerne bak labelen
export const WithRequiredAndMark = Template.bind({});
WithRequiredAndMark.storyName =
  'With Required And Mark (B4 delvis, FS-A4 delvis)';
WithRequiredAndMark.args = {
  ...defaultArgs,
  required: true,
  showRequiredMark: true,
};
WithRequiredAndMark.argTypes = {
  required: { table: { disable: false } },
  showRequiredMark: { table: { disable: false } },
};

// Når TextField har en value, så er value satt
export const WithValue = Template.bind({});
WithValue.storyName = 'With Value';
WithValue.args = {
  ...defaultArgs,
  value: valueText,
};
WithValue.argTypes = {
  value: { table: { disable: false } },
};
WithValue.parameters = {
  imageSnapshot: { disable: true },
};
WithValue.play = verifyAttribute('value', valueText);

// Når TextField har minLength, maxLength og pattern, så blir attributtene satt
export const WithMinAndMaxLengthAndPattern = Template.bind({});
WithMinAndMaxLengthAndPattern.storyName =
  'With MinLength MaxLength And Pattern (A5, B1)';
WithMinAndMaxLengthAndPattern.args = {
  ...defaultArgs,
  maxLength: 50,
  minLength: 10,
  pattern: '[a-z]',
};
WithMinAndMaxLengthAndPattern.argTypes = {
  maxLength: { table: { disable: false } },
  minLength: { table: { disable: false } },
  pattern: { table: { disable: false } },
};
WithMinAndMaxLengthAndPattern.parameters = {
  imageSnapshot: { disable: true },
};
WithMinAndMaxLengthAndPattern.play = async ({
  canvasElement,
}): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toHaveAttribute('maxlength');
  await expect(textbox).toHaveAttribute('minlength');
  await expect(textbox).toHaveAttribute('pattern');
};

// Når TextField har aria-describedby, så er aria-describedby satt og fremdeles knyttet til id'en i ErrorMessage
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B5 delvis)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'testID',
};
WithAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toHaveAttribute('aria-describedby');
  await expect(textbox).toHaveAttribute(
    'aria-describedby',
    expect.stringMatching('testID')
  );
};

// Når TextField har errorMessage, så vises ingen feilmelding, aria-attributter eller stil satt for error
export const WithError = Template.bind({});
WithError.storyName = 'With ErrorMessage (B5 delvis)';
WithError.args = {
  ...defaultArgs,
  errorMessage: errorMessageText,
};
WithError.argTypes = {
  errorMessage: { table: { disable: false } },
  hasError: { table: { disable: false } },
};
WithError.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  const errorMessageContainer = canvas.getAllByRole('generic')[2];
  await expect(errorMessageContainer).toBeInTheDocument();
  await expect(canvas.queryByText(errorMessageText)).not.toBeInTheDocument();
  await expect(textbox).not.toHaveAttribute('aria-invalid', 'true');
  await expect(textbox).not.toHaveAttribute('aria-describedby');
};

// Når TextField har en error, så vises feilmelding, relevante aria-attributter og stil er satt til error
export const WithErrorMessageAndHasError = Template.bind({});
WithErrorMessageAndHasError.storyName =
  'With ErrorMessage And HasError (B5 delvis)';
WithErrorMessageAndHasError.args = {
  ...defaultArgs,
  errorMessage: errorMessageText,
  hasError: true,
};
WithErrorMessageAndHasError.argTypes = {
  errorMessage: { table: { disable: false } },
  hasError: { table: { disable: false } },
};
WithErrorMessageAndHasError.parameters = {
  imageSnapshot: {
    hover: `${wrapper} input`,
    focus: `${wrapper} input`,
  },
};
WithErrorMessageAndHasError.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  const errorMessage = canvas.getByText(errorMessageText);
  const errorMessageContainer = canvas.getAllByRole('generic')[2];
  await expect(errorMessage).toBeInTheDocument();
  await expect(errorMessageContainer).toBeInTheDocument();
  await expect(textbox).toHaveAttribute('aria-invalid', 'true');
  await expect(textbox).toHaveAttribute('aria-describedby');
};

// Når TextField har hasError og har prop ariaDescribedby fra konsument, så har aria-describedby begge id-ene
export const WithHasErrorAndAriaDescribedby = Template.bind({});
WithHasErrorAndAriaDescribedby.storyName =
  'With HasError And AriaDescribedby (B5 delvis)';
WithHasErrorAndAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: 'konsumentId',
  errorMessage: errorMessageText,
  hasError: true,
};
WithHasErrorAndAriaDescribedby.argTypes = {
  ariaDescribedby: { table: { disable: false } },
  hasError: { table: { disable: false } },
};
WithHasErrorAndAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithHasErrorAndAriaDescribedby.play = async ({
  canvasElement,
}): Promise<void> => {
  const canvas = within(canvasElement);
  const errorMessageContainer = canvas.getAllByRole('generic')[3];
  const textbox = canvas.getByRole('textbox');
  await expect(textbox).toHaveAttribute(
    'aria-describedby',
    expect.stringMatching(`konsumentId ${errorMessageContainer.id}`)
  );
};

// Når TextField har hideLabel, så er labelen ikke synlig men label-elementet finnes
export const WithHideLabel = Template.bind({});
WithHideLabel.storyName = 'With HideLabel (B2)';
WithHideLabel.args = {
  ...defaultArgs,
  hideLabel: true,
};
WithHideLabel.argTypes = {
  hideLabel: { table: { disable: false } },
};
WithHideLabel.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox', { name: defaultLabelText });
  await expect(textbox).toBeInTheDocument();
};

// Når TextField har en beskrivelse, så blir den vist sammen med label/ledeteksten
export const WithDescription = Template.bind({});
WithDescription.storyName = 'With Description (FS-A3)';
WithDescription.args = {
  ...defaultArgs,
  description: 'En liten beskrivelse tekst',
};
WithDescription.argTypes = {
  description: { table: { disable: false } },
};
WithDescription.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
  await expect(labelWithDescription).toBeInTheDocument();
};

// Når TextField har IsLarge, så vises feltet med riktig stil
export const WithIsLarge = Template.bind({});
WithIsLarge.storyName = 'With IsLarge (A1 delvis)';
WithIsLarge.args = {
  ...defaultArgs,
  isLarge: true,
};
WithIsLarge.argTypes = {
  isLarge: { table: { disable: false } },
};

// Når TextField har thousandSeparator, så blir verdier som ikke er tall tatt bort og formattert riktig
export const WithThousandSeparator = Template.bind({});
WithThousandSeparator.storyName = 'With ThousandSeparator (A10 delvis)';
WithThousandSeparator.args = {
  ...defaultArgs,
  thousandSeparator: true,
};
WithThousandSeparator.argTypes = {
  thousandSeparator: { table: { disable: false } },
};
WithThousandSeparator.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await textbox.focus();
  await userEvent.type(textbox, 'A10000');
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  await expect(textbox).toHaveValue('10 000');
};

// Når TextField har en rows, så blir rows satt
export const WithRows = Template.bind({});
WithRows.storyName = 'With Rows Variant Multiline (A10 delvis)';
WithRows.args = {
  ...defaultArgs,
  variant: 'multiline',
  rows: 4,
};
WithRows.argTypes = {
  rows: { table: { disable: false } },
};
WithRows.play = verifyAttribute('rows', '4');

// Når brukeren setter focus, blurrer, eller change i TextField, så kalles riktig eventHandler og ledeteksten endres
const EventHandlersTemplate: ComponentStory<typeof TextField> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
    <div data-test-block>
      <TextField
        {...args}
        label={labelText}
        onFocus={(event: React.FocusEvent<HTMLInputElement>): void => {
          setLabelText('TextField har fått fokus');
          args.onFocus && args.onFocus(event);
        }}
        onBlur={(event: React.FocusEvent<HTMLInputElement>): void => {
          setLabelText('TextField har blitt blurret');
          args.onBlur && args.onBlur(event);
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          setLabelText('TextField har blitt klikket på');
          args.onChange && args.onChange(event);
        }}
      />
    </div>
  );
};
export const WithEventHandlers = EventHandlersTemplate.bind({});
WithEventHandlers.storyName = 'With EventHandlers (A4 delvis)';
WithEventHandlers.args = {
  ...defaultArgs,
};
WithEventHandlers.parameters = {
  imageSnapshot: { disable: true },
};
WithEventHandlers.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const textbox = canvas.getByRole('textbox');
  await textbox.focus();
  await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
  await userEvent.type(textbox, 'Olav Nordmann');
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
  await userEvent.tab();
  await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
};
