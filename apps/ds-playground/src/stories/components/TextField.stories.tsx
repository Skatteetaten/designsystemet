import { useState } from 'react';

import { formArrSize } from '@skatteetaten/ds-core-utils';
import {
  TextField,
  textFieldAsArr,
  getTextFieldVariantDefault,
} from '@skatteetaten/ds-forms';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { getVersion } from '../utils/version.utils';

export default {
  component: TextField,
  title: 'Komponenter/TextField',
  argTypes: {
    // Props
    as: {
      table: { category: category.props },
      options: [...textFieldAsArr],
      control: 'inline-radio',
    },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTextFieldVariantDefault() },
      },
    },
    autosize: { table: { category: category.props } },
    classNames: {
      table: { category: category.props },
    },
    defaultValue: { table: { category: category.props } },
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
    label: { table: { category: category.props } },
    showRequiredMark: {
      control: 'boolean',
      table: {
        category: category.props,
      },
    },
    thousandSeparator: { table: { category: category.props } },
    titleHelpSvg: { table: { category: category.props } },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
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
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof TextField>;

export const Preview: StoryObj<typeof TextField> = {
  args: {
    label: 'Navn',
  },
};

export const Example: StoryFn<typeof TextField> = (_args) => {
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
        label={'Andre opplysninger'}
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

Example.parameters = {
  controls: {
    exclude: /.*/,
  },
};

export const ExampleSource: StoryFn<typeof TextField> = () => {
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
        label={'Andre opplysninger'}
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

ExampleSource.tags = ['isHidden'];
ExampleSource.parameters = {
  controls: {
    exclude: /.*/,
  },
};
