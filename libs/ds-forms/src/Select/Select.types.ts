import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  FocusEventHandler,
  FunctionComponent,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';
import { SelectOption } from './SelectOption/SelectOption';

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

type SelectHTMLAttributes = Partial<RequiredSelectHTMLAttributes> & {
  ariaDescribedBy?: string;
};

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
  /**
   * Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for
   * skjermleser.
   */
  hideLabel?: boolean;
  /** Ledetekst */
  label: string;
  /**
   * Tilleggstekst. Må være string eller et HTML-element som er tillatt i en
   * span. Finn ut hvilke [elementer som er tillatt i en
   * span](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).
   */
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
  /** SelectOption-komponenter */
  children: ReactNode;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
  /** Tekst på feilmelding */
  errorMessage?: string;
  /**
   * Gjør feltet skrivebeskyttet. Siden select ikke støtter attributtet
   * readonly, rendres et input-element i stedet. Dette innebærer:
   * - ref er typet som HTMLSelectElement, men refererer i praksis til et
   *   HTMLInputElement. Kun medlemmer som begge elementene har (f.eks. focus,
   *   name, form og validity) kan brukes. Select-spesifikke medlemmer som
   *   options, selectedIndex og selectedOptions er undefined
   * - ref.current.value gir teksten (option.props.children f.eks. "Grønn") til valgt option,
   *   ikke verdien (option.props.value f.eks. 3)
   * - elementet har role textbox i stedet for combobox
   * - onFocus og onBlur er ikke støttet
   * - egendefinert tekst for placeholder ignoreres
   */
  readOnly?: boolean;
}

export type SelectProps = SelectCommonProps;

export interface SelectComponent extends FunctionComponent<SelectProps> {
  Option: typeof SelectOption;
}
