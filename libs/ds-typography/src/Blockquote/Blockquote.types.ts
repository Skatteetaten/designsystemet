import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface BlockquoteProps extends BaseProps {
  ref?: Ref<HTMLQuoteElement>;
  /** Tekst og markup for sitatet */
  children: ReactNode;
  /** Margin under sitatet */
  hasSpacing?: boolean;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
  /**
   * Farge på border
   * - 'forest' → var(--palette-forest-50)
   * - 'ochre' → var(--palette-ochre-50)
   * - 'graphite' → var(--palette-graphite-50)
   * - 'azure' → var(--palette-azure-70)
   */
  borderColor?: 'Forest' | 'Ochre' | 'Graphite' | 'Azure';
  /** Skjul border */
  hideBorder?: boolean;
}
