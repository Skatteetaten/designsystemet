import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'tabIndex' | 'onClick' | 'onBlur' | 'onFocus' | 'accessKey'
>;

type AnchorHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'a'>,
  'tabIndex' | 'onClick' | 'onBlur' | 'onFocus' | 'accessKey'
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
  /** id-attribute til tilleggstekst (en eller flere) html-elementer */
  ariaDescribedby?: string;
  /** Ikon som indikerer ekstern lenke */
  isExternal?: boolean;
  /** Tekst på knapp */
  children: string;
}

// TODO Endre fra typescript intersection slik at de dukker opp riktig under Storybook Docs.
export type MegaButtonProps = BaseProps &
  MegaButtonComponentProps &
  (MegaButtonPropsWithDisabled | MegaButtonPropsWithHref);
