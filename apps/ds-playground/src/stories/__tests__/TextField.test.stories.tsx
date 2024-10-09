import { FocusEvent, ChangeEvent, useState, useRef, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { formArrSize } from '@skatteetaten/ds-core-utils';
import {
  TextboxRefHandle,
  TextField,
  textFieldAsArr,
} from '@skatteetaten/ds-forms';
import { Modal } from '@skatteetaten/ds-overlays';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import { loremIpsum, wrapper } from './testUtils/storybook.testing.utils';
import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

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
      table: { disable: true, category: category.props },
      options: [...textFieldAsArr],
      control: 'inline-radio',
    },
    variant: {
      table: { disable: true, category: category.props },
      options: [...formArrSize],
      control: 'inline-radio',
    },
    autosize: { table: { disable: true, category: category.props } },
    classNames: {
      table: { disable: true, category: category.props },
    },
    defaultValue: {
      control: 'text',
      table: { disable: true, category: category.props },
    },
    description: { table: { disable: true, category: category.props } },
    errorMessage: { table: { disable: true, category: category.props } },
    helpSvgPath: {
      table: { disable: true, category: category.props },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true, category: category.props } },
    hideLabel: { table: { disable: true, category: category.props } },
    label: { table: { disable: true, category: category.props } },
    list: { table: { disable: true, category: category.props } },
    showRequiredMark: { table: { disable: true, category: category.props } },
    thousandSeparator: { table: { disable: true, category: category.props } },
    titleHelpSvg: { table: { disable: true, category: category.props } },
    // HTML
    autoComplete: {
      table: { disable: true, category: category.htmlAttribute },
      type: 'string',
    },
    disabled: { table: { disable: true, category: category.htmlAttribute } },
    form: { table: { disable: true, category: category.htmlAttribute } },
    inputMode: { table: { disable: true, category: category.htmlAttribute } },
    name: { table: { disable: true, category: category.htmlAttribute } },
    maxLength: { table: { disable: true, category: category.htmlAttribute } },
    minLength: { table: { disable: true, category: category.htmlAttribute } },
    pattern: { table: { disable: true, category: category.htmlAttribute } },
    placeholder: { table: { disable: true, category: category.htmlAttribute } },
    readOnly: { table: { disable: true, category: category.htmlAttribute } },
    required: { table: { disable: true, category: category.htmlAttribute } },
    rows: { table: { disable: true, category: category.htmlAttribute } },
    value: { table: { disable: true, category: category.htmlAttribute } },
    // Events
    onBlur: { table: { disable: true, category: category.event } },
    onChange: { table: { disable: true, category: category.event } },
    onFocus: { table: { disable: true, category: category.event } },
    onHelpToggle: { table: { disable: true } },
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
    form: 'formid123',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
    autoComplete: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(textbox).toHaveAttribute('id', 'htmlid');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(textbox).toHaveAttribute('data-testid', '123ID');
    await expect(textbox).toHaveAttribute('form', 'formid123');
    await expect(textbox).toHaveAttribute('autocomplete', 'off');
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      errorMessage: 'dummyClassname',
      textbox: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname',
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
    errorMessage: errorMessageText,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(defaultLabelText);

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=textFieldErrorId]>div'
    );
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
    await expect(canvas.getByRole('textbox')).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Medium (A1, A2, B2, FS-A2)',
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

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=textFieldErrorId]'
    );
    await expect(errorMessageContainer).toBeInTheDocument();
  },
} satisfies Story;

