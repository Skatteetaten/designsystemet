import { Component } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';

type buttonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'onClick'
  | 'children'
  | 'tabIndex'
  | 'disabled'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
>;

export interface ButtonComponentProps extends buttonPropsHTMLAttributes {
  // TODO Hvordan ikonet skal provides må vurderes
  icon?: string | Component;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  className?: string;
}

type ButtonProps = ButtonComponentProps & BaseProps;

export default ButtonProps;
