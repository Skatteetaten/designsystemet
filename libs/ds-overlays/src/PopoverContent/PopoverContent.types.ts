import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const popoverPositionArr = [
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
] as const;

export const popoverContentAsArr = ['div', 'span'] as const;
export type PopoverContentAs = (typeof popoverContentAsArr)[number];

export type PopoverPosition = (typeof popoverPositionArr)[number];

export interface PopoverContentProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  classNames?: { contentWrapper?: string; closeButton?: string };
  /** Innhold i popup-boksen. NB! Hvis as-prop er satt til span, må innholdet være en string eller et HTML-element som er tillatt i en span. */
  children: ReactNode;
  /** HTML-element til innholdet. */
  as?: PopoverContentAs;
}
