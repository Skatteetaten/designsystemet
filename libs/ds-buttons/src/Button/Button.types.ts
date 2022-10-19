import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'tabIndex'
  | 'disabled'
  | 'className'
  | 'accessKey'
  | 'aria-describedby'
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
  'aria-describedby'?: string;
  /** Når det klikkes på button-element  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Når button-element får focus */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** Når button-element mister focus */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonPropsHTMLAttributes, BaseProps {
  /**
   * Icon-props som sendes videre til Icon-komponent.
   * Som regel bare svgPath from sendes videre
   * Se icon-komponent for gyldige props
   */
  iconProps?: IconProps;
  /** Definerer stilen til knappen. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}
