import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const textFieldVariantArr = ['standard', 'multiline'] as const;
export type TextFieldVariant = typeof textFieldVariantArr[number];

type RequiredTextFieldHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input' | 'textarea'>,
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'inputMode'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'value'
>;

type TextFieldHTMLAttributes = Partial<RequiredTextFieldHTMLAttributes>;

interface TextFieldPropsHTMLAttributes extends TextFieldHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface TextFieldCommonProps
  extends TextFieldPropsHTMLAttributes,
    BaseProps {
  /** Tilleggstekst til ledeteksten */
  description?: string;
  /** Skjuler ledeteksten men er synlig for skjermleser. */
  hideLabel?: boolean;
  /** Tykkere textbox-ramme (og ev. større padding */
  isLarge?: boolean;
  /** Ledeteksten til textbox-feltet */
  label: string;
  /** Definerer om elementet skal være <input> eller <textarea>. */
  variant?: TextFieldVariant;
}

type TextFieldDiscriminatedProps =
  | {
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: boolean;
      /** Input HTML-attributt pattern */
      pattern?: string;
      /** Textarea (multiline) HTML-attributt rows */
      rows?: never;
    }
  | {
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: never;
      /** Input HTML-attributt pattern */
      pattern?: never;
      /** Textarea (multiline) HTML-attributt rows */
      rows?: number;
    };

type TextFieldDiscriminatedRequiredProps =
  | {
      /** Om TextField er obligatorisk */
      required: boolean;
      /** Om obligatorisk TextField skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      /** Om TextField er obligatorisk */
      required?: never;
      /** Om obligatorisk TextField skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never;
    };

type TextFieldDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om TextField har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om TextField har en feil */
      hasError?: never;
    };

export type TextFieldProps = TextFieldCommonProps &
  TextFieldDiscriminatedRequiredProps &
  TextFieldDiscriminatedErrorProps &
  TextFieldDiscriminatedProps;
