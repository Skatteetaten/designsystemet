import {
  ComponentPropsWithoutRef,
  FunctionComponent,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { Checkbox } from '../Checkbox/Checkbox';
import { FieldsetProps } from '../Fieldset/Fieldset.types';

type RequiredCheckboxGroupHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled' | 'form'
>;

type CheckboxGroupHTMLAttributes =
  Partial<RequiredCheckboxGroupHTMLAttributes> & {
    ariaDescribedBy?: string;
  };

interface CheckboxGroupCommonProps
  extends CheckboxGroupHTMLAttributes, BaseProps {
  ref?: Ref<HTMLFieldSetElement>;
  classNames?: Prettify<
    { errorMessage?: string } & FieldsetProps['classNames']
  >;
  /** Checkbox-komponenter */
  children: ReactNode;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /**
   * Skjuler ledetekst, tilleggstekst og hjelpetekst, men er fortsatt synlig for
   * skjermleser
   */
  hideLegend?: FieldsetProps['hideLegend'];
  /** Ledetekst til gruppen */
  legend: FieldsetProps['legend'];
  /**
   * Tilleggstekst. Typen er ReactNode for å kunne støtte språkmarkering av
   * begreper, for eksempel med et span-element med lang-attributt.
   */
  description?: FieldsetProps['description'];
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /** Hjelpetekst */
  helpText?: FieldsetProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: FieldsetProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: FieldsetProps['titleHelpSvg'];
  /** Om checkboxene skal være skrivebeskyttet */
  readOnly?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: FieldsetProps['onHelpToggle'];
}

export type CheckboxGroupProps = CheckboxGroupCommonProps;

export interface CheckboxGroupComponent extends FunctionComponent<CheckboxGroupProps> {
  Checkbox: typeof Checkbox;
}

export interface CheckboxContextProps {
  errorId?: string;
  readOnly?: boolean;
}
