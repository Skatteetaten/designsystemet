import { ChangeEvent, useState } from 'react';

import {
  dsI18n,
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { Select } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Select,
  title: 'Komponenter/Select/Select',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    defaultValue: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    placeholder: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.ChooseValue') },
      },
    },
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
    hideLabel: { table: { category: category.props } },
    hidePlaceholder: { table: { category: category.props } },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
        type: { summary: formArrSize },
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    label: 'Farge',
    children: [
      <Select.Option key={'option1'} value={1}>
        {'Blå'}
      </Select.Option>,
      <Select.Option key={'option2'} value={2}>
        {'Gul'}
      </Select.Option>,
      <Select.Option key={'option3'} value={3}>
        {'Grønn'}
      </Select.Option>,
      <Select.Option key={'option4'} value={4}>
        {'Rød'}
      </Select.Option>,
    ],
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};

export const Examples: Story = {
  render: (_args) => {
    const [fruktOption, setFruktOption] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
      setFruktOption(Number(e.target.value));
    };

    const handleBlur = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
    };

    const onError = (e: ChangeEvent<HTMLSelectElement>): void => {
      setError(false);
      setErrorMessage('');
      if (e.target.validity.valueMissing) {
        setError(true);
        setErrorMessage('Fruktsort er påkrevd.');
      }
    };

    return (
      <Select
        label={'Fruktsort'}
        value={fruktOption}
        helpText={'Velg frukten du liker best.'}
        errorMessage={errorMessage}
        hasError={error}
        required
        showRequiredMark
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
        <Select.Option value={3}>{'Kiwi'}</Select.Option>
        <Select.Option value={4}>{'Pære'}</Select.Option>
        <Select.Option value={5}>{'Sitron'}</Select.Option>
      </Select>
    );
  },
};
Examples.parameters = exampleParameters;
