import { ComponentPropsWithoutRef } from 'react';

import { BaseProps, FormRequiredProps } from '@skatteetaten/ds-core-utils';

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
  /** Skjuler ledeteksten men synlig for skjermleser */
  hideLabel?: boolean;
}

export type CheckboxProps = CheckboxCommonProps & FormRequiredProps;
