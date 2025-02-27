import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  ReactElement,
} from 'react';

import { BaseProps, Brightness, Position } from '@skatteetaten/ds-core-utils';

export type ButtonIconPosition = Extract<Position, 'left' | 'right'>;

type RequiredMegaButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'accessKey' | 'disabled' | 'form' | 'type' | 'onBlur' | 'onClick' | 'onFocus'
>;

type InlineButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface InlineButtonPropsHTMLAttributes extends InlineButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export type InlineButtonBrightness = Extract<Brightness, 'light' | 'default'>;

export interface InlineButtonProps
  extends InlineButtonPropsHTMLAttributes,
    BaseProps {
  /** Tekst på knapp. */
  children: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  iconPosition?: ButtonIconPosition;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Om knappen skal inneholde Spinner. */
  hasSpinner?: boolean;
  /** Overskriver default tekst som leses opp av skjermleser når Spinner snurrer i knappen. */
  spinnerTitle?: string;
  /** Justerer farge slik at komponenten kan brukes på mørk bakgrunn. */
  brightness?: InlineButtonBrightness;
}
