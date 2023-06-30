import { useState } from 'react';

import {
  TextField,
  TextFieldProps,
  textFieldVariantArr,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/client-api';
import { Meta, Story } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

export default {
  component: TextField,
  title: 'Komponenter/TextField',
  argTypes: {
    // Props
    description: { table: { category: category.props } },
    errorMessage: { table: { category: category.props } },
    hasError: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    hideLabel: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    isLarge: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    label: { table: { category: category.props } },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    thousandSeparator: { table: { category: category.props } },
    variant: {
      table: { category: category.props },
      options: [...textFieldVariantArr],
      control: 'inline-radio',
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    defaultValue: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    inputMode: { table: { category: category.htmlAttribute } },
    maxLength: { table: { category: category.htmlAttribute } },
    minLength: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    pattern: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: {
        category: category.htmlAttribute,
      },
    },
    rows: { table: { category: category.htmlAttribute } },
    value: {
      control: 'text',
      table: { category: category.htmlAttribute },
    },
    // Aria
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} as Meta<TextFieldProps>;

const TemplateDefaultControlled: Story<TextFieldProps> = (args) => {
  const [, setArgs] = useArgs();

  return (
    <TextField
      {...args}
      onChange={(e): void => {
        setArgs({ value: e.target.value });
      }}
    />
  );
};
export const TextFieldDefaultControlled: Story<TextFieldProps> =
  TemplateDefaultControlled.bind({});
TextFieldDefaultControlled.storyName = 'Default Controlled';
TextFieldDefaultControlled.argTypes = {
  defaultValue: { control: { disable: true } },
};
TextFieldDefaultControlled.args = {
  label: 'Navn',
  defaultValue: undefined,
  value: '',
};

const TemplateDefaultUncontrolled: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);
export const TextFieldDefaultUncontrolled: Story<TextFieldProps> =
  TemplateDefaultUncontrolled.bind({});
TextFieldDefaultUncontrolled.storyName = 'Default Uncontrolled';
TextFieldDefaultUncontrolled.argTypes = {
  value: { control: { disable: true } },
};
TextFieldDefaultUncontrolled.args = {
  label: 'Navn',
  defaultValue: 'Kari Nordmann',
  value: undefined,
};

const TemplateExample: Story<TextFieldProps> = () => {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);

  const handleBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (e.target.validity.patternMismatch) {
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error && !e.target.validity.patternMismatch) {
      setError(false);
    } else {
      setError(true);
    }
    setUserInput(e.target.value);
  };

  return (
    <form noValidate>
      <TextField
        label={'Postnummer'}
        hasError={error}
        errorMessage={'Postnummer må ha 4 siffer.'}
        value={userInput}
        pattern={'\\d{4}'}
        required
        showRequiredMark
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </form>
  );
};
export const TextFieldExample: Story<TextFieldProps> = TemplateExample.bind({});
TextFieldExample.storyName = 'Example';
TextFieldExample.parameters = {
  controls: { disabled: true },
};
