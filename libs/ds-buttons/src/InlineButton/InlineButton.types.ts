import React from 'react';

import { BaseProps, Positon } from '@skatteetaten/ds-core-utils';

type ButtonPropsHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  'children' | 'disabled' | 'accessKey' | 'tabIndex' | 'onClick' | 'onBlur'
>;

interface InlineButtonComponentProps extends ButtonPropsHTMLAttributes {
  /** Tekst på knappen. */
  children: string;
  id?: string;
  accessKey?: string;
  tabIndex?: number;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: React.ReactElement;
  /** Posisjonen til ikonet: left, right. */
  iconPosition?: Positon;
  /** aria-attributt som henviser til id som har tilleggsbeskrivelse */
  ariaDescribedby?: string;
  /** Når det klikkes på button-element  */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Når button-element får focus */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** Når button-element mister focus */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

// TODO FRONT-893 - legge på flere props beskrivelser
export interface InlineButtonProps
  extends BaseProps,
    InlineButtonComponentProps {}
