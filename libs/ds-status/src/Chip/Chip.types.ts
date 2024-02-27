import { ReactElement } from 'react';

import { BaseProps, Size, colorNamesArr } from '@skatteetaten/ds-core-utils';

export type ChipSize = Extract<Size, 'medium' | 'small'>;

export type ChipColor = Extract<
  (typeof colorNamesArr)[number],
  'ochre' | 'forest' | 'burgundy' | 'graphite'
>;

export interface ChipProps extends BaseProps {
  /** Tekst for meldingen */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer fargen */
  color?: ChipColor;
  /** Definerer størrelsen */
  size?: ChipSize;
}
