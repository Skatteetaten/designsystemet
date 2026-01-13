import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { Checkbox } from '../Checkbox/Checkbox';
import { FieldsetProps } from '../Fieldset/Fieldset.types';

type RequiredCheckboxGroupHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled' | 'form'
>;

type CheckboxGroupHTMLAttributes = Partial<RequiredCheckboxGroupHTMLAttributes>;

interface CheckboxGroupCommonProps
  extends CheckboxGroupHTMLAttributes,
    BaseProps {
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
  /** Tilleggstekst */
  description?: FieldsetProps['description'];
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /** Hjelpetekst */
  helpText?: FieldsetProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: FieldsetProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: FieldsetProps['titleHelpSvg'];
  /**
   * Om obligatorisk gruppe skal markeres med stjerne.
   *
   * @deprecated Prop skal fjernes ved lansering av neste major versjon. Les mer
   *   om mønstre for obligatoriske felt på [stil og
   *   tone](https://www.skatteetaten.no/stilogtone/monster/interaksjon/obligatoriske-felt/).
   */
  showRequiredMark?: FieldsetProps['showRequiredMark'];
  /* Hvis innføring av required på Group, se commit 05e7ac89ac3b132d37d18aed55a933573b3beb70 */

  /** Om checkboxene skal være skrivebeskyttet */
  readOnly?: boolean;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: FieldsetProps['onHelpToggle'];
}

export type CheckboxGroupProps = CheckboxGroupCommonProps;

export interface CheckboxGroupComponent extends React.FC<CheckboxGroupProps> {
  Checkbox: typeof Checkbox;
}

export interface CheckboxContextProps {
  errorId?: string;
  readOnly?: boolean;
}
