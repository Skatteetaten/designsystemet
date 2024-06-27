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

const meta = {
  component: DatePicker,
  title: 'Komponenter/DatePicker',
  argTypes: {
    // Props
    classNames: { table: { category: category.props } },
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
      },
    },
    // HTML
    autoComplete: { table: { category: category.htmlAttribute } },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: dsI18n.t('ds_forms:datepicker.TypeOrSelect') },
      },
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
    onHelpToggle: { table: { category: category.event } },
    onSelectDate: { table: { category: category.event } },
  },
  args: {
    label: 'Fødselsdato',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args): JSX.Element => {
    const [, setArgs] = useArgs();
    /* Fordi date control konverterer datoen til et UNIX-tidsstempel når verdien endres,
     må den konverteres til et date objekt. Dette er en kjent begrensing som vil bli fikset
    en gang i fremtiden står det i Storybook sin dokumentasjon over Controls. */

    // value settes til null dersom undefined for å unngå advarsel om controlled/uncontrolled.
    args.value = !args.value ? null : new Date(args.value);
    args.minDate =
      args.minDate === undefined ? undefined : new Date(args.minDate);
    args.maxDate =
      args.maxDate === undefined ? undefined : new Date(args.maxDate);
    args.initialPickerDate =
      args.initialPickerDate === undefined
        ? undefined
        : new Date(args.initialPickerDate as Date);

    const handleSelectDate = (date: Date | null): void => {
      args.onSelectDate?.(date);
      setArgs({ value: date });
    };

    return <DatePicker {...args} onSelectDate={handleSelectDate} />;
  },
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.validity.valueMissing) {
        setErrorMessage('Fødselsnummer er påkrevd.');
      }
    };

    // Ved å lytte på onSelectDate får man tilgang til dato (eller null dersom datoen i feltet ikke er gyldig).
    const handleSelect = (date: Date | null): void => {
      setValue(date);
      setErrorMessage('');
    };
    return (
      <>
        <DatePicker
          label={'Fødselsdato'}
          value={value}
          errorMessage={errorMessage}
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
