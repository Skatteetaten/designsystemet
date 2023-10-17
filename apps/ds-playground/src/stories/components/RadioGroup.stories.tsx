import { useState } from 'react';

import {
  RadioGroup,
  radioGroupVariantArr,
  getRadioGroupVariantDefault,
} from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
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
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof RadioGroup>;

export const Preview: StoryObj<typeof RadioGroup> = {
  args: {
    legend: 'Type virksomhet',
    children: [
      <RadioGroup.Radio key={'radio1'} value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>,
      <RadioGroup.Radio key={'radio2'} value={'selskap'}>
        {'Aksjeselskap'}
      </RadioGroup.Radio>,
      <RadioGroup.Radio key={'radio3'} value={'annet'}>
        {'Annet'}
      </RadioGroup.Radio>,
    ],
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const ExampleStandard: StoryFn<typeof RadioGroup> = () => {
  const [state, setState] = useState({
    selectedValue: 'foretak',
  });

  return (
    <RadioGroup
      legend={'Type virksomhet'}
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

export const ExampleHorizontal: StoryFn<typeof RadioGroup> = () => {
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
