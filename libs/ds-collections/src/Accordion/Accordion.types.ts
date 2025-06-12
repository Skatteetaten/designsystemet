import { ReactNode, Ref } from 'react';

import {
  BaseProps,
  Color,
  Position,
  sizeArr,
} from '@skatteetaten/ds-core-utils';

import { AccordionItem } from '../AccordionItem/AccordionItem';

export type AccordionColor =
  | Extract<Color, 'ochre' | 'forest' | 'burgundy' | 'graphite' | 'denim'>
  | 'none';

export type AccordionSize = Extract<
  (typeof sizeArr)[number],
  'small' | 'medium' | 'large'
>;

export type IconPosition = Extract<Position, 'left' | 'right'>;
export interface AccordionProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Bakgrunnsfarge */
  color?: AccordionColor;
  /** Størrelse */
  size?: AccordionSize;
  /** Posisjonen til ikonet */
  iconPosition?: IconPosition;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}

export interface AccordionComponent extends React.FC<AccordionProps> {
  Item: typeof AccordionItem;
}

export type AccordionContextProps = Exclude<
  AccordionProps,
  'children' | 'color'
>;
