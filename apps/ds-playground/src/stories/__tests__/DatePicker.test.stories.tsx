import { ChangeEvent, FocusEvent, useState } from 'react';

import { dsI18n, formArrSize } from '@skatteetaten/ds-core-utils';
import { DatePicker, TextField } from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from '@storybook/test';

import { wrapper } from './testUtils/storybook.testing.utils';
import { webComponent } from '../../../.storybook/webcomponent-decorator';
import { SystemSVGPaths } from '../utils/icon.systems';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('textbox');
    await expect(button).toBeInTheDocument();
    await waitFor(() =>
      expect(button).toHaveAttribute(attribute, expectedValue)
    );
  };

const today = new Date('2024.01.15');
const meta = {
  component: DatePicker,
  title: 'Tester/DatePicker/DatePicker',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { disable: true } },
    value: { table: { disable: true }, control: 'date' },
    dateFormat: { table: { disable: true } },
    description: { table: { disable: true } },
    label: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    initialPickerDate: { table: { disable: true }, control: 'date' },
    minDate: { table: { disable: true }, control: 'date' },
    maxDate: { table: { disable: true }, control: 'date' },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...formArrSize],
      control: 'inline-radio',
    },
    // HTML
    autoComplete: { table: { disable: true } },
    disabled: { table: { disable: true } },
    name: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    required: { table: { disable: true } },
    readOnly: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onSelectDate: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  parameters: {
    mockDate: today,
  },
} satisfies Meta<typeof DatePicker>;
export default meta;
type Story = StoryObj<typeof meta>;

const valueDate = new Date(2024, 1, 1);
const errorMessageText = 'Fødselsdato er obligatorisk';

const defaultLabelText = 'Fødselsdato';
const defaultArgs = {
  label: defaultLabelText,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLInputElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
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
      container: ' dummyClassname',
      label: 'dummyClassname',
      dateContainer: 'dummyClassnameFormContainer',
      errorMessage: 'dummyClassname',
    },
    errorMessage: errorMessageText,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    // eslint-disable-next-line testing-library/no-node-access
    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(defaultLabelText);
    // eslint-disable-next-line testing-library/no-node-access
    const dateContainer = canvasElement.querySelector(`${wrapper} > div > div`);
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=datepickerErrorId]>div'
    );
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(dateContainer).toHaveClass('dummyClassnameFormContainer');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Medium (A1, A2, B2, B5)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    label: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: [`${wrapper} input`, `${wrapper} button`],
      focus: [`${wrapper} input`, `${wrapper} button`],
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', { name: defaultLabelText });
    await expect(input).toBeInTheDocument();
    await expect(input).toBeEnabled();
    await expect(input).toHaveAttribute('id');
    await expect(input).toHaveAttribute(
      'placeholder',
      dsI18n.t('ds_forms:datepicker.TypeOrSelect')
    );
    await expect(input.tagName).toBe('INPUT');
    await expect(input).not.toBeRequired();
    await expect(input).not.toHaveAttribute('aria-invalid');
    await expect(input).not.toHaveAttribute('aria-describedby');
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await expect(calendarButton).toBeInTheDocument();
    await expect(calendarButton).toBeEnabled();
    await expect(calendarButton.tagName).toBe('BUTTON');
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');

    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=datepickerErrorId]'
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

