import { useState } from 'react';

import {
  TextboxRefHandle,
  TextField,
  textFieldAsArr,
} from '@skatteetaten/ds-forms';
import { expect } from '@storybook/jest';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
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

const meta = {
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
    as: {
      table: { disable: true },
      options: [...textFieldAsArr],
      control: 'inline-radio',
    },
    autosize: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasError: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    isLarge: { table: { disable: true } },
    label: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    thousandSeparator: { table: { disable: true } },
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
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

const valueText = 'Kari Nordmann';
const errorMessageText = 'Navn er obligatorisk';

const defaultLabelText = 'Navn';
const defaultArgs = {
  label: defaultLabelText,
};

export const WithRef = {
  name: 'With Ref (FA1)',

  args: {
    ...defaultArgs,
    ref: (instance: TextboxRefHandle | null): void => {
      if (instance && instance.textboxRef && instance.textboxRef.current) {
        instance.textboxRef.current.name = 'dummyNameForwardedFromRef';
      }
    },
  },

  argTypes: {
    ref: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: verifyAttribute('name', 'dummyNameForwardedFromRef'),
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

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(textbox).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(textbox).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',

  args: {
    ...defaultArgs,
    classNames: {
      label: 'dummyClassname',
      textbox: 'dummyClassname',
      errorMessage: 'dummyClassname',
    },
    hasError: true,
    errorMessage: errorMessageText,
  },

  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveClass('dummyClassname');

    const label = canvas.getByLabelText(defaultLabelText);
    await expect(label).toHaveClass('dummyClassname');

    const errorMessage = canvas.getAllByRole('generic')[4];
    await expect(errorMessage).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1 delvis, A2 delvis, B2, FS-A2)',

  args: {
    ...defaultArgs,
  },

  argTypes: {
    label: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} input`,
      focus: `${wrapper} input`,
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
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
  },
} satisfies Story;

export const WithAs = {
  name: 'With As (A1 delvis, A2 delvis)',

  args: {
    ...defaultArgs,
    as: 'textarea',
  },

  argTypes: {
    as: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} textarea`,
      focus: `${wrapper} textarea`,
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('TEXTAREA');
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (B1 delvis, B8 delvis)',

  args: {
    ...defaultArgs,
    disabled: true,
    value: valueText,
  },

  argTypes: {
    disabled: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeDisabled();
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',

  args: {
    ...defaultArgs,
    value: valueText,
  },

  argTypes: {
    value: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: verifyAttribute('value', valueText),
} satisfies Story;

export const WithDefaultValue = {
  name: 'With DefaultValue',

  args: {
    ...defaultArgs,
    defaultValue: valueText,
  },

  argTypes: {
    defaultValue: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: verifyAttribute('value', valueText),
} satisfies Story;

export const WithAutoCompleteInputModeNameAndPlaceholder = {
  name: 'With AutoComplete InputMode Name And Placeholder (A3 delvis, A6 delvis, B1 delvis)',

  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    inputMode: 'text',
    name: 'test_name',
    placeholder: valueText,
  },

  argTypes: {
    autoComplete: { table: { disable: false } },
    inputMode: { table: { disable: false } },
    name: { table: { disable: false } },
    placeholder: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('autocomplete', 'given-name');
    await expect(textbox).toHaveAttribute('inputmode', 'text');
    await expect(textbox).toHaveAttribute('name', 'test_name');
    await expect(textbox).toHaveAttribute('placeholder', valueText);
  },
} satisfies Story;

export const WithReadOnly = {
  name: 'With ReadOnly (B1 delvis, B6 delvis)',

  args: {
    ...defaultArgs,
    value: valueText,
    readOnly: true,
  },

  argTypes: {
    readOnly: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
  },
} satisfies Story;

export const WithRequired = {
  name: 'With Required (B4 delvis)',

  args: {
    ...defaultArgs,
    required: true,
  },

  argTypes: {
    required: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toBeRequired();
  },
} satisfies Story;

export const WithRequiredAndMark = {
  name: 'With Required And Mark (B4 delvis, FS-A4 delvis)',

  args: {
    ...defaultArgs,
    required: true,
    showRequiredMark: true,
  },

  argTypes: {
    required: { table: { disable: false } },
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithMinAndMaxLength = {
  name: 'With MinLength And MaxLength (A5, B1)',

  args: {
    ...defaultArgs,
    maxLength: 50,
    minLength: 10,
  },

  argTypes: {
    maxLength: { table: { disable: false } },
    minLength: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('maxlength');
    await expect(textbox).toHaveAttribute('minlength');
  },
} satisfies Story;

export const WithPattern = {
  name: 'With Pattern As Input (A5, B1)',

  args: {
    ...defaultArgs,
    pattern: '[a-z]',
  },

  argTypes: {
    pattern: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('pattern');
    await expect(textbox.tagName).toBe('INPUT');
  },
} satisfies Story;

export const WithRows = {
  name: 'With Rows As Textarea (A5 delvis)',

  args: {
    ...defaultArgs,
    as: 'textarea',
    rows: 4,
  },

  argTypes: {
    rows: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('rows', '4');
    await expect(textbox.tagName).toBe('TEXTAREA');
  },
} satisfies Story;

export const WithAriaDescribedby = {
  name: 'With AriaDescribedby (B5 delvis)',

  args: {
    ...defaultArgs,
    ariaDescribedby: 'testID',
  },

  argTypes: {
    ariaDescribedby: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('aria-describedby');
    await expect(textbox).toHaveAttribute(
      'aria-describedby',
      expect.stringMatching('testID')
    );
  },
} satisfies Story;

export const WithError = {
  name: 'With ErrorMessage (B5 delvis)',

  args: {
    ...defaultArgs,
    errorMessage: errorMessageText,
  },

  argTypes: {
    errorMessage: { table: { disable: false } },
    hasError: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByText(errorMessageText)).not.toBeInTheDocument();
    await expect(textbox).not.toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
  },
} satisfies Story;

export const WithErrorMessageAndHasError = {
  name: 'With ErrorMessage And HasError (B5 delvis)',

  args: {
    ...defaultArgs,
    errorMessage: errorMessageText,
    hasError: true,
  },

  argTypes: {
    errorMessage: { table: { disable: false } },
    hasError: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: {
      hover: `${wrapper} input`,
      focus: `${wrapper} input`,
    },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const errorMessage = canvas.getByText(errorMessageText);
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessage).toBeInTheDocument();
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
  },
} satisfies Story;

export const WithHasErrorAndAriaDescribedby = {
  name: 'With HasError And AriaDescribedby (B5 delvis)',

  args: {
    ...defaultArgs,
    ariaDescribedby: 'konsumentId',
    errorMessage: errorMessageText,
    hasError: true,
  },

  argTypes: {
    ariaDescribedby: { table: { disable: false } },
    hasError: { table: { disable: false } },
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute(
      'aria-describedby',
      expect.stringMatching(`konsumentId ${errorMessageContainer.id}`)
    );
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (FS-A3)',

  args: {
    ...defaultArgs,
    description: 'En liten beskrivelse tekst',
  },

  argTypes: {
    description: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
  },
} satisfies Story;

export const WithHideLabel = {
  name: 'With HideLabel (B2)',

  args: {
    ...defaultArgs,
    hideLabel: true,
  },

  argTypes: {
    hideLabel: { table: { disable: false } },
  },

  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox', { name: defaultLabelText });
    await expect(textbox).toBeInTheDocument();
  },
} satisfies Story;

export const WithIsLarge = {
  name: 'With IsLarge (A1 delvis)',

  args: {
    ...defaultArgs,
    isLarge: true,
  },

  argTypes: {
    isLarge: { table: { disable: false } },
  },
} satisfies Story;

export const WithThousandSeparator = {
  name: 'With ThousandSeparator As Input (A8 delvis)',

  args: {
    ...defaultArgs,
    thousandSeparator: true,
  },

  argTypes: {
    thousandSeparator: { table: { disable: false } },
  },

  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    await textbox.focus();
    await userEvent.type(textbox, 'A10000');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('10 000');
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof TextField> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
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
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A4 delvis)',

  args: {
    ...defaultArgs,
  },

  parameters: {
    imageSnapshot: { disable: true },
  },

  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, 'Olav Nordmann');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  },
} satisfies Story;
