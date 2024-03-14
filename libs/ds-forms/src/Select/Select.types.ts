import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  ForwardRefExoticComponent,
  RefAttributes,
  JSX,
} from 'react';

import {
  BaseProps,
  FormDiscriminatedRequiredProps,
  FormSize,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';
import { SelectOptionProps } from '../SelectOption/SelectOption.types';

type RequiredSelectHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'select'>,
  | 'autoComplete'
  | 'disabled'
  | 'form'
  | 'name'
  | 'required'
  | 'defaultValue'
  | 'value'
>;

type SelectHTMLAttributes = Partial<RequiredSelectHTMLAttributes>;

interface SelectPropsHTMLAttributes extends SelectHTMLAttributes {
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  onFocus?: FocusEventHandler<HTMLSelectElement>;
}

interface SelectCommonProps extends SelectPropsHTMLAttributes, BaseProps {
  classNames?: {
    container?: string;
    label?: string;
    selectContainer?: string;
    errorMessage?: string;
  };
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
  /** Overskriver default placeholder-tekst */
  placeholder?: string;
  /** Skjuler placeholder */
  hidePlaceholder?: boolean;
  /** Definerer stilen til Select */
  variant?: FormSize;
  /** SelectOption-komponenter */
  children: JSX.Element | JSX.Element[];
}

export type SelectDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om form-komponent har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om form-komponent har en feil */
      hasError?: never;
    };

export type SelectProps = SelectCommonProps &
  FormDiscriminatedRequiredProps &
  SelectDiscriminatedErrorProps;

export interface SelectComponent
  extends ForwardRefExoticComponent<
    SelectProps & RefAttributes<HTMLSelectElement>
  > {
  Option: ForwardRefExoticComponent<
    SelectOptionProps & RefAttributes<HTMLOptionElement>
  >;
}
