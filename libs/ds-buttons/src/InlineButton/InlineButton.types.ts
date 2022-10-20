import React from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'disabled'
  // TODO FRONT-930 skrive om aria-* til camelCase
  | 'aria-describedby'
  | 'accessKey'
  | 'tabIndex'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface InlineButtonComponentProps extends ButtonPropsHTMLAttributes {
  children: string;
  svgPath?: React.ReactElement;
  iconPosition?: Positon;
}

// TODO FRONT-893 - legge på flere props beskrivelser
/**
 * @param {string} children - Tekst på knappen.
 * @param {ReactElement} svgPath - (Optional) Ikon på knappen (Kan være et systemikon eller egendefinert).
 * @param {string} iconPosition - (Optional) Posisjonen til ikonet: left, right. (Default: left)
 * @param {tabIndex} tabIndex - (Optional)
 */
export type InlineButtonProps = BaseProps & InlineButtonComponentProps;
