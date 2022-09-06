import { Component } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';

type cmponentPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'onClick' | 'children'
>;

export interface ButtonComponentProps extends cmponentPropsHTMLAttributes {
  // TODO Hvordan ikonet skal provides må vurderes
  icon?: string | Component;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  disabled?: boolean;
}

type ButtonProps = ButtonComponentProps & BaseProps;

export default ButtonProps;
