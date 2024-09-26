import { ReactNode } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export const headingLevelArr = [1, 2, 3, 4, 5] as const;
export type HeadingLevel = (typeof headingLevelArr)[number];

export interface HeadingProps extends BaseProps {
  /** Heading tag h1-6 */
  as: HeadingAs;
  /** Tekst eller markup for heading */
  children: ReactNode;
  /** Margin under heading */
  hasSpacing?: boolean;
  /** Hierarkinivå som styrer font størrelse, line height og spacing */
  level: HeadingLevel;
  /** Lar komponenten være fokuserbar ved å sett tabIndex: -1 */
  canBeManuallyFocused?: boolean;
}
