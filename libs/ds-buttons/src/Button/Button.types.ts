import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'tabIndex'
  | 'disabled'
  | 'className'
  | 'accessKey'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

type Booleanish = boolean | 'true' | 'false';

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  /** tabIndex som kan settes på button-element */
  tabIndex?: number;
  /** disabled er html-attribute */
  disabled?: boolean;
  /** Verdien appended til designsystemets stilsett for komponent */
  className?: string;
  /** accesskey er html-attribute */
  accessKey?: string;
  /** typeof Booleanish = boolean | 'true' | 'false' */
  'aria-hidden'?: Booleanish;
  /** id til tilleggsbeskrivelse */
  'aria-describedby'?: string;
  /**  id til html-element */
  'aria-labelledby'?: string;
  /** Event handler for onClick */
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
  /** "primary" er standardverdi. variant en en av  (primary | secondary | tertiary | danger). */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}
