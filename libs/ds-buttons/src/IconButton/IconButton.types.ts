import React from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-utils';

type IconButtonHTMLAttributes = Pick<
  React.ComponentPropsWithoutRef<'button'>,
  | 'className'
  | 'tabIndex'
  | 'accessKey'
  | 'disabled'
  | 'onClick'
  | 'onBlur'
  | 'onFocus'
>;

interface IconButtonPropsHTMLAttributes extends IconButtonHTMLAttributes {
  /** Metode for å pynte knappen. */
  className?: string;
  /** For å overstyre rekkefølgen for tastaturnavigering. */
  tabIndex?: number;
  /** For å tilordne en tastatursnarvei som aktiverer knappen. */
  accessKey?: string;
  /** Om knappen er tilgjengelig eller ikke. */
  disabled?: boolean;
  /** Beskrivelse av knappen/ikonet for skjermlesere. */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /** Beskrivelse av knappen/ikonet for skjermlesere. */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  /** Beskrivelse av knappen/ikonet for skjermlesere. */
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  /** Beskrivelse av knappen/ikonet for skjermlesere. */
  ariaLabel: string;
  /** Detaljert beskrivelse av knappen for skjermlesere som henviser til id-en til elementet med beskrivelsen. */
  ariaDescribedBy?: string;
}

export interface IconButtonProps
  extends IconButtonPropsHTMLAttributes,
    BaseProps {
  /** Ikon som skal vises. */
  svgPath: React.ReactElement;
  /** Størrelse på knappen. */
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  /** Om knappen har en ramme/sirkel. */
  isOutlined?: boolean;
}
