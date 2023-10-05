import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  RefObject,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

export const textFieldAsArr = ['input', 'textarea'] as const;
export type TextFieldAs = (typeof textFieldAsArr)[number];

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
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface TextFieldCommonProps
  extends TextFieldPropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    label?: string;
    textbox?: string;
    errorMessage?: string;
  };
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Input eller textarea ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Tykkere textbox-ramme og litt mer padding hvis det er input-element */
  isLarge?: boolean;
}

type TextFieldDiscriminatedProps =
  | ({
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: boolean;
      /** HTML-tag for TextField: input eller textarea. */
      as?: Extract<TextFieldAs, 'input'>;
      /** Textarea høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
      autosize?: never;
      rows?: never;
    } & Pick<ComponentPropsWithoutRef<'input'>, 'pattern'>)
  | ({
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: never;
      pattern?: never;
      /** HTML-tag for TextField: input eller textarea. */
      as: Extract<TextFieldAs, 'textarea'>;
      /** Textarea høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
      autosize?: boolean;
    } & Pick<ComponentPropsWithoutRef<'textarea'>, 'rows'>);

type TextFieldDiscriminatedRequiredProps =
  | {
      required: boolean;
      /** Om obligatorisk TextField skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
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
