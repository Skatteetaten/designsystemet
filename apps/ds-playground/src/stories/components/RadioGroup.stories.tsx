import { useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  RadioGroup,
  getRadioGroupVariantDefault,
} from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
RadioGroup.Radio = { ...RadioGroup.Radio };
RadioGroup.Radio.displayName = 'RadioGroup.Radio';

const meta = {
  component: RadioGroup,
  title: 'Komponenter/RadioGroup/RadioGroup',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLegend: { table: { category: category.props } },
    legend: {
      control: 'text',
      table: { category: category.props },
    },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    variant: {
      table: {
        category: category.props,
        defaultValue: { summary: getRadioGroupVariantDefault() },
      },
    },
    defaultValue: { control: 'text', table: { category: category.props } },
    selectedValue: { control: 'text', table: { category: category.props } },
    // HTML
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    // Events
    onChange: { ...htmlEventDescription },
  },
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
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args) => {
    const [type, setType] = useState<string>('foretak');
    const [svar, setSvar] = useState<string>('');

    return (
      <>
        <RadioGroup
          legend={'Type virksomhet'}
          errorMessage={'Valg av type virksomhet er påkrevd.'}
          selectedValue={type}
          showRequiredMark
          required
          onChange={(e): void => setType(e.target.value)}
        >
          <RadioGroup.Radio value={'foretak'}>
            {'Enkeltpersonsforetak'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'selskap'}>
            {'Aksjeselskap'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
        </RadioGroup>

        <RadioGroup
          variant={'horizontal'}
          legend={'Har du sendt inn skattemeldingen?'}
          selectedValue={svar}
          required
          onChange={(e): void => setSvar(e.target.value)}
        >
          <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
          <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
        </RadioGroup>
      </>
    );
  },
};
Examples.parameters = exampleParameters;
