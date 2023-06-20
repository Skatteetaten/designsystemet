import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from '../Checkbox/Checkbox.types';

type RequiredCheckboxGroupHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'fieldset'>,
  'disabled'
>;

type CheckboxGroupHTMLAttributes = Partial<RequiredCheckboxGroupHTMLAttributes>;

interface CheckboxGroupCommonProps
  extends CheckboxGroupHTMLAttributes,
    BaseProps {
  /** Checkbox-komponenter */
  children?: JSX.Element | JSX.Element[];
  /** Skjuler ledeteksten men synlig for skjermleser */
  hideLegend?: boolean;
  /** Ledetekst til gruppen */
  legend: React.ReactNode;
}

type CheckboxGroupDiscriminatedRequiredProps =
  | {
      /** Om gruppen er obligatorisk */
      required: boolean;
      /** Om obligatorisk gruppe skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      /** Om gruppen er obligatorisk */
      required?: never;
      /** Om obligatorisk gruppe skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never;
    };

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
  CheckboxGroupDiscriminatedRequiredProps &
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
