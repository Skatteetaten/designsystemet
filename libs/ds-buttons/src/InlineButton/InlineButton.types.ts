import React from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

/*
Optional takes two arguments, T is the type we want to base our optional type, 
and K represents a set of keys that are available on the type T. Partial<T> 
returns a type with all of the keys in T marked as optional. 
Surrounding the Partial<T> with a Pick<...,K> gives us a type with only the keys 
that we supplied, which we have already made optional. Using Omit<T,K> 
gives us a type without any of the keys that we have specified. By using an 
&, it will union the two types together. 
*/
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'disabled'
  | 'accessKey'
  | 'tabIndex'
  | 'onClick'
  | 'onBlur'
  | 'id'
>;
type ButtonPropsHTMLAttributes = Optional<
  ButtonHTMLAttributes,
  'disabled' | 'accessKey' | 'tabIndex' | 'onClick' | 'id'
>;

/* 
Original type
type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'disabled' | 'accessKey' | 'tabIndex' | 'onClick' | 'onBlur'
>; */

interface InlineButtonComponentProps extends ButtonPropsHTMLAttributes {
  /** Tekst på knappen. */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: React.ReactElement;
  /** Posisjonen til ikonet: left, right. */
  iconPosition?: Positon;
  /** aria-attributt som henviser til id som har tilleggsbeskrivelse */
  ariaDescribedby?: string;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

// TODO FRONT-893 - legge på flere props beskrivelser
export interface InlineButtonProps
  extends BaseProps,
    InlineButtonComponentProps {}
