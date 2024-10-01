import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  FormSize,
  Prettify,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

type RequiredDatePickerHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'autoComplete' | 'disabled' | 'name' | 'placeholder' | 'readOnly' | 'required'
>;

type DatePickerHTMLAttributes = Partial<RequiredDatePickerHTMLAttributes>;

interface DatePickerPropsHTMLAttributes extends DatePickerHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export interface DatePickerProps
  extends DatePickerPropsHTMLAttributes,
    BaseProps,
    FormRequiredProps {
  classNames?: Prettify<
    {
      container?: string;
      dateContainer?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Definerer stilen til DatePicker */
  variant?: FormSize;
  /** Hvilken dato som skal være satt. */
  value?: Date | null;
  /** Initielt uthevet dato. (Hvis value har en dato, så blir den datoen uthevet istedenfor.) */
  initialPickerDate?: Date;
  /** Liste med deaktiverte datoer. for eksempel helligdager. */
  disabledDates?: Date[];
  /** Minste tillatte dato */
  minDate?: Date;
  /** Maksimal tillatte dato */
  maxDate?: Date;
  /**
   * Overskriver default datoformat for input-felt. Formater som kan brukes: https://date-fns.org/v3.3.1/docs/parse.
   *
   * I tillegg til det valgte formatet, kan brukeren manuelt skrive inn dato på følgende formater som formateres automatisk i onBlur:
   * 'dd.MM.yy',
   * 'dd/MM/yy',
   * 'dd-MM-yy',
   * 'dd.MM.yyyy',
   * 'dd/MM/yyyy',
   * 'dd-MM-yyyy',
   * 'ddMM',
   * 'ddMMyy',
   * 'ddMMyyyy',
   */
  dateFormat?: string;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Callback som kalles når dato-verdien endres. */
  onSelectDate?: (date: Date | null) => void;
}
