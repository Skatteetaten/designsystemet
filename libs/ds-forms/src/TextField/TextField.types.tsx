import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  RefObject,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const textFieldAsArr = ['input', 'textarea'] as const;
export type TextFieldAs = typeof textFieldAsArr[number];

export type TextboxRefHandle = {
  textboxRef: RefObject<HTMLTextAreaElement | HTMLInputElement>;
};

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
}

type TextFieldDiscriminatedProps =
  | ({
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: boolean;
      /** HTML-tag for TextField. */
      as?: Extract<TextFieldAs, 'input'>;
      /** Textarea høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
      autosize?: never;
      rows?: never;
    } & Pick<ComponentPropsWithoutRef<'input'>, 'pattern'>)
  | ({
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: never;
      pattern?: never;
      /** HTML-tag for TextField. */
      as?: Extract<TextFieldAs, 'textarea'>;
      /** Textarea høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
      autosize?: boolean;
    } & Pick<ComponentPropsWithoutRef<'textarea'>, 'rows'>);

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
