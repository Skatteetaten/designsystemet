import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

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
  icon?: IconProps;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
}

/**
 * @param {ButtonComponentProps.variant} variant - (Optional) Default "primary" variant av type enum.
 * @param {IconProps} icon - (Optional) Icon-komponent.
 * @param {string} children - Tekst på knapp.
 */
export type ButtonProps = BaseProps & ButtonComponentProps;
