import { ChangeEvent, FocusEvent, JSX, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from 'storybook/test';

import { Button } from '@skatteetaten/ds-buttons';
import { getDefaultHelpButtonTitle } from '@skatteetaten/ds-core-utils';
import { getDefaultSelectPlaceholder, Select } from '@skatteetaten/ds-forms';
import { Alert } from '@skatteetaten/ds-status';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const valueOption1 = 'option1';
const valueOption2 = 'option2';
const childrenOption2 = 'Test 2';
const errorMessageText = 'Ledetekst er obligatorisk';
const defaultLabelText = 'Ledetekst';

const meta = {
  component: Select,
  title: 'Tester/Select',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    classNames: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    value: { table: { disable: true } },
    placeholder: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true } },
    hideLabel: { table: { disable: true } },
    hidePlaceholder: { table: { disable: true } },
    label: { table: { disable: true } },
    readOnly: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML
    autoComplete: { table: { disable: true } },
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
    // Aria
    ariaDescribedBy: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
  args: {
    label: defaultLabelText,
    children: [
      <Select.Option key={'option_1'} value={valueOption1}>
        {'Test 1'}
      </Select.Option>,
      <Select.Option key={'option_2'} value={valueOption2}>
        {childrenOption2}
      </Select.Option>,
    ],
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ref: (instance: HTMLSelectElement | null): void => {
      if (instance) {
        instance.name = 'dummyNameForwardedFromRef';
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
    const element = canvas.getByRole('combobox');
    await expect(element).toBeInTheDocument();
    await expect(element).toHaveAttribute('name', 'dummyNameForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5)',
  args: {
    id: 'htmlid',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: 'form123',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    const container = canvas.getAllByRole('generic')[1];
    await expect(selectNode).toHaveAttribute('id', 'htmlid');
    await expect(selectNode).toHaveAttribute('data-testid', '123ID');
    await expect(container).toHaveClass('dummyClassname');
    await expect(container).toHaveAttribute('lang', 'nb');
    await expect(selectNode).toHaveAttribute('form', 'form123');
  },
} satisfies Story;

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      selectContainer: 'dummyClassname',
      errorMessage: 'dummyClassname',
    },
    errorMessage: errorMessageText,
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(defaultLabelText);

    const selectContainer = canvasElement.querySelector(
      `${wrapper} > div > div > div`
    );

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=selectErrorId]>div'
    );
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(selectContainer).toHaveClass('dummyClassname');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults (A1, A2 delvis, A3, FS-A2, B2)',
  args: {},
  argTypes: {
    label: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox', { name: defaultLabelText });
    await expect(selectNode).toBeInTheDocument();
    await expect(selectNode).toBeEnabled();
    await expect(selectNode).toHaveValue('');
    await expect(selectNode).toHaveTextContent(getDefaultSelectPlaceholder());
    await expect(selectNode).toHaveAttribute('id');
    await expect(selectNode.tagName).toBe('SELECT');
    await expect(selectNode).not.toBeRequired();
    await expect(selectNode).not.toHaveAttribute('aria-invalid');
    await expect(selectNode).not.toHaveAttribute('aria-describedby');

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=selectErrorId]'
    );
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByRole('textbox')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithAriaDescribedBy = {
  name: 'With AriaDescribedBy',
  render: (args): JSX.Element => {
    const alertId = 'select-alert-description-id';
    return (
      <>
        <Select {...args} ariaDescribedBy={alertId} hasSpacing />
        <Alert id={alertId} variant={'warning'} showAlert>
          {'Dette er en varselmelding for select'}
        </Alert>
      </>
    );
  },
  args: {},
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');
    await expect(select).toHaveAttribute('aria-describedby');

    const alertText = canvas.getByText('Dette er en varselmelding for select');
    await expect(alertText).toBeInTheDocument();

    const describedBy = select.getAttribute('aria-describedby') || '';
    const describedByIds = describedBy.split(' ').filter(Boolean);
    await expect(describedByIds).toContain('select-alert-description-id');
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (B1, B6)',
  args: {
    disabled: true,
    value: valueOption1,
    helpText: 'Hjelpeknappen skal også være disabled',
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeDisabled();
    const helpButton = canvas.getByRole('button');
    await expect(helpButton).toBeDisabled();
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',
  args: {
    value: valueOption2,
  },
  argTypes: {
    value: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  },
} satisfies Story;

export const WithDefaultValue = {
  name: 'With DefaultValue',
  args: {
    defaultValue: valueOption2,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).toHaveValue(valueOption2);
  },
} satisfies Story;

