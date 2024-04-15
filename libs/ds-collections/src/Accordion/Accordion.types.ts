import { MouseEventHandler, ReactNode } from 'react';

import {
  BaseProps,
  Position,
  colorNamesArr,
} from '@skatteetaten/ds-core-utils';

export type AccordionColor =
  | Extract<
      (typeof colorNamesArr)[number],
      'ochre' | 'forest' | 'burgundy' | 'graphite' | 'denim'
    >
  | 'none';

export interface AccordionProps extends BaseProps {
  /** Bakgrunnsfarge */
  color?: AccordionColor;
  /** Posisjonen til ikonet */
  iconPosition?: Position;
  /** Callback når Accordion trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
