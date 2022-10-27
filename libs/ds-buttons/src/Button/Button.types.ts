import React from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';

type RequiredButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement>,
  'accessKey' | 'disabled' | 'tabIndex' | 'onBlur' | 'onClick' | 'onFocus'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface ButtonProps extends ButtonPropsHTMLAttributes, BaseProps {
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: React.ReactElement;
  /** Definerer stilen til knappen. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}
