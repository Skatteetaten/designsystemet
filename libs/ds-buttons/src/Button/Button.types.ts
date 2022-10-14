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
  iconProps?: IconProps;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
}

/**
 * @param {ButtonComponentProps["variant"]} variant - (Optional) Default "primary" variant av type enum.
 * @param {IconProps} iconProps - (Optional) Icon-props som sendes videre til Icon-komponent.
 * @param {string} children - Tekst på knapp.
 */
export type ButtonProps = BaseProps & ButtonComponentProps;
