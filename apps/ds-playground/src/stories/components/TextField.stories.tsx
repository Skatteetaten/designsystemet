import { useState, ChangeEvent, FocusEvent, JSX } from 'react';

import {
  dsI18n,
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { TextField, getTextFieldAsDefault } from '@skatteetaten/ds-forms';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: TextField,
  title: 'Komponenter/TextField',
  argTypes: {
    // Props
    as: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTextFieldAsDefault() },
      },
    },
    variant: {
      options: [...formArrSize],
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
      },
    },
    autosize: { table: { category: category.props } },
    classNames: {
      control: false,
      table: { category: category.props },
    },
    defaultValue: {
      control: 'text',
      table: { category: category.props },
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
    label: { table: { category: category.props } },
    showRequiredMark: { table: { category: category.props } },
    thousandSeparator: { table: { category: category.props } },
    titleHelpSvg: {
      table: {
        category: category.props,
        defaultValue: { summary: dsI18n.t('Shared:shared.Help') },
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    form: { table: { category: category.htmlAttribute } },
    inputMode: {
      control: 'inline-radio',
      table: { category: category.htmlAttribute },
    },
    maxLength: { table: { category: category.htmlAttribute } },
    minLength: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    pattern: { table: { category: category.htmlAttribute } },
    placeholder: { table: { category: category.htmlAttribute } },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
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
    onHelpToggle: { table: { category: category.event } },
  },
  args: {
    label: 'Navn',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
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
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            setError(false);
            setErrorMessage('');
            if (e.target.value.length > 0 && isNaN(Number(e.target.value))) {
              setError(true);
              setErrorMessage('Postnummer kan kun inneholde tall.');
            }

            setPostaCodeInput(e.target.value);
          }}
          onBlur={(e: FocusEvent<HTMLInputElement>): void => {
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
          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
            setInfoInput(e.target.value)
          }
        />
      </form>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
