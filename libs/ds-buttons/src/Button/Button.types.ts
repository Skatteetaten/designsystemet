import { FocusEventHandler, MouseEventHandler, ReactElement } from 'react';

import { BaseProps, Variant } from '@skatteetaten/ds-core-utils';

type RequiredButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement>,
  'accessKey' | 'disabled' | 'tabIndex' | 'onBlur' | 'onClick' | 'onFocus'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export interface ButtonProps extends ButtonPropsHTMLAttributes, BaseProps {
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer stilen til knappen. */
  variant?: Variant;
  /** Tekst på knapp. */
  children: string;
}
