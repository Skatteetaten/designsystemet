import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredCheckboxHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'disabled' | 'onChange' | 'value'
>;

type CheckboxHTMLAttributes = Partial<RequiredCheckboxHTMLAttributes>;
interface CheckboxPropsHTMLAttributes extends CheckboxHTMLAttributes {
  ariaDescribedby?: string;
}

interface CheckboxCommonProps extends CheckboxPropsHTMLAttributes, BaseProps {
  /** Ledetekst til checkboxen */
  children: string;
  /** Tilleggstekst til ledeteksten */
  description?: string;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Om checkbox har en feil */
  hasError?: boolean;
  /** Skjuler ledeteksten men synlig for skjermleser */
  hideLabel?: boolean;
}

type CheckboxDiscriminatedRequiredProps =
  | {
      /** Om checkboksen er obligatorisk */
      required: boolean;
      /** Om obligatorisk checkboks skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
      /** Om checkboksen er obligatorisk */
      required?: never;
      /** Om obligatorisk checkboks skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: never;
    };

type CheckboxDiscriminatedErrorProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om checkbox har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om checkbox har en feil */
      hasError?: never;
    };

type CheckboxDiscriminatedCheckedProps =
  | {
      /** Om checkboksen skal være satt til checked (controlled state) */
      checked?: boolean;
      /** Om checkboksen skal være satt til default checked (uncontrolled state) */
      defaultChecked?: never;
      /** Teknisk navn på checkboksen (uncontrolled state) */
      name?: never;
    }
  | {
      /** Om checkboksen skal være satt til checked (controlled state) */
      checked?: never;
      /** Om checkboksen skal være satt til default checked (uncontrolled state) */
      defaultChecked?: boolean;
      /** Teknisk navn på checkboksen (uncontrolled state) */
      name?: string;
    };

export type CheckboxProps = CheckboxCommonProps &
  CheckboxDiscriminatedRequiredProps &
  CheckboxDiscriminatedErrorProps &
  CheckboxDiscriminatedCheckedProps;
