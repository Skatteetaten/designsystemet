import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'children'
  | 'tabIndex'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
  | 'accessKey'
>;

type AnchorHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'a'>,
  | 'children'
  | 'tabIndex'
  | 'aria-describedby'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
  | 'accessKey'
>;

type MegaButtonPropsWithHref = Pick<
  React.ComponentPropsWithoutRef<'a'>,
  'href'
> & { disabled?: never };

export type MegaButtonPropsWithDisabled = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'disabled'
> & { href?: never };

export type MegaButtonPropsHTMLAttributes = ButtonHTMLAttributes &
  AnchorHTMLAttributes;

export interface MegaButtonComponentProps
  extends MegaButtonPropsHTMLAttributes {
  /**
   * @param {boolean} external - (Default: false) Ikon som indikerer ekstern lenke.
   * @param {string} children - Tekst på knapp.
   */
  isExternal?: boolean;
  children: string;
}

export type MegaButtonProps = BaseProps &
  MegaButtonComponentProps &
  (MegaButtonPropsWithDisabled | MegaButtonPropsWithHref);
