import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const paragraphVariantArr = ['standard', 'ingress'] as const;
export type ParagraphVariant = (typeof paragraphVariantArr)[number];

export interface ParagraphProps extends BaseProps {
  /** Tekst og markup for avsnittet */
  children: ReactNode;
  /** Margin under avsnittet */
  hasSpacing?: boolean;
  /** Definerer stilen til avsnittet */
  variant?: ParagraphVariant;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}
