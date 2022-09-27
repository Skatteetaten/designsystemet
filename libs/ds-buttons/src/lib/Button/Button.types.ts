import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'tabIndex'
  | 'disabled'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface ButtonComponentProps extends ButtonPropsHTMLAttributes {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
}

/**
 * @param {ButtonComponentProps.variant} variant - (Optional) Default "primary" variant av type enum.
 * @param {React.ReactNode} icon - (Optional) Icon-komponent.
 * @param {string} children - Tekst på knapp.
 */
export type ButtonProps = BaseProps & ButtonComponentProps;
