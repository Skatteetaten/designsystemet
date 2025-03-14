import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  Ref,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  Prettify,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

type RequiredTextAreaHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'textarea'>,
  | 'autoComplete'
  | 'defaultValue'
  | 'disabled'
  | 'form'
  | 'maxLength'
  | 'minLength'
  | 'name'
  | 'placeholder'
  | 'readOnly'
  | 'required'
  | 'rows'
  | 'value'
>;

type TextAreaHTMLAttributes = Partial<RequiredTextAreaHTMLAttributes>;

interface TextAreaPropsHTMLAttributes extends TextAreaHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
}

export interface TextAreaCommonProps
  extends TextAreaPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLTextAreaElement>;
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
  /** Høyden justerer seg automatisk for å tilpasse seg lengden på innholdet */
  autosize?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
}

export type TextAreaProps = TextAreaCommonProps & FormRequiredProps;