export const WithDisabled = {
  name: 'With Disabled (B7)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueDate,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    const calendarButton = canvas.getByRole('button');
    await expect(textbox).toBeDisabled();
    await expect(calendarButton).toBeDisabled();
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value (B1)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  argTypes: {
    value: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: verifyAttribute('value', '01.02.2024'),
} satisfies Story;

export const WithRequired = {
  name: 'With Required (B3)',
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
  name: 'With Required And Mark (A1)',
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

export const WithoutErrorMessage = {
  name: 'Without ErrorMessage (A1, A4, A7, B4)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    // eslint-disable-next-line testing-library/no-node-access
    const errorMessageContainer = canvasElement.querySelector(
      '[id^=datepickerErrorId]'
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
  name: 'With ErrorMessage (A1, A4, A7, B4)',
  args: {
    ...defaultArgs,
    errorMessage: errorMessageText,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: {
      hover: [`${wrapper} input`, `${wrapper} button`],
      focus: [`${wrapper} input`, `${wrapper} button`],
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

export const WithDescription = {
  name: 'With Description (A1)',
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

export const WithHelpText = {
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLabelText,
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
    const helpText = canvas.getByText('Hjelpetekst');
    await expect(helpText).toBeInTheDocument();
  },
} satisfies Story;

export const WithHideLabel = {
  name: 'With HideLabel (A1)',
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

export const WithAutoCompleteNameAndPlaceholder = {
  name: 'With AutoComplete Name And Placeholder (A2, B1)',
  args: {
    ...defaultArgs,
    autoComplete: 'given-name',
    name: 'test_name',
    placeholder: 'placeholdertekst',
  },
  argTypes: {
    autoComplete: { table: { disable: false } },
    name: { table: { disable: false } },
    placeholder: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('autocomplete', 'given-name');
    await expect(textbox).toHaveAttribute('name', 'test_name');
    await expect(textbox).toHaveAttribute('placeholder', 'placeholdertekst');
  },
} satisfies Story;

export const WithPlaceholderEmpty = {
  name: 'With Placeholder Empty (A2)',
  args: {
    ...defaultArgs,
    placeholder: '',
  },
  argTypes: {
    placeholder: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).not.toHaveAttribute('placeholder');
  },
} satisfies Story;

export const WithReadOnly = {
  name: 'With ReadOnly (B6)',
  args: {
    ...defaultArgs,
    value: valueDate,
    readOnly: true,
  },
  argTypes: {
    readOnly: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithDateFormat = {
  name: 'With DateFormat (A8)',
  args: {
    ...defaultArgs,
    value: valueDate,
    dateFormat: 'yyyy/MM/dd',
  },
  argTypes: {
    dateFormat: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await waitFor(() => expect(input).toHaveValue('2024/02/01'));

    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await fireEvent.click(calendarButton);
    const dateButton = canvas.getByText('5');
    await fireEvent.click(dateButton);
    await expect(input).toHaveValue('2024/01/05');
  },
} satisfies Story;

const DatesTemplate: StoryFn<typeof DatePicker> = (args) => {
  /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
    må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */
  args.initialPickerDate = new Date(args.initialPickerDate as Date);
  return <DatePicker {...args} initialPickerDate={args.initialPickerDate} />;
};

export const WithInitialPickerDate = {
  render: DatesTemplate,
  name: 'With InitialPickerDate (Kalender B2)',
  args: {
    ...defaultArgs,
    initialPickerDate: new Date('2024.01.31'),
  },
  argTypes: {
    initialPickerDate: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await fireEvent.click(calendarButton);
    const ariaCurrentButton = canvas.getByText('31');
    await expect(ariaCurrentButton).toHaveAttribute('aria-current', 'true');
  },
} satisfies Story;

export const GenerouslyWithFormatFromUser = {
  name: 'Generously With Format From User (A3)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  argTypes: {},
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    input.focus();

    const user = userEvent.setup();

    await fireEvent.change(input, { target: { value: '0103' } });

    await user.tab();
    await waitFor(() => expect(input).toHaveValue('01.03.2024'));
    input.focus();

    await fireEvent.change(input, { target: { value: '0104' } });
    await user.tab();

    await waitFor(() => expect(input).toHaveValue('01.04.2024'));
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof DatePicker> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
    <DatePicker
      {...args}
      label={labelText}
      onFocus={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har blitt blurret');
        args.onBlur && args.onBlur(event);
      }}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setLabelText('Form-element har blitt klikket på');
        args.onChange && args.onChange(event);
      }}
    />
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A6)',
  args: {
    ...defaultArgs,
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const textbox = canvas.getByRole('textbox');
    await textbox.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.type(textbox, '01.02.2002');
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  },
} satisfies Story;

export const ClickCalendarButton = {
  name: 'Click CalendarButton On And Off (A1, A5, B5)',
  args: {
    ...defaultArgs,
    value: valueDate,
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    await fireEvent.click(calendarButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
    await fireEvent.click(calendarButton);
  },
} satisfies Story;

export const ClickCalendarDateButton = {
  name: 'Click CalendarDateButton (Kalender A2, A6)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await userEvent.click(calendarButton);
    const dateButton = canvas.getByText('5');
    await userEvent.click(dateButton);
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
    const input = canvas.getByRole('textbox');
    await expect(input).toHaveValue('05.02.2024');
  },
} satisfies Story;

export const ClickOutsideCalendar = {
  name: 'Click Outside Calendar (Kalender A7)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await fireEvent.click(calendarButton);

    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    await fireEvent.click(canvas.getByLabelText(defaultLabelText));
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
  },
} satisfies Story;

export const OpenCalendarEscape = {
  name: 'Open Calender Escape ',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });
    await fireEvent.click(calendarButton);

    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    await userEvent.keyboard('[Escape]');
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
  },
} satisfies Story;

const MovesOverTemplate: StoryFn<typeof DatePicker> = (args) => {
  return (
    <>
      <DatePicker {...args} />
      <TextField label={'Organisasjonsnummer'} />
    </>
  );
};

export const OpenCalendarMovesOver = {
  render: MovesOverTemplate,
  name: 'Open Calendar Moves Over (Kalender A1 delvis)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  parameters: {
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
  },
} satisfies Story;

export const WithShadowDom = {
  name: 'With ShadowDom',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  decorators: [webComponent],
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
    customElementName: 'calendar-customelement',
  },
  play: async ({ canvasElement }): Promise<void> => {
    const customElement = canvasElement.querySelector(`calendar-customelement`);

    const shadowCanvas = within(
      customElement!.shadowRoot!.firstElementChild as HTMLElement
    );

    const calendarButton = shadowCanvas.getByRole('button', {
      name: dsI18n.t('ds_forms:datepicker.ChooseDate'),
    });

    await fireEvent.click(calendarButton);

    await expect(calendarButton).toHaveAttribute('aria-expanded', 'true');
    const calendarTable = shadowCanvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    await fireEvent.click(shadowCanvas.getByLabelText(defaultLabelText));
    await expect(calendarTable).not.toBeInTheDocument();
    await expect(calendarButton).toHaveAttribute('aria-expanded', 'false');
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

export const HideCalendarOnResizeWidth = {
  name: 'Hide Calendar On Window Resize (Kalender A4)',
  args: {
    ...defaultArgs,
    value: valueDate,
  },
  parameters: {
    imageSnapshot: { disable: true },
    HTMLSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button');
    await fireEvent.click(calendarButton);
    const calendarTable = canvas.getByRole('table');
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes _ikke_ dersom vinduet blir bredere
    window.innerWidth = window.innerWidth + 100;
    await fireEvent.resize(window);
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes _ikke_ dersom vinduet blir lavere
    window.innerHeight = window.innerHeight - 100;
    await fireEvent.resize(window);
    await expect(calendarTable).toBeInTheDocument();

    // kalender lukkes dersom vinduet blir smalere
    window.innerWidth = window.innerWidth - 100;
    await fireEvent.resize(window);
    await expect(calendarTable).not.toBeInTheDocument();
  },
} satisfies Story;
