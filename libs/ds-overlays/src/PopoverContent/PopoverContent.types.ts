import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const popoverPositionArr = [
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
] as const;

export type PopoverPosition = (typeof popoverPositionArr)[number];

export interface PopoverContentProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Tekst */
  children: ReactNode;
}
