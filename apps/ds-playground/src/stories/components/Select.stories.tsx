import { ChangeEvent, useState } from 'react';

import { formArrSize } from '@skatteetaten/ds-core-utils';
import { Select, getSelectVariantDefault } from '@skatteetaten/ds-forms';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: Select,
  title: 'Komponenter/Select/Select',
  argTypes: {
    // Props
    children: { table: { category: category.props }, control: false },
    classNames: { table: { category: category.props } },
    defaultValue: { table: { category: category.props } },
    value: { table: { category: category.props } },
    placeholder: { table: { category: category.props } },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    helpText: { table: { category: category.props } },
    hideLabel: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    hidePlaceholder: { table: { category: category.props } },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getSelectVariantDefault() },
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    titleHelpSvg: { table: { category: category.props } },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    name: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  args: {
    label: 'Test',
    children: (
      <>
        <Select.Option value={1}>{'Test 1'}</Select.Option>
        <Select.Option value={2}>{'Test 2'}</Select.Option>
      </>
    ),
  },
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectDefault = {
  render: TemplateDefault,
  name: 'Default',
} satisfies Story;

const TemplateExample: StoryFn<typeof Select> = () => {
  const [fruktOption, setFruktOption] = useState(3);

  const [fruktLargeOption, setFruktLargeOption] = useState(0);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onError = (e: ChangeEvent<HTMLSelectElement>): void => {
    setError(false);
    setErrorMessage('');
    if (e.target.validity.valueMissing) {
      setError(true);
      setErrorMessage('Fruktsort er påkrevd.');
    }
  };

  return (
    <>
      <Select
        label={'Fruktsort'}
        value={fruktOption}
        helpText={'Velg den frukten du liker best.'}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
          setFruktOption(Number(e.target.value));
        }}
      >
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
        <Select.Option value={3}>{'Kiwi'}</Select.Option>
        <Select.Option value={4}>{'Pære'}</Select.Option>
        <Select.Option value={5}>{'Sitron'}</Select.Option>
      </Select>

      <Select
        label={'Fruktsort'}
        value={fruktLargeOption}
        helpText={'Velg den frukten du liker best.'}
        errorMessage={errorMessage}
        hasError={error}
        variant={'large'}
        showRequiredMark
        required
        onBlur={(e: ChangeEvent<HTMLSelectElement>): void => {
          onError(e);
        }}
        onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
          onError(e);
          setFruktLargeOption(Number(e.target.value));
        }}
      >
        <Select.Option value={1}>{'Banan'}</Select.Option>
        <Select.Option value={2}>{'Eple'}</Select.Option>
        <Select.Option value={3}>{'Kiwi'}</Select.Option>
        <Select.Option value={4}>{'Pære'}</Select.Option>
        <Select.Option value={5}>{'Sitron'}</Select.Option>
      </Select>
    </>
  );
};
export const SelectExample = {
  render: TemplateExample,
  name: 'Example',
  parameters: {
    controls: { disable: true },
  },
} satisfies Story;
