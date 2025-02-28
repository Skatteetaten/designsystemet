import { ReactElement } from 'react';

import { BaseProps, Size, colorNamesArr } from '@skatteetaten/ds-core-utils';

export type TagSize = Extract<Size, 'medium' | 'small'>;

export type TagColor = Extract<
  (typeof colorNamesArr)[number],
  'ochre' | 'forest' | 'burgundy' | 'graphite'
>;

export interface TagProps extends BaseProps {
  /** Tekst for meldingen */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Definerer fargen */
  color?: TagColor;
  /** Definerer størrelsen */
  size?: TagSize;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}
