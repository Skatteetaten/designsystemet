import { useState } from 'react';

import {
  RadioGroup,
  RadioGroupProps,
  radioGroupVariantArr,
  getRadioGroupVariantDefault,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const legendText = 'Type virksomhet';

export default {
  component: RadioGroup,
  title: 'Komponenter/RadioGroup/RadioGroup',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      table: { category: category.props },
    },
    hideLegend: {
      table: { category: category.props },
    },
    legend: {
      table: { category: category.props },
    },
    showRequiredMark: {
      table: { category: category.props },
    },
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
  parameters: {
    version: getVersion('ds-forms'),
    docs: { source: { type: 'code' } },
  },
} as ComponentMeta<typeof RadioGroup>;

const TemplateDefaultControlled: ComponentStory<typeof RadioGroup> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <RadioGroup
      {...args}
      onChange={(e): void => {
        setArgs({ selectedValue: e.target.value });
      }}
    >
      <RadioGroup.Radio value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
    </RadioGroup>
  );
};

export const RadioGroupDefaultControlled = TemplateDefaultControlled.bind({});
RadioGroupDefaultControlled.storyName = 'Default Controlled';
RadioGroupDefaultControlled.argTypes = {
  defaultValue: { control: { disable: true } },
};
RadioGroupDefaultControlled.args = {
  legend: legendText,
  defaultValue: undefined,
  selectedValue: '',
};

const TemplateDefaultUncontrolled: ComponentStory<typeof RadioGroup> = (
  args
) => {
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

export const RadioGroupDefaultUncontrolled = TemplateDefaultUncontrolled.bind(
  {}
);
RadioGroupDefaultUncontrolled.storyName = 'Default Uncontrolled';
RadioGroupDefaultUncontrolled.argTypes = {
  selectedValue: { control: { disable: true } },
};
RadioGroupDefaultUncontrolled.args = {
  legend: legendText,
  selectedValue: undefined,
  defaultValue: 'annet',
};

const TemplateExampleStandard: Story<RadioGroupProps> = () => {
  const [state, setState] = useState({
    selectedValue: 'foretak',
  });

  return (
    <RadioGroup
      legend={legendText}
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

export const RadioGroupExampleStandard = TemplateExampleStandard.bind({});
RadioGroupExampleStandard.storyName = 'Example Standard';
RadioGroupExampleStandard.parameters = {
  controls: { disable: true },
};

const TemplateExampleHorizontal: Story<RadioGroupProps> = () => {
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

export const RadioGroupExampleHorizontal = TemplateExampleHorizontal.bind({});
RadioGroupExampleHorizontal.storyName = 'Example Horizontal';
RadioGroupExampleHorizontal.parameters = {
  controls: { disable: true },
};
