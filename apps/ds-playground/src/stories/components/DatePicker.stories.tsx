import { ChangeEvent, useState } from 'react';

import {
  dsI18n,
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { DatePicker } from '../../../../../libs/ds-forms/src/DatePicker/DatePicker';
import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: DatePicker,
  title: 'Komponenter/DatePicker (under utvikling)',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
    defaultValue: { table: { category: category.props } },
    description: { table: { category: category.props } },
    label: { table: { category: category.props } },
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
    hideLabel: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
        type: { summary: formArrSize },
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    value: { table: { category: category.htmlAttribute } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    label: 'Fødselsdato',
    defaultValue: undefined,
    value: '',
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args) => {
    const [value, setValue] = useState('');
    return (
      <DatePicker
        label={'Fødselsdato'}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => {
          setValue(e.target.value);
        }}
      />
    );
  },
};
Examples.parameters = exampleParameters;
