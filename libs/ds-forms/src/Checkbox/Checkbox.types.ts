import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredCheckboxHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'defaultChecked'
  | 'checked'
  | 'disabled'
  | 'form'
  | 'name'
  | 'value'
  | 'onChange'
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
      required: boolean;
      /** Om obligatorisk checkboks skal markeres med stjerne. Forutsetter at required er tatt i bruk. */
      showRequiredMark?: boolean;
    }
  | {
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

export type CheckboxProps = CheckboxCommonProps &
  CheckboxDiscriminatedRequiredProps &
  CheckboxDiscriminatedErrorProps;
