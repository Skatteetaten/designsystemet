import { ComponentPropsWithoutRef, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredCheckboxHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  | 'defaultChecked'
  | 'checked'
  | 'disabled'
  | 'form'
  | 'name'
  | 'value'
  | 'required'
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
>;

type CheckboxHTMLAttributes = Partial<RequiredCheckboxHTMLAttributes>;
interface CheckboxPropsHTMLAttributes extends CheckboxHTMLAttributes {
  ariaDescribedby?: string;
}

export interface CheckboxProps extends CheckboxPropsHTMLAttributes, BaseProps {
  ref?: Ref<HTMLInputElement>;
  classNames?: { errorMessage?: string; label?: string };
  /** Ledetekst til checkboxen */
  children: string;
  /** Tilleggstekst til ledeteksten */
  description?: string;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /** Skjuler ledeteksten men synlig for skjermleser */
  hideLabel?: boolean;
  /** Om checkboxen skal være skrivebeskyttet */
  readOnly?: boolean;
}
