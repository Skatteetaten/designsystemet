import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  ReactElement,
} from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

type RequiredMegaButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'accessKey' | 'disabled' | 'type' | 'onBlur' | 'onClick' | 'onFocus'
>;

type InlineButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface InlineButtonPropsHTMLAttributes extends InlineButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export interface InlineButtonProps
  extends InlineButtonPropsHTMLAttributes,
    BaseProps {
  /** Tekst på knapp. */
  children: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  iconPosition?: Position;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
}
