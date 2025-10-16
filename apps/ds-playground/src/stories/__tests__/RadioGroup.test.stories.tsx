import { ChangeEvent, FocusEvent, useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { within as shadowWithin } from 'shadow-dom-testing-library';
import { useArgs } from 'storybook/preview-api';
import { expect, fn, userEvent, waitFor, within } from 'storybook/test';

import { RadioGroup, RadioGroupProps } from '@skatteetaten/ds-forms';
import { Heading } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { webComponent } from '../../../.storybook/webcomponent-decorator';
import { SystemSVGPaths } from '../utils/icon.systems';

const meta = {
  component: RadioGroup,
  title: 'Tester/RadioGroup/RadioGroup',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    classNames: { table: { category: category.props } },
    children: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    description: { table: { disable: true } },
    errorMessage: { table: { disable: true } },
    hasSpacing: { table: { disable: true } },
    helpSvgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    helpText: { table: { disable: true } },
    hideLegend: { table: { disable: true } },
    legend: { table: { disable: true } },
    shadowRootNode: { table: { disable: true } },
    showRequiredMark: { table: { disable: true } },
    selectedValue: { table: { disable: true } },
    titleHelpSvg: { table: { disable: true } },
    variant: {
      table: { disable: true },
      control: 'inline-radio',
    },
    // HTML
    disabled: { table: { disable: true } },
    form: { table: { disable: true } },
    name: { table: { disable: true } },
    required: { table: { disable: true } },
    // Events
    onChange: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onHelpToggle: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
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
    imageSnapshot: { disableSnapshot: true },
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
  parameters: {
    a11y: {
      test: 'off',
    },
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
    const legend = canvas.getAllByText(defaultLegendText)[0];
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
    const legend = canvas.getAllByText(defaultLegendText)[0];
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
    imageSnapshot: { disableSnapshot: true },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios.forEach((input) => {
      expect(input).toHaveAttribute('name', 'nameFraKonsument');
    });
  },
} satisfies Story;

export const WithoutErrorMessage = {
  render: Template,
  name: 'Without ErrorMessage (B4)',
  args: {
    ...defaultArgs,
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
  parameters: {
    imageSnapshot: { disableSnapshot: true },
  },
} satisfies Story;

export const WithErrorMessage = {
  render: Template,
  name: 'With ErrorMessage (B4, A3)',
  args: {
    ...defaultArgs,
    errorMessage: 'Feilmelding',
    selectedValue: selectedValue,
    defaultValue: undefined,
  },
  argTypes: {
    errorMessage: { table: { disable: false } },
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

export const WithErrorMessageAndAriaDescribedby = {
  render: Template,
  name: 'With ErrorMessage And AriaDescribedby (B4)',
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
  },
  argTypes: {},
  parameters: {
    imageSnapshot: { disableSnapshot: true },
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
    await userEvent.click(helpButton);
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

const OnBlurHandlerTemplate: StoryFn<typeof RadioGroup> = (args) => {
  const [statusText, setStatusText] = useState('');

  const element = document.querySelector('radiogroup-customelement');
  const shadowRoot = element?.shadowRoot;
  return (
    <RadioGroup
      {...args}
      legend={'Voksen eller barn'}
      shadowRootNode={shadowRoot ?? undefined}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        args.onChange && args.onChange(event);
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        setStatusText('Radiogruppe har mistet fokus (onBlur)');
        args.onBlur && args.onBlur(event);
      }}
    >
      <RadioGroup.Radio value={'voksen'}>{'Voksen'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'barn'}>{'Barn'}</RadioGroup.Radio>
      <label>
        {'FeltForFokus'}
        <input
          type={'text'}
          value={'Annen input som skal få fokus'}
          onChange={fn()}
        />
      </label>
      <div>{statusText}</div>
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
    imageSnapshot: { disableSnapshot: true },
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

export const WithOnBlurEvent = {
  render: OnBlurHandlerTemplate,
  name: 'With onBlur Event',
  decorators: [webComponent],
  args: {
    ...defaultArgs,
    onBlur: fn(),
  },
  parameters: {
    imageSnapshot: { disableSnapshot: true },
    customElementName: 'radiogroup-customelement',
  },
  play: async ({ args, canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('radio')).not.toBeInTheDocument();

    const customElement = canvasElement.querySelector(
      'radiogroup-customelement'
    ) as HTMLElement;
    await expect(customElement).toBeInTheDocument();
    const shadowCanvas = shadowWithin(canvasElement);
    const radioGroup =
      await shadowCanvas.findAllByShadowRole<HTMLInputElement>('radio');
    const radio = radioGroup?.find((radio) => radio.value === 'voksen');
    if (radio) {
      await userEvent.click(radio);
    }
    await expect(radio).toBeChecked();
    const shadowRadio = await shadowCanvas.findByShadowRole('radio', {
      name: 'Barn',
    });
    await userEvent.click(shadowRadio);
    const input = shadowCanvas.getByShadowLabelText('FeltForFokus', {
      selector: 'input',
    });
    await userEvent.click(input);
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

export const WithCustomClassNames = {
  name: 'With Custom ClassNames (FA3)',
  args: {
    ...defaultArgs,
    classNames: {
      legend: 'dummyClassname',
      errorMessage: 'dummyClassname',
      description: 'dummyClassname',
      helpText: 'dummyClassname',
    },
    description: 'beskrivelse',
    helpText: 'HJEEEEEEELP',
    errorMessage: 'feil',
  },
  argTypes: {
    classNames: {
      table: { disable: false },
    },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);

    const errorMessageContainer = canvasElement.querySelector(
      '[id^= radioErrorId]>div'
    );
    await expect(errorMessageContainer).toHaveClass('dummyClassname');
    await expect(canvas.getByText('beskrivelse')).toHaveClass('dummyClassname');
  },
} satisfies Story;
