import { ChangeEvent, useState } from 'react';

import {
  RadioGroup,
  RadioGroupProps,
  radioGroupVariantArr,
} from '@skatteetaten/ds-forms';
import { Heading } from '@skatteetaten/ds-typography';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from '@storybook/test';

import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: RadioGroup,
  title: 'Tester/RadioGroup/RadioGroup',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasError: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true } },
    hideLegend: { table: { disable: true } },
    legend: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    selectedValue: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...radioGroupVariantArr],
      control: 'inline-radio',
    },
    // HTML
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
    // Events
    onChange: { table: { disable: true } },
  },
} satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RadioGroup> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <RadioGroup
      {...args}
      onChange={(e): void => {
        if (args.selectedValue) {
          setArgs({ selectedValue: e.target.value });
        } else if (args.defaultValue) {
          setArgs({ defaultValue: e.target.value });
        }
      }}
    />
  );
};

const selectedValue = 'annet';
const defaultLegendText = 'Type virksomhet';
const defaultArgs: RadioGroupProps = {
  legend: defaultLegendText,
  children: [
    <RadioGroup.Radio key={'radioGroupRadio_1'} value={'foretak'}>
      {'Enkeltpersonsforetak'}
    </RadioGroup.Radio>,
    <RadioGroup.Radio key={'radioGroupRadio_2'} value={'selskap'}>
      {'Aksjeselskap'}
    </RadioGroup.Radio>,
    <RadioGroup.Radio key={'radioGroupRadio_3'} value={'annet'}>
      {'Annet'}
    </RadioGroup.Radio>,
  ],
};

export const WithRef = {
  render: Template,
  name: 'With Ref (FA1)',
  args: {
    ...defaultArgs,
    ref: (instance: HTMLFieldSetElement | null): void => {
      if (instance) {
        instance.id = 'dummyIdForwardedFromRef';
      }
    },
  },
  argTypes: {
    ref: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const container = canvas.getByRole('group');
    await expect(container).toHaveAttribute('id', 'dummyIdForwardedFromRef');
  },
} satisfies Story;

export const WithAttributes = {
  render: Template,
  name: 'With Attributes (FA2-5)',
  args: {
    ...defaultArgs,
    id: 'htmlId',
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    form: '123form',
  },
  argTypes: {
    id: { table: { disable: false } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
    form: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    await expect(fieldset).toHaveClass('dummyClassname');
    await expect(fieldset).toHaveAttribute('id', 'htmlId');
    await expect(fieldset).toHaveAttribute('lang', 'nb');
    await expect(fieldset).toHaveAttribute('data-testid', '123ID');
    await expect(fieldset).toHaveAttribute('form', '123form');
  },
} satisfies Story;

export const Defaults = {
  render: Template,
  name: 'Defaults Variant Standard (A1, B1)',
  args: {
    ...defaultArgs,
  },
  argTypes: {
    children: { table: { disable: false } },
    legend: { table: { disable: false } },
    variant: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const fieldset = canvas.getByRole('group');
    const legend = canvas.getByText(defaultLegendText);
    const radios = canvas.getAllByRole('radio');
    await expect(fieldset).toBeInTheDocument();
    await expect(fieldset.tagName).toBe('FIELDSET');
    await expect(legend).toBeInTheDocument();
    await expect(legend.tagName).toBe('LEGEND');
    radios.forEach((input) => {
      expect(input).toHaveAttribute('name');
    });
  },
} satisfies Story;

export const VariantHorizontal = {
  render: Template,
  name: 'Variant Horizontal (A6)',
  args: {
    ...defaultArgs,
    variant: 'horizontal',
  },
  argTypes: {
    variant: { table: { disable: false } },
  },
} satisfies Story;

export const WithHideLegend = {
  render: Template,
  name: 'With HideLegend (B1)',
  args: {
    ...defaultArgs,
    hideLegend: true,
  },
  argTypes: {
    hideLegend: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const legend = canvas.getByText(defaultLegendText);
    await expect(legend).toBeInTheDocument();
  },
} satisfies Story;

export const WithSelectedValue = {
  render: Template,
  name: 'With SelectedValue (A3)',
  args: {
    ...defaultArgs,
    selectedValue: selectedValue,
    defaultValue: undefined,
  },
  argTypes: {
    selectedValue: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', { checked: true });
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', selectedValue);
  },
} satisfies Story;

export const WithDefaultValue = {
  render: Template,
  name: 'With DefaultValue (A3)',
  args: {
    ...defaultArgs,
    selectedValue: undefined,
    defaultValue: selectedValue,
  },
  argTypes: {
    defaultValue: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('radio', { checked: true });
    // eslint-disable-next-line jest-dom/prefer-to-have-value
    await expect(input).toHaveAttribute('value', selectedValue);
  },
} satisfies Story;

export const WithDisabled = {
  render: Template,
  name: 'With Disabled (A4 delvis)',
  args: {
    ...defaultArgs,
    disabled: true,
    selectedValue: selectedValue,
    defaultValue: undefined,
  },
  argTypes: {
    disabled: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach((input) => {
      expect(input).toBeDisabled();
    });
  },
} satisfies Story;

export const WithRequired = {
  render: Template,
  name: 'With Required (A7)',
  args: {
    ...defaultArgs,
    required: true,
  },
  argTypes: {
    required: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach((input) => {
      expect(input).toBeRequired();
    });
  },
} satisfies Story;

export const WithRequiredAndMark = {
  render: Template,
  name: 'With Required And Mark (A7, A8)',
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

export const WithRequiredAndMarkAndLegendAsMarkup = {
  render: Template,
  name: 'With Required And Mark And Legend As Markup (A7, A8)',
  args: {
    ...defaultArgs,
    legend: (
      <>
        <Heading as={'h4'} level={3}>
          {defaultLegendText}
        </Heading>
        <span>{'Med virksomhet så menes bla bla'}</span>
      </>
    ),
    required: true,
    showRequiredMark: true,
  },
  argTypes: {
    showRequiredMark: { table: { disable: false } },
  },
} satisfies Story;

export const WithName = {
  render: Template,
  name: 'With Name (B1)',
  args: {
    ...defaultArgs,
    name: 'nameFraKonsument',
  },
  argTypes: {
    name: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach((input) => {
      expect(input).toHaveAttribute('name', 'nameFraKonsument');
    });
  },
} satisfies Story;

export const WithErrorMessage = {
  render: Template,
  name: 'With ErrorMessage (B4)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[6];
    await expect(errorMessageContainer).toBeInTheDocument();
    await expect(canvas.queryByText('Feilmelding')).not.toBeInTheDocument();
    const radios = canvas.getAllByRole('radio');
    radios.forEach((radio) => {
      expect(radio).not.toHaveAttribute('aria-invalid', 'true');
      expect(radio).not.toHaveAttribute('aria-describedby');
    });
  },
} satisfies Story;

export const WithErrorMessageAndHasError = {
  render: Template,
  name: 'With ErrorMessage And HasError (B4, A3)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    hasError: true,
    selectedValue: selectedValue,
    defaultValue: undefined,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
    hasError: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    const errorMessage = canvas.getByText('Feilmelding');
    const errorMessageContainer = canvas.getAllByRole('generic')[6];
    await expect(errorMessage).toBeInTheDocument();
    await expect(errorMessageContainer).toBeInTheDocument();
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('aria-invalid', 'true');
      expect(radio).toHaveAttribute(
        'aria-describedby',
        errorMessageContainer.id
      );
    });
  },
} satisfies Story;

