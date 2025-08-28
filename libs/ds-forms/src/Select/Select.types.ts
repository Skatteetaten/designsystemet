import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  ReactNode,
  Ref,
} from 'react';

import {
  BaseProps,
  FormRequiredProps,
  FormSize,
  Prettify,
} from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';
import { SelectOption } from '../SelectOption/SelectOption';

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
  ref?: Ref<HTMLSelectElement>;
  classNames?: Prettify<
    {
      container?: string;
      label?: string;
      selectContainer?: string;
      errorMessage?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Margin under komponenten */
  hasSpacing?: boolean;
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
  children: ReactNode;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Tekst på feilmelding */
  errorMessage?: string;
}

export type SelectProps = SelectCommonProps & FormRequiredProps;

export interface SelectComponent extends React.FC<SelectProps> {
  Option: typeof SelectOption;
}
