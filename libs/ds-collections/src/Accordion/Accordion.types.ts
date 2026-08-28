import { FunctionComponent, ReactNode, Ref } from 'react';

import { BaseProps, Color, Position, Size } from '@skatteetaten/ds-core-utils';

import { AccordionItem } from './AccordionItem/AccordionItem';

export type AccordionColor = Extract<
  Color,
  'white' | 'ochre' | 'forest' | 'burgundy' | 'graphite' | 'denim'
>;

export type AccordionSize = Extract<Size, 'small' | 'medium' | 'large'>;

export type AccordionIconPosition = Extract<Position, 'left' | 'right'>;
export interface AccordionProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Bakgrunnsfarge */
  color?: AccordionColor;
  /** Størrelse */
  size?: AccordionSize;
  /** Posisjonen til ikonet */
  iconPosition?: AccordionIconPosition;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}

export interface AccordionComponent extends FunctionComponent<AccordionProps> {
  Item: typeof AccordionItem;
}

export type AccordionContextProps = Exclude<
  AccordionProps,
  'children' | 'color'
>;
