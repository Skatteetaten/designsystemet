import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'tabIndex'
  | 'disabled'
  | 'className'
  | 'accessKey'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  /** tabIndex-attributt som settes på button-element */
  tabIndex?: number;
  /** disabled-attributt som settes på button-element */
  disabled?: boolean;
  /** accesskey-attributt som settes på button-element */
  accessKey?: string;
  /** aria-attributt som henviser til id som har tilleggsbeskrivelse */
  ariaDescribedby?: string;
  /** Når det klikkes på button-element  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Når button-element får focus */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** Når button-element mister focus */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonPropsHTMLAttributes, BaseProps {
  /** Ikon på knappen (Kan være et systemikon eller egendefinert). */
  svgPath?: React.ReactElement;
  /** Definerer stilen til knappen. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
  /** id-attribute til beskrivende (en eller flere) html-elementer */
  ariaDescribedby?: string;
}
