import { Component } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';

type cmponentPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'onClick' | 'children' | 'aria-label' | 'tabIndex' | 'role' | 'aria-hidden'
>;

export interface ButtonComponentProps extends cmponentPropsHTMLAttributes {
  // TODO Hvordan ikonet skal provides må vurderes
  icon?: string | Component;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  role?: string;
}

type ButtonProps = ButtonComponentProps & BaseProps;

export default ButtonProps;
