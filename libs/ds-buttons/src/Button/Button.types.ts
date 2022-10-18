import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'tabIndex'
  | 'disabled'
  | 'accessKey'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface ButtonComponentProps extends ButtonPropsHTMLAttributes {
  /** (Optional) Icon-props som sendes videre til Icon-komponent. */
  iconProps?: IconProps;
  /** (Optional) Default "primary" variant av type enum. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}

export type ButtonProps = BaseProps & ButtonComponentProps;
