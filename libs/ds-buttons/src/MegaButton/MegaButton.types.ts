import React from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type RequiredMegaButtonHTMLAttributes = Pick<
  React.HTMLProps<HTMLButtonElement | HTMLAnchorElement>,
  'accessKey' | 'tabIndex' | 'onBlur' | 'onClick' | 'onFocus'
>;

// TODO FRONT-930 - Pick or Partial is failing to get the correct type through - requires override in story
type MegaButtonHTMLAttributes = Partial<RequiredMegaButtonHTMLAttributes>;

interface MegaButtonPropsHTMLAttributes extends MegaButtonHTMLAttributes {
  ariaDescribedby?: string;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
}

export type MegaButtonDiscriminatedProp =
  | {
      /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
      href?: string;
      disabled?: never;
    }
  | {
      disabled?: boolean;
      /** Hvis det er ønskelig å vise knappen som en lenke. Setter strengen til href attributtet på lenken. */
      href?: never;
    };

interface MegaButtonComponentCommonProps
  extends MegaButtonPropsHTMLAttributes,
    BaseProps {
  /** Viser ikon som indikerer at knappen åpner en ekstern tjeneste. Brukes hvis knappen er en lenke til en side på et annet domene. */
  isExternal?: boolean;
  /** Tekst på knapp */
  children: string;
}

export type MegaButtonProps = MegaButtonComponentCommonProps &
  MegaButtonDiscriminatedProp;
