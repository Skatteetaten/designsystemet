import { useState } from 'react';

import {
  RadioGroup,
  RadioGroupProps,
  radioGroupVariantArr,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/client-api';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: RadioGroup,
  title: 'Komponenter/RadioGroup/RadioGroup',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    hasError: {
      table: { category: category.props },
    },
    errorMessage: {
      table: { category: category.props },
    },
    hideLegend: {
      table: { category: category.props },
    },
    legend: {
      table: { category: category.props },
    },
    selectedValue: {
      type: 'string',
      table: { category: category.props },
    },
    variant: {
      control: 'inline-radio',
      options: [...radioGroupVariantArr],
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

const TemplateDefault: ComponentStory<typeof RadioGroup> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <RadioGroup
      selectedValue={''}
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

export const RadioGroupDefault = TemplateDefault.bind({});
RadioGroupDefault.storyName = 'Default';
RadioGroupDefault.args = {
  legend: 'Type virksomhet',
};

const TemplateExampleStandard: Story<RadioGroupProps> = () => {
  const [state, setState] = useState({
    selectedValue: 'foretak',
  });

  return (
    <RadioGroup
      legend={'Type virksomhet'}
      errorMessage={'Valg av type virksomhet er påkrevd.'}
      selectedValue={state.selectedValue}
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
