import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'tabIndex'
  | 'disabled'
  | 'aria-label'
  | 'aria-hidden'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

export interface MegaButtonComponentProps extends ButtonPropsHTMLAttributes {
  /**
   * @param {boolean} external - (Default: false) Ikon som indikerer ekstern lenke.
   * @param {string} children - Tekst på knapp.
   */
  isExternal?: boolean;
  children: string;
}

export type MegaButtonProps = BaseProps & MegaButtonComponentProps;
