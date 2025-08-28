import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { getHelpTitleHelpSvgDefault } from '@skatteetaten/ds-core-utils';
import {
  RadioGroup,
  getRadioGroupVariantDefault,
} from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

RadioGroup.Radio.displayName = 'RadioGroup.Radio';

const meta = {
  component: RadioGroup,
  title: 'Komponenter/RadioGroup/RadioGroup',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    children: { control: false, table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasSpacing: { table: { category: category.props } },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { control: 'text', table: { category: category.props } },
    hideLegend: { table: { category: category.props } },
    legend: {
      control: 'text',
      table: { category: category.props },
    },
    shadowRootNode: { control: false, table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
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
    form: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onHelpToggle: { control: false, table: { category: category.event } },
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [type, setType] = useState<string>('foretak');
    const [svar, setSvar] = useState<string>('');
    const [svarError, setSvarError] = useState<string>('');

    return (
      <>
        <RadioGroup
          legend={'Type virksomhet'}
          selectedValue={type}
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
          errorMessage={svarError}
          required
          onBlur={
            svar
              ? undefined
              : (): void =>
                  setSvarError('Svar på om du har sendt inn skattemeldingen.')
          }
          onChange={(e): void => {
            setSvar(e.target.value);
            setSvarError('');
          }}
        >
          <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
          <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
        </RadioGroup>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
