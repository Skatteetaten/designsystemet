import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  Ref,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  FormSize,
  Prettify,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

type RequiredTextFieldHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'inputMode'
  | 'list'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'value'
  | 'pattern'
>;

type TextFieldHTMLAttributes = Partial<RequiredTextFieldHTMLAttributes>;

interface TextFieldPropsHTMLAttributes extends TextFieldHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export interface TextFieldCommonProps
  extends TextFieldPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLInputElement>;
  classNames?: Prettify<
    {
      container?: string;
      textbox?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /** Viser teller over antall tillatte tegn i feltet. Du må fortsatt håndtere faktiske tegnbegrensninger/validering ved behov. */
  characterLimit?: number;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Margin under feltet */
  hasSpacing?: boolean;
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
  /** Tusenskilletegn for heltall som bruker mellomrom eller komma som skilletegn avhengig av språket som er valgt og fjerner ikke numeriske tegn */
  thousandSeparator?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
}

export type TextFieldProps = TextFieldCommonProps & FormRequiredProps;