const customPlaceholderText = 'Velg fra listen noe gøy';
export const WithAutoCompleteNameAndPlaceholder = {
  name: 'With AutoComplete Name And Placeholder (A2 delvis, B1)',
  args: {
    autoComplete: 'given-name',
    name: 'test_name',
    placeholder: customPlaceholderText,
  },
  argTypes: {
    autoComplete: { table: { disable: false } },
    name: { table: { disable: false } },
    placeholder: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toHaveAttribute('autocomplete', 'given-name');
    await expect(selectNode).toHaveAttribute('name', 'test_name');

    const placeholderOption = canvas.getByText(customPlaceholderText);
    await expect(placeholderOption).toBeInTheDocument();
    await expect(placeholderOption.tagName).toBe('OPTION');
  },
} satisfies Story;

export const WithHidePlaceholder = {
  name: 'With HidePlaceholder (A2 delvis)',
  args: {
    hidePlaceholder: true,
  },
  argTypes: {
    hidePlaceholder: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const optionNode = canvas.getByRole('combobox');
    await expect(optionNode).not.toHaveValue('');
  },
} satisfies Story;

export const WithRequired = {
  name: 'With Required (B1, B4)',
  args: {
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
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeRequired();
    await expect(selectNode).toHaveAttribute('aria-invalid', 'false');
  },
} satisfies Story;

export const WithErrorMessage = {
  name: 'With ErrorMessage (A4 delvis, B5 delvis)',
  args: {
    errorMessage: errorMessageText,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox', {
      description: errorMessageText,
    });
    const errorMessageContainer = canvas.getAllByRole('generic')[3];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(selectNode).toHaveAttribute('aria-invalid', 'true');
    await expect(selectNode).toHaveAttribute('aria-describedby');
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (FS-A3)',
  args: {
    description: 'En liten beskrivelse tekst',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const labelWithDescription = canvas.getByText('En liten beskrivelse tekst');
    await expect(labelWithDescription).toBeInTheDocument();
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toHaveAttribute('aria-describedby');
    const describedbyValue = selectNode.getAttribute('aria-describedby');
    await expect(describedbyValue).toMatch(/descId-/);
  },
} satisfies Story;

export const WithHideLabel = {
  name: 'With HideLabel (FS-A7)',
  args: {
    hideLabel: true,
  },
  argTypes: {
    hideLabel: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox', { name: defaultLabelText });
    await expect(selectNode).toBeInTheDocument();
  },
} satisfies Story;

export const WithHelpText = {
  name: 'With HelpText (A1)',
  args: {
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
  },
} satisfies Story;

export const WithReadOnly = {
  name: 'With ReadOnly',
  args: {
    readOnly: true,
    value: valueOption2,
  },
  argTypes: {
    readOnly: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { pseudoStates: ['hover', 'focus-visible'] },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('combobox')).not.toBeInTheDocument();
    const textbox = canvas.getByRole('textbox');
    await expect(textbox).toHaveAttribute('readonly');
    await expect(textbox).toHaveValue(childrenOption2);
  },
} satisfies Story;

export const WithReadOnlyNameAndForm = {
  name: 'With ReadOnly Name And Form',
  args: {
    readOnly: true,
    name: 'farge',
    form: 'form123',
    value: valueOption2,
  },
  argTypes: {
    readOnly: { table: { disable: false } },
    name: { table: { disable: false } },
    form: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).not.toHaveAttribute('name');
    const hidden = canvasElement.querySelector(
      `input[type='hidden'][name='farge']`
    );
    await expect(hidden).toHaveValue(valueOption2);
    await expect(hidden).toHaveAttribute('form', 'form123');
  },
} satisfies Story;

export const WithReadOnlyAndDisabled = {
  name: 'With ReadOnly and Disabled',
  args: {
    readOnly: true,
    disabled: true,
    value: valueOption2,
  },
  argTypes: {
    readOnly: { table: { disable: false } },
    disabled: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('textbox')).not.toBeInTheDocument();
    await expect(canvas.queryByRole('combobox')).toBeInTheDocument();
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof Select> = (args) => {
  const [labelText, setLabelText] = useState('Tester events');
  return (
    <Select
      {...args}
      label={labelText}
      onFocus={(event: FocusEvent<HTMLSelectElement>): void => {
        setLabelText('Select har fått fokus');
        args.onFocus && args.onFocus(event);
      }}
      onBlur={(event: FocusEvent<HTMLSelectElement>): void => {
        setLabelText('Select har blitt blurret');
        args.onBlur && args.onBlur(event);
      }}
      onChange={(event: ChangeEvent<HTMLSelectElement>): void => {
        setLabelText('Select har blitt klikket på');
        args.onChange && args.onChange(event);
      }}
    />
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers (A3)',
  args: {
    onFocus: fn(),
    onBlur: fn(),
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const selectNode = canvas.getByRole('combobox');
    selectNode.focus();
    await waitFor(() => expect(args.onFocus).toHaveBeenCalled());
    await userEvent.selectOptions(selectNode, valueOption2);
    await waitFor(() => expect(args.onChange).toHaveBeenCalled());
    await userEvent.tab();
    await waitFor(() => expect(args.onBlur).toHaveBeenCalled());
  },
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    helpText: 'Hjelpetekst',
    onHelpToggle: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement, args }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      name: getDefaultHelpButtonTitle(),
    });
    await fireEvent.click(helpButton);
    await waitFor(() => expect(args.onHelpToggle).toHaveBeenCalled());
  },
} satisfies Story;

