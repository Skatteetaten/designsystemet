import { ReactNode, Ref } from 'react';

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
  Item: React.FC<AccordionItemProps>;
}

export type AccordionContextProps = Exclude<
  AccordionProps,
  'children' | 'color'
>;
