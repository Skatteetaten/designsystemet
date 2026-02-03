import { useState, JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { isWithinInterval, format } from 'date-fns';
import { useArgs } from 'storybook/preview-api';

import {
  getAutoCompletePropDescription,
  getCommonAutoCompleteDefault,
  getCommonFormVariantDefault,
  getHelpTitleHelpSvgDefault,
} from '@skatteetaten/ds-core-utils';
import {
  DatePicker,
  getDatePickerDateFormat,
  getDatePickerPlaceholderDefault,
  Combobox,
} from '@skatteetaten/ds-forms';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: DatePicker,
  title: 'Komponenter/DatePicker',
  argTypes: {
    // Props
    classNames: { control: false, table: { category: category.props } },
    value: { table: { category: category.props }, control: 'date' },
    description: { table: { category: category.props } },
    dateFormat: {
      table: {
        category: category.props,
        defaultValue: { summary: getDatePickerDateFormat() },
      },
    },
    label: { table: { category: category.props } },
    disabledDates: { table: { category: category.props } },
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
    initialPickerDate: { table: { category: category.props }, control: 'date' },
    minDate: { table: { category: category.props }, control: 'date' },
    maxDate: { table: { category: category.props }, control: 'date' },
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
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getCommonFormVariantDefault() },
      },
    },
    // HTML
    autoComplete: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getCommonAutoCompleteDefault() },
        type: { summary: 'string' },
      },
      type: 'string',
      description: getAutoCompletePropDescription(),
    },
    disabled: { table: { category: category.htmlAttribute } },
    name: { table: { category: category.htmlAttribute } },
    placeholder: {
      table: {
        category: category.htmlAttribute,
        defaultValue: { summary: getDatePickerPlaceholderDefault() },
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
    onCalendarToggle: { table: { category: category.event } },
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
  tags: ['!dev', '!autodocs'],
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
        : new Date(args.initialPickerDate);

    const handleSelectDate = (date: Date | null): void => {
      args.onSelectDate?.(date);
      setArgs({ value: date });
    };

    return <DatePicker {...args} onSelectDate={handleSelectDate} />;
  },
} satisfies Story;

export const Enkeltdato: Story = {
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);

    return (
      <DatePicker
        label={'Dato (dd.mm.åååå)'}
        value={value}
        required
        onSelectDate={setValue}
      />
    );
  },
} satisfies Story;
Enkeltdato.parameters = exampleParameters;

export const MedMinOgMaxDato: Story = {
  name: 'Med min- og maxdato',
  render: (_args): JSX.Element => {
    const [value, setValue] = useState<Date | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const minDate = new Date(2024, 6, 1);
    const maxDate = new Date(2024, 12, 1);

    // Ved å lytte på onSelectDate får man tilgang til dato (eller null dersom datoen i feltet ikke er gyldig).
    const handleSelect = (date: Date | null): void => {
      if (date === null) {
        const errorMessage =
          inputValue !== ''
            ? 'Datoen har ikke rett format. Skriv slik: 17.05.2024.'
            : 'Dato må fylles ut eller velges.';
        setErrorMessage(errorMessage);
      } else if (!isWithinInterval(date, { start: minDate, end: maxDate })) {
        // isWithinInterval og format kommer fra date-fns
        setErrorMessage(
          `Dato må være mellom ${format(minDate, 'dd.MM.yyyy')} og ${format(
            maxDate,
            'dd.MM.yyyy'
          )}.`
        );
      } else {
        setErrorMessage('');
      }

      setValue(date);
    };
    return (
      <DatePicker
        label={'Oppstartsdato (dd.mm.åååå)'}
        value={value}
        errorMessage={errorMessage}
        maxDate={maxDate}
        minDate={minDate}
        hasSpacing
        required
        onSelectDate={handleSelect}
        onChange={(e) => setInputValue(e.target.value)}
      />
    );
  },
} satisfies Story;
MedMinOgMaxDato.parameters = exampleParameters;

export const DatoOgKlokkeslett: Story = {
  name: 'Dato og klokkeslett',
  render: (_args): JSX.Element => {
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string>('');

    // Generer klokkeslett fra 08:00 til 16:00 med 30 minutters intervall
    const timeOptions = [];
    for (let hour = 8; hour <= 16; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 16 && minute > 0) break; // Stopp ved 16:00
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeOptions.push({ value: timeString, label: timeString });
      }
    }

    return (
      <div className={'flex gapM'}>
        <DatePicker
          label={'Dato (dd.mm.åååå)'}
          value={date}
          onSelectDate={setDate}
        />
        <Combobox
          label={'Tid (tt:mm)'}
          value={time}
          options={timeOptions}
          placeholder={''}
          className={'textField150'}
          onSelectionChange={(option) => setTime(option?.value ?? '')}
        />
      </div>
    );
  },
} satisfies Story;
DatoOgKlokkeslett.parameters = exampleParameters;