export const WithLongInput = {
  args: {
    label: 'Ledetekst',
    className: 'textField150',
    defaultValue: valueOption1,
    children: [
      <Select.Option key={'option_1'} value={valueOption1}>
        {'Long input tekst'}
      </Select.Option>,
      <Select.Option key={'option_2'} value={valueOption2}>
        {'Very very very long inputtext'}
      </Select.Option>,
    ],
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
} satisfies Story;

export const WithLongPlaceholder = {
  args: {
    label: 'Ledetekst',
    className: 'textField150',
    placeholder: 'Long placeholder text',
    children: [
      <Select.Option key={'option_1'} value={valueOption1}>
        {'Long input tekst'}
      </Select.Option>,
      <Select.Option key={'option_2'} value={valueOption2}>
        {'Very very very long inputtext'}
      </Select.Option>,
    ],
  },
  argTypes: {
    placeholder: { table: { disable: false } },
  },
} satisfies Story;

const TwoSelects: StoryFn<typeof Select> = () => {
  return (
    <div className={'flex gapS'}>
      <Select label={'Fruktsort'} required>
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
      </Select>
      <Select
        label={'Fruktsort'}
        helpText={'Velg frukten du liker best.'}
        required
      >
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
      </Select>
    </div>
  );
};

export const TwoSelectsOneWithHelpText = {
  render: TwoSelects,
};

const ToggleReadOnlyTemplate: StoryFn<typeof Select> = (args) => {
  const [isReadOnly, setIsReadOnly] = useState(false);
  return (
    <form>
      <Select {...args} readOnly={isReadOnly} hasSpacing />
      <Button onClick={(): void => setIsReadOnly(!isReadOnly)}>
        {'Toggle readOnly'}
      </Button>
    </form>
  );
};

export const WithUncontrolledToggleReadOnly = {
  render: ToggleReadOnlyTemplate,
  name: 'With Uncontrolled Toggle ReadOnly',
  args: {
    name: 'frukt',
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const toggleReadOnlyBtn = canvas.getByRole('button', {
      name: 'Toggle readOnly',
    });

    await userEvent.selectOptions(canvas.getByRole('combobox'), valueOption2);

    // Brukerens valg (kun lagret internt) skal vises og sendes med i readOnly
    await userEvent.click(toggleReadOnlyBtn);
    await expect(await canvas.findByRole('textbox')).toHaveValue(
      childrenOption2
    );
    const hiddenInput = canvasElement.querySelector(
      `input[type='hidden'][name='frukt']`
    );
    await expect(hiddenInput).toHaveValue(valueOption2);

    // Brukerens valg skal beholdes når readOnly slås av igjen
    await userEvent.click(toggleReadOnlyBtn);
    const select = await canvas.findByRole('combobox');
    await expect(select).toHaveValue(valueOption2);
    await expect(canvas.queryByRole('textbox')).not.toBeInTheDocument();
  },
} satisfies Story;

export const WithUncontrolledToggleReadOnlyAndHidePlaceholder = {
  render: ToggleReadOnlyTemplate,
  name: 'With Uncontrolled Toggle ReadOnly And HidePlaceholder',
  args: {
    hidePlaceholder: true,
  },
  argTypes: {
    hidePlaceholder: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button', {
      name: 'Toggle readOnly',
    });

    // Uten defaultValue viser select første option
    await expect(canvas.getByRole('combobox')).toHaveValue(valueOption1);

    // readOnly skal vise samme option som select viste
    await userEvent.click(toggleButton);
    await expect(await canvas.findByRole('textbox')).toHaveValue('Test 1');

    await userEvent.click(toggleButton);
    await expect(await canvas.findByRole('combobox')).toHaveValue(valueOption1);
  },
} satisfies Story;
