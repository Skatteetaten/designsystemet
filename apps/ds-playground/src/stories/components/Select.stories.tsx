import { ChangeEvent, useState } from 'react';

import {
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { Select } from '@skatteetaten/ds-forms';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: Select,
  title: 'Komponenter/Select/Select',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    classNames: { control: false, table: { category: category.props } },
    defaultValue: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    placeholder: {
      table: { category: category.props, defaultValue: { summary: 'Velg' } },
    },
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      table: {
        category: category.props,
      },
    },
    helpSvgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: {
        category: category.props,
        defaultValue: { summary: 'HelpSimpleSVGpath' },
      },
    },
    helpText: { table: { category: category.props } },
    hideLabel: {
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
        defaultValue: { summary: getCommonFormVariantDefault() },
        type: { summary: formArrSize },
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: {
      table: {
        category: category.props,
      },
    },
    titleHelpSvg: {
      table: { category: category.props, defaultValue: { summary: 'Hjelp' } },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: {
      table: {
        category: category.htmlAttribute,
      },
    },
    name: { table: { category: category.htmlAttribute } },
    required: {
      table: {
        category: category.htmlAttribute,
      },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof Select>;

export const Preview: StoryObj<typeof Select> = {
  args: {
    label: 'Test',
    children: (
      <>
        <Select.Option value={1}>{'Test 1'}</Select.Option>
        <Select.Option value={2}>{'Test 2'}</Select.Option>
      </>
    ),
  },
};

export const Example: StoryFn<typeof Select> = (_args) => {
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

export const ExampleSource: StoryFn<typeof Select> = () => {
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

ExampleSource.tags = ['isHidden'];
Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};
