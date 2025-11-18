import { ReactElement, Ref } from 'react';

import { BaseProps, Color, Size } from '@skatteetaten/ds-core-utils';

export type TagSize = Extract<Size, 'medium' | 'small'>;

export type TagColor = Extract<
  Color,
  'ochre' | 'forest' | 'burgundy' | 'graphite' | 'denim' | 'white'
>;

export interface TagProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Tekst for meldingen */
  children: string;
  /**
   * HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke.
   * Alternativt kan custom path sendes.
   */
  svgPath?: ReactElement<SVGPathElement>;
  /** Definerer fargen */
  color?: TagColor;
  /** Definerer størrelsen */
  size?: TagSize;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}
