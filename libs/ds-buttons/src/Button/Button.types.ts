import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';

type ButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'tabIndex' | 'disabled' | 'accessKey' | 'onClick' | 'onBlur' | 'onFocus'
>;
// React.SVGAttributes<Record<string, never>>,
interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  /** disabled-attributt som settes på button-element */
  disabled?: boolean;
  /** accesskey-attributt som settes på button-element */
  accessKey?: string;
  tabIndex?: number;
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
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: React.ReactElement;
  /** Definerer stilen til knappen. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}
