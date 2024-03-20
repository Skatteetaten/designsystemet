import { ChangeEvent, useState, JSX } from 'react';

import {
  dsI18n,
  formArrSize,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import {
  DatePicker,
  getDatePickerDateFormat,
  TextField,
} from '@skatteetaten/ds-forms';
import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';
import { getVersion } from '../utils/version.utils';

const meta = {
  component: DatePicker,
  title: 'Komponenter/DatePicker',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
    defaultValue: { table: { category: category.props }, control: 'date' },
    value: { table: { category: category.props }, control: 'date' },
    description: { table: { category: category.props } },
    dateFormat: {
      table: {
        category: category.props,
        defaultValue: { summary: getDatePickerDateFormat() },
      },
    },
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
    initialPickerDate: { table: { category: category.props }, control: 'date' },
    minDate: { table: { category: category.props }, control: 'date' },
    maxDate: { table: { category: category.props }, control: 'date' },
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
    placeholder: {
      defaultValue: { summary: dsI18n.t('ds_forms:datepicker.TypeOrSelect') },
      table: { category: category.htmlAttribute },
    },
    readOnly: { table: { category: category.htmlAttribute } },
    required: {
      control: 'boolean',
      table: { category: category.htmlAttribute },
    },
    // Events
    onBlur: { ...htmlEventDescription },
    onChange: { ...htmlEventDescription },
    onFocus: { ...htmlEventDescription },
    onSelectDate: { table: { category: category.event } },
  },
  args: {
    label: 'Fødselsdato',
  },
  parameters: {
    version: getVersion('ds-forms'),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (_args): JSX.Element => {
    const [, setArgs] = useArgs();
    /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
     må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */

    // Preview bør alltid være controlled, siden defaultValue må settes når komponenten rendres første gang.
    _args.defaultValue = undefined;

    // value settes til null dersom undefined for å unngå advarsel om controlled/uncontrolled.
    _args.value = !_args.value ? null : new Date(_args.value);
    _args.minDate =
      _args.minDate === undefined ? undefined : new Date(_args.minDate);
    _args.maxDate =
      _args.maxDate === undefined ? undefined : new Date(_args.maxDate);
    _args.initialPickerDate =
      _args.initialPickerDate === undefined
        ? undefined
        : new Date(_args.initialPickerDate as Date);

    const handleSelectDate = (date: Date | null): void => {
      _args.onSelectDate?.(date);
      setArgs({ value: date });
    };

    return <DatePicker {..._args} onSelectDate={handleSelectDate} />;
  },
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.validity.valueMissing) {
        setError(true);
        setErrorMessage('Fødselsnummer er påkrevd.');
      }
    };

    // Ved å lytte på onSelectDate får man tilgang til dato (eller null dersom datoen i feltet ikke er gyldig).
    const handleSelect = (date: Date | null): void => {
      setValue(date);
      setError(false);
      setErrorMessage('');
    };

    return (
      <>
        <DatePicker
          label={'Fødselsdato'}
          value={value}
          errorMessage={errorMessage}
          hasError={error}
          required
          showRequiredMark
          onBlur={handleBlur}
          onSelectDate={handleSelect}
        />
        <TextField
          className={'textField300'}
          label={'Andre opplysninger'}
          as={'textarea'}
        />
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