export const WithHasErrorAndAriaDescribedby = {
  render: Template,
  name: 'With HasError And AriaDescribedby (B4)',
  args: {
    ...defaultArgs,
    children: [
      <RadioGroup.Radio
        key={'radioGroupRadio_1'}
        ariaDescribedby={'konsumentId'}
      >
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>,
    ],
    errorMessage: 'Feilmelding',
    hasError: true,
  },
  argTypes: {
    hasError: { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const errorMessageContainer = canvas.getAllByRole('generic')[4];
    const radio = canvas.getByRole('radio');
    expect(radio).toHaveAttribute(
      'aria-describedby',
      `konsumentId ${errorMessageContainer.id}`
    );
  },
} satisfies Story;

export const WithHelpText = {
  render: Template,
  name: 'With HelpText (A1)',
  args: {
    ...defaultArgs,
    helpText: 'Vi trenger å vite din type virksomhet.',
  },
  argTypes: {
    helpText: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const helpButton = canvas.getByRole('button', {
      description: defaultLegendText,
    });
    await expect(helpButton).toBeInTheDocument();
    await fireEvent.click(helpButton);
  },
} satisfies Story;

export const WithDescription = {
  name: 'With Description (A1)',
  args: {
    ...defaultArgs,
    description: 'Vi trenger å vite din type virksomhet.',
  },
  argTypes: {
    description: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const description = canvas.getByText(
      'Vi trenger å vite din type virksomhet.'
    );
    await expect(description).toBeInTheDocument();
  },
} satisfies Story;

const EventHandlersTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const [labelText, setLabelText] = useState('Aksjeselskap');
  return (
    <RadioGroup
      {...args}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setLabelText('Radio har blitt klikket på');
        args.onChange && args.onChange(event);
      }}
    >
      <RadioGroup.Radio value={'selskap'}>{labelText}</RadioGroup.Radio>
    </RadioGroup>
  );
};

export const WithEventHandlers = {
  render: EventHandlersTemplate,
  name: 'With EventHandlers',
  args: {
    ...defaultArgs,
    onChange: fn(),
  },
  parameters: {
    imageSnapshot: { disable: true },
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio');
    await expect(radio).toBeInTheDocument();
    await expect(radio).not.toBeChecked();
    await userEvent.click(radio);
    await expect(radio).toBeChecked();
    await waitFor(() =>
      expect(args.onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'selskap' }),
        })
      )
    );
  },
} satisfies Story;

export const WithHelpToggleEvent = {
  name: 'With onHelpToggle Event',
  args: {
    ...defaultArgs,
    helpText: 'Hjelpetekst',
    onHelpToggle: (open: boolean): void => {
      alert(open ? 'Hjelpetekst blir vist' : 'Hjelpetekst skjules');
    },
  },
  parameters: {
    imageSnapshot: {
      disable: true,
    },
  },
} satisfies Story;
