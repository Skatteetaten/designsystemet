import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  RefObject,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  FormSize,
  Prettify,
} from '@skatteetaten/ds-core-utils';

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
  | 'form'
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
  classNames?: Prettify<
    {
      container?: string;
      textbox?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /** Tekst på feilmelding */
  errorMessage?: string;
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
  /** Definerer stilen til TextField */
  variant?: FormSize;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
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
    } & Pick<ComponentPropsWithoutRef<'input'>, 'pattern' | 'list'>)
  | ({
      /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
      thousandSeparator?: never;
      pattern?: never;
      /** list er i beta. Dere må selv ta stilling til om dere vil ta den i bruk. */
      list?: never;
      /** HTML-tag for TextField: input eller textarea. */
      as: Extract<TextFieldAs, 'textarea'>;
      /** Textarea høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
      autosize?: boolean;
    } & Pick<ComponentPropsWithoutRef<'textarea'>, 'rows'>);

export type TextFieldProps = TextFieldCommonProps &
  FormRequiredProps &
  TextFieldDiscriminatedProps;