export const WithVariantLarge = {
  name: 'With Variant Large (A1)',
  args: {
    ...defaultArgs,
    variant: 'large',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithAs = {
  name: 'With As (A1, A2)',
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
  name: 'With Disabled (B1, B8)',
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

export const WithDefaultValueAndThousandSeparator = {
  name: 'With DefaultValue and ThousandSeparator',
  args: {
    ...defaultArgs,
    defaultValue: 10000,
    thousandSeparator: true,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('value', '10 000'),
} satisfies Story;

export const WithDefaultValueAndAutoSizeTextArea = {
  name: 'With DefaultValue and Autosize TextArea',
  args: {
    ...defaultArgs,
    as: 'textarea',
    defaultValue: loremIpsum,
    autosize: true,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
    autosize: { table: { disable: false } },
  },
  parameters: {
    parameters: {
      viewport: {
        defaultViewport: '--breakpoint-xs',
      },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveValue(loremIpsum);
    await expect(textbox.tagName).toBe('TEXTAREA');
    const { scrollHeight } = textbox;
    const includeBorderAndMore = textbox.offsetHeight - textbox.clientHeight;
    await expect(textbox).toHaveStyle({
      height: `${scrollHeight + includeBorderAndMore}px`,
    });
  },
} satisfies Story;

export const WithAutoCompleteInputModeNameAndPlaceholder = {
  name: 'With AutoComplete InputMode Name And Placeholder (A3, A6, B1)',
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
  name: 'With ReadOnly (B1, B6)',
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
  name: 'With Required (B4)',
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
  name: 'With Required And Mark (B4, FS-A4 delvis)',
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
  name: 'With Rows As Textarea (A5)',
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

export const WithoutError = {
  name: 'Without ErrorMessage (B5)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=textFieldErrorId]'
    );
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByText(errorMessageText)).not.toBeInTheDocument();
    await expect(textbox).not.toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).not.toHaveAttribute('aria-describedby');
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
} satisfies Story;

export const WithErrorMessage = {
  name: 'With ErrorMessage(B5)',
  args: {
    ...defaultArgs,
    errorMessage: errorMessageText,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: `${wrapper} input`,
      focus: `${wrapper} input`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox', {
      description: errorMessageText,
    });
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(textbox).toHaveAttribute('aria-invalid', 'true');
    await expect(textbox).toHaveAttribute('aria-describedby');
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

export const WithThousandSeparator = {
  name: 'With ThousandSeparator As Input (A8 delvis)',
  args: {
    ...defaultArgs,
    thousandSeparator: true,
    onChange: fn(),
  },
  argTypes: {
    thousandSeparator: { table: { disable: false } },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    textbox.focus();
    await userEvent.type(textbox, 'A10000');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('10 000');
  },
} satisfies Story;

export const WithThousandSeparatorAndNegativeValue = {
  name: 'With ThousandSeparator and negative number value',
  args: {
    ...defaultArgs,
    thousandSeparator: true,
    onChange: fn(),
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
    thousandSeparator: { table: { disable: true } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('INPUT');
    textbox.focus();
    await userEvent.type(textbox, '-A10-000-');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await expect(textbox).toHaveValue('-10 000');
  },
} satisfies Story;

export const WithHelpText = {
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText:
      'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.',
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > div > button`,
      click: `${wrapper} > div > button`,
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLabelText,
    });
    await expect(helpButton).toBeInTheDocument();
  },
} satisfies Story;

export const WithHelpTextAndDescription = {
  name: 'With HelpText And Description (A1)',
  args: {
    ...defaultArgs,
    helpText:
      'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere.',
    description: 'En liten beskrivelse tekst',
  },
  argTypes: {
    helpText: { table: { disable: false } },
    description: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      focus: `${wrapper} > div > button`,
      click: `${wrapper} > div > button`,
    },
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof TextField> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
    <TextField
      {...args}
      label={labelText}
      onFocus={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('TextField har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('TextField har blitt blurret');
        args.onBlur && args.onBlur(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setLabelText('TextField har blitt klikket på');
        args.onChange && args.onChange(event);
      }}
    />
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A4)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, 'Olav Nordmann');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  },
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    onHelpToggle: (isOpen: boolean): void => {
      alert(isOpen ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;

const TextAreaInModalTemplate: StoryFn<typeof TextField> = (args) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => {
          modalRef.current?.show();
        }}
      >
        {'Vis modal'}
      </Button>
      <Modal ref={modalRef} title={'Modal med textarea'}>
        <TextField {...args} />
      </Modal>
    </>
  );
};

export const WithTextAreaAutoSizeInModal = {
  name: 'With textarea AutoSize in Modal',
  render: TextAreaInModalTemplate,
  args: {
    ...defaultArgs,
    as: 'textarea',
    autosize: true,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
    autosize: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    await userEvent.click(button);

    const textbox = canvas.getByRole('textbox');
    await expect(textbox.tagName).toBe('TEXTAREA');
    await waitFor(() =>
      expect(textbox).toHaveStyle({
        height: '64px',
      })
    );
  },
} satisfies Story;

export const WithDataList = {
  name: 'With  Datalist (A13, A14)',
  render: (): JSX.Element => (
    <>
      <TextField label={'nettlesere'} list={'browsers'} />
      <datalist id={'browsers'}>
        <option value={'Edge'} />
        <option value={'Firefox'} />
        <option value={'Chrome'} />
        <option value={'Opera'} />
        <option value={'Safari'} />
      </datalist>
    </>
  ),
  args: {
    ...defaultArgs,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
    autosize: { table: { disable: false } },
    list: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const textbox = canvas.getByRole('combobox');
    await expect(textbox).toHaveAttribute('list', 'browsers');
  },
} satisfies Story;

export const WithControlledValueAndAutoSizeTextArea = {
  name: 'With Controlled Value and Autosize TextArea',
  render: function Render(args): JSX.Element {
    const [, setArgs] = useArgs();
    return (
      <>
        <TextField
          onChange={(e) => setArgs({ value: e.target.value })}
          {...args}
        />
        <Button onClick={() => setArgs({ value: '' })}>{'Nullstill'}</Button>
      </>
    );
  },
  args: {
    ...defaultArgs,
    as: 'textarea',
    autosize: true,
    value: loremIpsum,
  },
  argTypes: {
    value: { table: { disable: false } },
    autosize: { table: { disable: false } },
  },
  parameters: {
    parameters: {
      viewport: {
        defaultViewport: '--breakpoint-xs',
      },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await waitFor(() => expect(textbox).toHaveValue(loremIpsum));
    const resetButton = canvas.getByRole('button');
    resetButton.click();

    const { scrollHeight } = textbox;
    const includeBorderAndMore = textbox.offsetHeight - textbox.clientHeight;
    await expect(textbox).toHaveStyle({
      height: `${scrollHeight + includeBorderAndMore}px`,
    });
  },
} satisfies Story;
