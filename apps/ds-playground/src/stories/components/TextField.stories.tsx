import { useState } from 'react';

import {
  TextField,
  TextFieldProps,
  textFieldAsArr,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/preview-api';
import { StoryObj, Meta, StoryFn } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: TextField,
  title: 'Komponenter/TextField',
  argTypes: {
    // Props
    as: {
      table: { category: category.props },
      options: [...textFieldAsArr],
      control: 'inline-radio',
    },
    autosize: { table: { category: category.props } },
    classNames: {
      table: { category: category.props },
    },
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
  tags: ['autodocs'],
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof TextField>;
export default meta;

type Story = StoryObj<typeof meta>;
const TemplateDefaultControlled: StoryFn<typeof TextField> = (args) => {
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

export const TextFieldDefaultControlled: StoryObj<TextFieldProps> = {
  render: TemplateDefaultControlled,
  name: 'Default Controlled',

  argTypes: {
    defaultValue: { control: { disable: true } },
  },

  args: {
    label: 'Navn',
    defaultValue: undefined,
    value: '',
  },
} satisfies Story;

export const TextFieldDefaultUncontrolled: StoryObj<TextFieldProps> = {
  name: 'Default Uncontrolled',

  argTypes: {
    value: { control: { disable: true } },
  },

  args: {
    label: 'Navn',
    defaultValue: 'Kari Nordmann',
    value: undefined,
  },
};

const TemplateExample: StoryFn<typeof TextField> = (args) => {
  const [creditInput, setCreditInput] = useState('10000');

  const [postaCodeInput, setPostaCodeInput] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [infoInput, setInfoInput] = useState('');

  return (
    <form noValidate>
      <TextField
        label={'Ønsket kredittgrense'}
        className={'textField300'}
        description={'Gjennomsnittlig oppgjør for fire dager'}
        value={creditInput}
        thousandSeparator
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setCreditInput(e.target.value)
        }
      />
      <TextField
        label={'Postnummer'}
        as={'input'}
        className={'textField150'}
        hasError={error}
        errorMessage={errorMessage}
        value={postaCodeInput}
        maxLength={4}
        pattern={'\\d{4}'}
        required
        showRequiredMark
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setError(false);
          setErrorMessage('');
          if (e.target.value.length > 0 && isNaN(Number(e.target.value))) {
            setError(true);
            setErrorMessage('Postnummer kan kun inneholde tall.');
          }

          setPostaCodeInput(e.target.value);
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>): void => {
          if (e.target.validity.patternMismatch) {
            setError(true);
            setErrorMessage('Postnummer må inneholde fire tall.');
          }
          if (e.target.validity.valueMissing) {
            setError(true);
            setErrorMessage('Postnummer er påkrevd.');
          }
        }}
      />
      <TextField
        label={args.label}
        className={'textField300'}
        as={'textarea'}
        rows={4}
        value={infoInput}
        autosize
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          setInfoInput(e.target.value)
        }
      />
    </form>
  );
};

export const TextFieldExample = {
  render: TemplateExample,
  name: 'Example',
  args: {
    label: 'Andre opplysninger',
  },
  parameters: {
    controls: { disabled: true },
  },
} satisfies Story;
