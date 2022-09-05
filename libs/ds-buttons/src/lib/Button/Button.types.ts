import { Component } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-devutils';
export default interface ButtonProps extends BaseProps {
  icon?: string | Component;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  knappetekst: string;
}

/* export default interface ButtonProps
  extends React.AllHTMLAttributes<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | HTMLSpanElement
  > {
  icon?: string | Component;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  knappetekst: string;
} */
