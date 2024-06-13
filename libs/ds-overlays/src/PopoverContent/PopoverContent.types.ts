import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const popoverPositionArr = [
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
] as const;

export type PopoverPosition = (typeof popoverPositionArr)[number];

export const popoverColorArr = ['forest', 'ochre', 'white'] as const;
export type PopoverColor = (typeof popoverColorArr)[number];

export interface PopoverContentProps extends BaseProps {
  /** Tekst */
  children: ReactNode;
}
