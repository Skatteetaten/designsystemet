import { ReactNode } from 'react';

import {
  BaseProps,
  Position,
  colorNamesArr,
  sizeArr,
} from '@skatteetaten/ds-core-utils';

export type AccordionColor =
  | Extract<
    (typeof colorNamesArr)[number],
    'ochre' | 'forest' | 'burgundy' | 'graphite' | 'denim'
  >
  | 'none';

export type AccordionSize = Extract<
  (typeof sizeArr)[number],
  'small' | 'medium' | 'large'
>;

export interface AccordionProps extends BaseProps {
  /** Bakgrunnsfarge */
  color?: AccordionColor;
  /** Størrelse */
  size?: AccordionSize;
  /** Posisjonen til ikonet */
  iconPosition?: Position;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
