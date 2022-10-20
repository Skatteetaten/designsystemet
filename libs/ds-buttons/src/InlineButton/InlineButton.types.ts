import React from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'disabled'
  // TODO FRONT-930 skrive om aria-* til camelCase
  | 'accessKey'
  | 'tabIndex'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface InlineButtonComponentProps extends ButtonPropsHTMLAttributes {
  /** Tekst på knappen. */
  children: string;
  /** Ikon på knappen (Kan være et systemikon eller egendefinert). */
  svgPath?: React.ReactElement;
  /** Posisjonen til ikonet: left, right. */
  iconPosition?: Positon;
  /** aria-attributt som henviser til id som har tilleggsbeskrivelse */
  ariaDescribedby?: string;
}

// TODO FRONT-893 - legge på flere props beskrivelser
export type InlineButtonProps = BaseProps & InlineButtonComponentProps;
