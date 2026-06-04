import { ChangeEvent, useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getAutoCompletePropDescription,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import { Select } from '@skatteetaten/ds-forms';

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
    placeholder: { table: { category: category.props } },
    description: { control: 'text', table: { category: category.props } },
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
    label: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: getHelpTitleHelpSvgDefault() },
      },
    },
    // HTML
    autoComplete: {
      control: 'text',
      table: { category: category.htmlAttribute, type: { summary: 'string' } },
      description: getAutoCompletePropDescription(),
    },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    required: { table: { category: category.htmlAttribute } },
    // Aria
    ariaDescribedBy: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onHelpToggle: { ...htmlEventDescription },
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
    const [fruitOption, setFruitOption] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      onError(e);
      setFruitOption(e.target.value);
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

    type Fruit = '' | 'banan' | 'eple' | 'kiwi' | 'pære' | 'sitron';

    return (
      <Select
        label={'Fruktsort'}
        value={fruitOption}
        helpText={'Velg frukten du liker best.'}
        errorMessage={errorMessage}
        required
        onBlur={handleBlur}
        onChange={handleChange}
      >
        <Select.Option<Fruit> value={'banan'}>{'Banan'}</Select.Option>
        <Select.Option<Fruit> value={'eple'}>{'Eple'}</Select.Option>
        <Select.Option<Fruit> value={'kiwi'}>{'Kiwi'}</Select.Option>
        <Select.Option<Fruit> value={'pære'}>{'Pære'}</Select.Option>
        <Select.Option<Fruit> value={'sitron'}>{'Sitron'}</Select.Option>
      </Select>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
