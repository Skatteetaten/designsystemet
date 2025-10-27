import { ChangeEvent, FocusEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from 'storybook/test';

import { getSelectPlaceholderDefault, Select } from '@skatteetaten/ds-forms';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: Select,
  title: 'Tester/Select/Select',
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
    variant: {
      table: { disable: true },
      control: 'inline-radio',
    },
    label: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    // HTML
    autoComplete: { table: { disable: true } },
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
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
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

const valueOption1 = 'option1';
const valueOption2 = 'option2';
const errorMessageText = 'Ledetekst er obligatorisk';

const defaultLabelText = 'Ledetekst';
const defaultChildren = [
  <Select.Option key={'option_1'} value={valueOption1}>
    {'Test 1'}
  </Select.Option>,
  <Select.Option key={'option_2'} value={valueOption2}>
    {'Test 2'}
  </Select.Option>,
];
const defaultArgs = {
  label: defaultLabelText,
  children: defaultChildren,
};

export const WithRef = {
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
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
    ...defaultArgs,
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
    a11y: {
      test: 'off',
    },
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
    ...defaultArgs,
    classNames: {
      container: 'dummyClassname',
      label: 'dummyClassname',
      selectContainer: 'dummyClassnameFormContainer',
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

    const container = canvasElement.querySelector(`${wrapper} > div`);
    const label = canvas.getByText(defaultLabelText);

    const selectContainer = canvasElement.querySelector(
      `${wrapper} > div > div`
    );

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=selectErrorId]>div'
    );
    await expect(container).toHaveClass('dummyClassname');
    await expect(label).toHaveClass('dummyClassname');
    await expect(selectContainer).toHaveClass('dummyClassnameFormContainer');
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
  },
} satisfies Story;

export const Defaults = {
  name: 'Defaults Variant Medium (A1, A2 delvis, A3, FS-A2, B2)',
  args: {
    ...defaultArgs,
  },
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
    await expect(selectNode).toHaveTextContent(getSelectPlaceholderDefault());
    await expect(selectNode).toHaveAttribute('id');
    await expect(selectNode.tagName).toBe('SELECT');
    await expect(selectNode).not.toBeRequired();
    await expect(selectNode).not.toHaveAttribute('aria-invalid');
    await expect(selectNode).not.toHaveAttribute('aria-describedby');

    const errorMessageContainer = canvasElement.querySelector(
      '[id^=selectErrorId]'
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

export const WithVariantLargeAndLongText = {
  name: 'With Variant Large And Long Text',
  args: {
    ...defaultArgs,
    hidePlaceholder: true,
    variant: 'large',
    children: [
      <Select.Option key={'option_1'} value={valueOption1}>
        {'En lang tekst som ikke skal synes bak åpne ikonet'}
      </Select.Option>,
    ],
  },
  argTypes: {
    variant: { table: { disable: false } },
    children: { table: { disable: false } },
  },
  globals: {
    viewport: {
      value: '--mobile',
    },
  },
} satisfies Story;

export const WithDisabled = {
  name: 'With Disabled (B1, B6)',
  args: {
    ...defaultArgs,
    disabled: true,
    value: valueOption1,
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
  },
} satisfies Story;

export const WithValue = {
  name: 'With Value',
  args: {
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    ...defaultArgs,
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
    const selectNode = canvas.getByRole('combobox');
    await expect(selectNode).toBeRequired();
  },
} satisfies Story;

export const WithRequiredAndMark = {
  name: 'With Required And Mark (B1, FS-A4 delvis)',
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

export const WithErrorMessage = {
  name: 'With ErrorMessage (A4 delvis, B5 delvis)',
  args: {
    ...defaultArgs,
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
  name: 'With HideLabel (FS-A7)',
  args: {
    ...defaultArgs,
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
    ...defaultArgs,
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
    variant: { table: { disable: false } },
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
    variant: { table: { disable: false } },
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
