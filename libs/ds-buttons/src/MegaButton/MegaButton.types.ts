import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'tabIndex' | 'onClick' | 'onBlur' | 'onFocus' | 'accessKey'
>;

interface MegaButtonComponentCommonProps
  extends ButtonHTMLAttributes,
    BaseProps {
  /** Tabindex */
  tabIndex?: number;
}

type AnchorHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'a'>,
  'children' | 'tabIndex' | 'onClick' | 'onBlur' | 'onFocus' | 'accessKey'
>;

type MegaButtonPropsWithHref = Pick<
  React.ComponentPropsWithoutRef<'a'>,
  'href'
> & { disabled?: never };

export type MegaButtonPropsWithDisabled = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'disabled'
> & { href?: never };

export type MegaButtonPropsHTMLAttributes = MegaButtonComponentCommonProps &
  AnchorHTMLAttributes;

export interface MegaButtonComponentProps
  extends MegaButtonPropsHTMLAttributes {
  /** Ikon som indikerer ekstern lenke. */
  isExternal?: boolean;
  /** Tekst på knapp. */
  children: string;
  /** id-attribute til tilleggstekst (en eller flere) html-elementer */
  ariaDescribedby?: string;
}

export type MegaButtonProps = BaseProps &
  MegaButtonComponentProps &
  MegaButtonPropsWithDisabled &
  MegaButtonPropsWithHref;
