import { ChangeEvent, useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getCommonFormVariantDefault,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import { getSelectPlaceholderDefault, Select } from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Select,
  title: 'Komponenter/Select',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    defaultValue: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    placeholder: {
      table: {
        category: category.props,
        defaultValue: { summary: getSelectPlaceholderDefault() },
      },
    },
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
    hideLabel: { table: { category: category.props } },
    hidePlaceholder: { table: { category: category.props } },
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: {
      table: { category: category.props },
      description:
        'Om obligatorisk skjemafelt skal markeres med stjerne. Forutsetter at required er tatt i bruk. <strong>Deprecated:</strong> Prop skal fjernes ved lansering av neste major versjon. Les mer om mønstre for obligatoriske felt på <a href="https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/">stil og tone</a>.',
    },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
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
    onFocus: { ...htmlEventDescription },
    onHelpToggle: { control: false, table: { category: category.event } },
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [fruktOption, setFruktOption] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
      setFruktOption(Number(e.target.value));
    };

    const handleBlur = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
    };

    const onError = (e: ChangeEvent<HTMLSelectElement>): void => {
      setErrorMessage('');
      if (e.target.validity.valueMissing) {
        setErrorMessage('Fruktsort er påkrevd.');
      }
    };

    return (
      <Select
        label={'Fruktsort'}
        value={fruktOption}
        helpText={'Velg frukten du liker best.'}
        errorMessage={errorMessage}
        required
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
} satisfies Story;
Examples.parameters = exampleParameters;
