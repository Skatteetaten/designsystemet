import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ReactNode,
} from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from '../Checkbox/Checkbox.types';
import { FieldsetProps } from '../Fieldset/Fieldset.types';

type RequiredCheckboxGroupHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled' | 'form'
>;

type CheckboxGroupHTMLAttributes = Partial<RequiredCheckboxGroupHTMLAttributes>;

interface CheckboxGroupCommonProps
  extends CheckboxGroupHTMLAttributes,
    BaseProps {
  classNames?: Prettify<
    { errorMessage?: string } & FieldsetProps['classNames']
  >;
  /** Checkbox-komponenter */
  children: ReactNode;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Skjuler ledetekst, tilleggstekst og hjelpetekst, men er fortsatt synlig for skjermleser */
  hideLegend?: FieldsetProps['hideLegend'];
  /** Ledetekst til gruppen */
  legend: FieldsetProps['legend'];
  /** Tilleggstekst */
  description?: FieldsetProps['description'];
  /** Hjelpetekst */
  helpText?: FieldsetProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: FieldsetProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: FieldsetProps['titleHelpSvg'];
  /** Om obligatorisk gruppe skal markeres med stjerne */
  showRequiredMark?: FieldsetProps['showRequiredMark'];
  /* Hvis innføring av required på Group, se commit 05e7ac89ac3b132d37d18aed55a933573b3beb70 */

  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: FieldsetProps['onHelpToggle'];
}

export type CheckboxGroupProps = CheckboxGroupCommonProps;

export interface CheckboxGroupComponent
  extends ForwardRefExoticComponent<
    CheckboxGroupProps & RefAttributes<HTMLFieldSetElement>
  > {
  Checkbox: ForwardRefExoticComponent<
    CheckboxProps & RefAttributes<HTMLInputElement>
  >;
}

export interface CheckboxContextProps {
  errorId?: string;
}
