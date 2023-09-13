import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from '../Checkbox/Checkbox.types';
import { FieldsetProps } from '../Fieldset/Fieldset.types';

type RequiredCheckboxGroupHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled'
>;

type CheckboxGroupHTMLAttributes = Partial<RequiredCheckboxGroupHTMLAttributes>;

interface CheckboxGroupCommonProps
  extends CheckboxGroupHTMLAttributes,
    BaseProps {
  /** Checkbox-komponenter */
  children: JSX.Element | JSX.Element[];
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
  /** Title-element til hjelpeikon */
  titleHelpSvg?: FieldsetProps['titleHelpSvg'];
  /** Om obligatorisk gruppe skal markeres med stjerne */
  showRequiredMark?: FieldsetProps['showRequiredMark'];
  /* Hvis innføring av required på Group, se commit 05e7ac89ac3b132d37d18aed55a933573b3beb70 */
}

type CheckboxGroupDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om gruppen har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om gruppen har en feil */
      hasError?: never;
    };

export type CheckboxGroupProps = CheckboxGroupCommonProps &
  CheckboxGroupDiscriminatedErrorProps;

export interface CheckboxGroupComponent
  extends React.ForwardRefExoticComponent<
    CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>
  > {
  Checkbox: React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLInputElement>
  >;
}

export interface CheckboxContextProps {
  errorId?: string;
}
