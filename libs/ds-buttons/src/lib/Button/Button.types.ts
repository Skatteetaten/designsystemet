import { Component } from 'react';

export default interface ButtonProps
  extends React.AllHTMLAttributes<
    HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | HTMLSpanElement
  > {
  icon?: string | Component;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  knappetekst: string;
}
