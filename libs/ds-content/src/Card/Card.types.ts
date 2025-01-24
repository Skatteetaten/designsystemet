import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

import { BaseProps, colorNamesArr, Spacing } from '@skatteetaten/ds-core-utils';

import { CardActions } from '../CardActions/CardActions';
import { CardAlert } from '../CardAlert/CardAlert';
import { CardContent } from '../CardContent/CardContent';
import { CardHeader } from '../CardHeader/CardHeader';

export type CardColor = Extract<
  (typeof colorNamesArr)[number],
  'white' | 'ochre' | 'forest' | 'burgundy' | 'denim' | 'graphite'
>;

export type CardSpacing =
  | Extract<Spacing, 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'mega'>
  | 'responsive';

export const cardColorArr: CardColor[] = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[2],
  colorNamesArr[3],
  colorNamesArr[5],
  colorNamesArr[6],
];

export interface CardComponentCommonProps extends BaseProps {
  /** Innholdet i komponenten. */
  children: ReactNode;
  /** Farge på border og bakgrunn. */
  color?: CardColor;
  ariaLabelledBy?: ComponentPropsWithoutRef<'section'>['aria-labelledby'];
  /** Luft til underkomponentene Card.Actions, Card.Content osv. */
  spacing?: CardSpacing;
}

export type CardProps = CardComponentCommonProps;

export interface CardComponent
  extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> {
  Alert: typeof CardAlert;
  Actions: typeof CardActions;
  Content: typeof CardContent;
  Header: typeof CardHeader;
}
