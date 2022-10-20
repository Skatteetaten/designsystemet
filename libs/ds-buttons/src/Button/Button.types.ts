import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'tabIndex' | 'disabled' | 'onClick' | 'onBlur' | 'onFocus'
>;

export interface ButtonComponentProps extends ButtonPropsHTMLAttributes {
  iconProps?: IconProps;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  children: string;
  /** id-attribute til beskrivende (en eller flere) html-elementer */
  ariaDescribedby?: string;
}

/**
 * @param {ButtonComponentProps["variant"]} variant - (Optional) Default "primary" variant av type enum.
 * @param {IconProps} iconProps - (Optional) Icon-props som sendes videre til Icon-komponent.
 * @param {string} children - Tekst på knapp.
 */
export type ButtonProps = BaseProps & ButtonComponentProps;
