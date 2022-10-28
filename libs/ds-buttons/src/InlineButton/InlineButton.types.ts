import { FocusEventHandler, MouseEventHandler, ReactElement } from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

type RequiredMegaButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement>,
  'accessKey' | 'disabled' | 'tabIndex' | 'onBlur' | 'onClick' | 'onFocus'
>;

type InlineButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface InlineButtonPropsHTMLAttributes extends InlineButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export interface InlineButtonProps
  extends InlineButtonPropsHTMLAttributes,
    BaseProps {
  /** Posisjonen til ikonet: 'left', 'right'. */
  iconPosition?: Positon;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Tekst på knapp. */
  children: string;
}
