import { ReactElement } from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-utils';

export type ChipSize = Extract<Size, 'medium' | 'small'>;

export const chipVariants = ['yellow', 'red', 'green', 'grey'] as const;

export type ChipVariant = (typeof chipVariants)[number];

export interface ChipProps extends BaseProps {
  /** Tekst for meldingen */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer fargen */
  variant?: ChipVariant;
  /** Definerer størrelsen */
  size?: ChipSize;
}
