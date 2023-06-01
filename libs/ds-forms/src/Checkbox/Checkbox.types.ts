import { ComponentPropsWithoutRef } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredCheckboxHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'disabled'
  | 'required'
  | 'checked'
  | 'onChange'
  | 'value'
  | 'defaultChecked'
  | 'name'
>;

type CheckboxHTMLAttributes = Partial<RequiredCheckboxHTMLAttributes>;
interface CheckboxPropsHTMLAttributes extends CheckboxHTMLAttributes {
  ariaLabelledby?: string;
  ariaDescribedby?: string;
}

export interface CheckboxProps extends CheckboxPropsHTMLAttributes, BaseProps {
  /** Ledetekst til checkboxen */
  children: string;
  /** Tilleggstekst til ledeteksten */
  description?: string;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Om checkbox har en feil */
  hasError?: boolean;
  /** Om ledeteksten skal vises */
  hideLabel?: boolean;
}
