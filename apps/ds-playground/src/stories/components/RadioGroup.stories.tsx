import { useState } from 'react';

import {
  RadioGroup,
  radioGroupVariantArr,
  getRadioGroupVariantDefault,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const legendText = 'Type virksomhet';

const meta = {
  component: RadioGroup,
  title: 'Komponenter/RadioGroup/RadioGroup',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      table: { category: category.props },
    },
    helpSvgPath: { table: { category: category.props } },
    helpText: { table: { category: category.props } },
    hideLegend: {
      table: { category: category.props },
    },
    legend: {
      table: { category: category.props },
    },
    showRequiredMark: {
      table: { category: category.props },
    },
    titleHelpSvg: { table: { category: category.props } },
    variant: {
      control: 'inline-radio',
      options: [...radioGroupVariantArr],
      table: {
        category: category.props,
        defaultValue: { summary: getRadioGroupVariantDefault() },
      },
    },
    defaultValue: {
      type: 'string',
      table: { category: category.props },
    },
    selectedValue: {
      type: 'string',
      table: { category: category.props },
    },
    // HTML
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    name: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    // Events
    onChange: {
      ...htmlEventDescription,
    },
  },
  tags: ['autodocs'],
  args: {
    legend: legendText,
    children: (
      <>
        <RadioGroup.Radio value={'foretak'}>
          {'Enkeltpersonsforetak'}
        </RadioGroup.Radio>
        <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
      </>
    ),
  },
  parameters: {
    version: getVersion('ds-forms'),
    docs: { source: { type: 'code' } },
  },
} satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefaultControlled: StoryFn<typeof RadioGroup> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <RadioGroup
      {...args}
      onChange={(e): void => {
        setArgs({ selectedValue: e.target.value });
      }}
    />
  );
};

export const RadioGroupDefaultControlled = {
  render: TemplateDefaultControlled,
  name: 'Default Controlled',
  argTypes: {
    defaultValue: { control: { disable: true } },
  },
  args: {
    children: (
      <>
        <RadioGroup.Radio value={'foretak'}>
          {'Enkeltpersonsforetak'}
        </RadioGroup.Radio>
        <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
      </>
    ),
    defaultValue: undefined,
    selectedValue: '',
  },
} satisfies Story;

const TemplateDefaultUncontrolled: StoryFn<typeof RadioGroup> = (args) => {
  return (
    <RadioGroup {...args}>
      <RadioGroup.Radio value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
    </RadioGroup>
  );
};

export const RadioGroupDefaultUncontrolled = {
  render: TemplateDefaultUncontrolled,
  name: 'Default Uncontrolled',
  argTypes: {
    selectedValue: { control: { disable: true } },
  },
  args: {
    selectedValue: undefined,
    defaultValue: 'annet',
  },
} satisfies Story;

const TemplateExampleStandard: StoryFn<typeof RadioGroup> = (args) => {
  const [state, setState] = useState({
    selectedValue: 'foretak',
  });

  return (
    <RadioGroup
      legend={args.legend}
      errorMessage={'Valg av type virksomhet er påkrevd.'}
      selectedValue={state.selectedValue}
      showRequiredMark
      required
      onChange={(e): void => setState({ selectedValue: e.target.value })}
    >
      <RadioGroup.Radio value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
    </RadioGroup>
  );
};

export const RadioGroupExampleStandard = {
  render: TemplateExampleStandard,
  name: 'Example Standard',
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;

const TemplateExampleHorizontal: StoryFn<typeof RadioGroup> = () => {
  const [state, setState] = useState({
    selectedValue: 'nei',
  });

  return (
    <RadioGroup
      variant={'horizontal'}
      legend={'Har du sendt inn skattemeldingen?'}
      selectedValue={state.selectedValue}
      required
      onChange={(e): void => setState({ selectedValue: e.target.value })}
    >
      <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
    </RadioGroup>
  );
};

export const RadioGroupExampleHorizontal = {
  render: TemplateExampleHorizontal,
  name: 'Example Horizontal',
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
