import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  MouseEventHandler,
  ReactElement,
} from 'react';

import { BaseProps, Brightness, Size } from '@skatteetaten/ds-core-utils';

type RequiredIconButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'accessKey' | 'disabled' | 'type' | 'onBlur' | 'onClick' | 'onFocus'
>;

type IconButtonHTMLAttributes = Partial<RequiredIconButtonHTMLAttributes>;
interface IconButtonPropsHTMLAttributes extends IconButtonHTMLAttributes {
  title: string;
  ariaDescribedby?: string;
  ariaExpanded?: boolean;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export type IconButtonBrightness = Extract<Brightness, 'light' | 'default'>;

export interface IconButtonProps
  extends IconButtonPropsHTMLAttributes,
    BaseProps {
  /** Om knappen har en ramme/sirkel. */
  isOutlined?: boolean;
  /** Størrelse på knappen. */
  size?: Extract<Size, 'extraSmall' | 'small' | 'medium' | 'large'>;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath: ReactElement<SVGPathElement>;
  /** Om knappen skal inneholde Spinner. */
  hasSpinner?: boolean;
  /** Overskriver default tekst som leses opp av skjermleser når Spinner snurrer i knappen. */
  spinnerTitle?: string;
  /** Justerer farge slik at komponenten kan brukes på mørk bakgrunn. */
  brightness?: IconButtonBrightness;
}
