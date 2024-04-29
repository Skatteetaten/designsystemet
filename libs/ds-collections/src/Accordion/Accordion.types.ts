import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import {
  BaseProps,
  Position,
  colorNamesArr,
  sizeArr,
} from '@skatteetaten/ds-core-utils';

import { AccordionItemProps } from '../AccordionItem/AccordionItem.types';

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

type IconPosition = Extract<Position, 'left' | 'right'>;
export interface AccordionProps extends BaseProps {
  /** Bakgrunnsfarge */
  color?: AccordionColor;
  /** Størrelse */
  size?: AccordionSize;
  /** Posisjonen til ikonet */
  iconPosition?: IconPosition;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}

export interface AccordionComponent
  extends ForwardRefExoticComponent<
    AccordionProps & RefAttributes<HTMLDivElement>
  > {
  Item: ForwardRefExoticComponent<
    AccordionItemProps & RefAttributes<HTMLButtonElement>
  >;
}

export interface AccordionContextProps
  extends Exclude<AccordionProps, 'children' | 'color'> {}
