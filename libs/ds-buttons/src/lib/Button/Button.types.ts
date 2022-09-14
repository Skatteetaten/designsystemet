import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';

type buttonPropsHTMLAttributes = Pick<
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

interface ButtonComponentProps extends buttonPropsHTMLAttributes {
  /**
   * @param {ButtonComponentProps.variant} variant Optional variant type
   * @param {React.ReactNode} icon Icon-komponent. Default: primary
   * @param {string} children - Tekst på knapp
   */
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
}

type ButtonProps = ButtonComponentProps & BaseProps;

export default ButtonProps;
