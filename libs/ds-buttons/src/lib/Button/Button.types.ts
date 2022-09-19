import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'tabIndex'
  | 'disabled'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
>;

export interface ButtonComponentProps extends ButtonPropsHTMLAttributes {
  /**
   * @param {ButtonComponentProps.variant} variant - (Optional) Variant type.
   * @param {React.ReactNode} icon - (Default: primary) Icon-komponent.
   * @param {string} children - Tekst på knapp.
   */
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
}

export type ButtonProps = BaseProps & ButtonComponentProps;
