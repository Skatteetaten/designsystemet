import React from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

// TODO FRONT-893 mangler onFocus
type RequiredMegaButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement>,
  'accessKey' | 'disabled' | 'tabIndex' | 'onBlur' | 'onClick' | 'onFocus'
>;
// TODO FRONT-930 - Pick or Partial is failing to get the correct type through - requires override in story
type InlineButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface InlineButtonPropsHTMLAttributes extends InlineButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

export interface InlineButtonProps
  extends InlineButtonPropsHTMLAttributes,
    BaseProps {
  /** Posisjonen til ikonet: 'left', 'right'. */
  iconPosition?: Positon;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: React.ReactElement;
  /** Tekst på knapp. */
  children: string;
}
