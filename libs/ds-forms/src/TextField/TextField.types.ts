import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  KeyboardEventHandler,
  Ref,
} from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

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

type TextFieldHTMLAttributes = Partial<RequiredTextFieldHTMLAttributes> & {
  ariaDescribedBy?: string;
};

interface TextFieldPropsHTMLAttributes extends TextFieldHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export interface TextFieldCommonProps
  extends TextFieldPropsHTMLAttributes, BaseProps {
  ref?: Ref<HTMLInputElement>;
  classNames?: Prettify<
    {
      container?: string;
      textbox?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /**
   * Viser teller over antall tillatte tegn i feltet. Du må fortsatt håndtere
   * faktiske tegnbegrensninger/validering ved behov.
   */
  characterLimit?: number;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /**
   * Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for
   * skjermleser.
   */
  hideLabel?: boolean;
  /** Input eller textarea ledetekst */
  label: string;
  /**
   * Tilleggstekst. Må være string eller et HTML-element som er tillatt i en
   * span. Finn ut hvilke [elementer som er tillatt i en
   * span](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
}

export type TextFieldProps = TextFieldCommonProps;
