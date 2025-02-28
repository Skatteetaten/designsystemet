import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps, colorNamesArr, Spacing } from '@skatteetaten/ds-core-utils';

import { CardActionsProps } from '../CardActions/CardActions.types';
import { CardAlertProps } from '../CardAlert/CardAlert.types';
import { CardContentProps } from '../CardContent/CardContent.types';

export type CardColor = Extract<
  (typeof colorNamesArr)[number],
  'white' | 'ochre' | 'forest' | 'burgundy' | 'denim' | 'graphite'
>;

export type CardSpacing =
  | Extract<Spacing, 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'mega'>
  | 'responsive';

export type CardSpacingVertical = Extract<
  Spacing,
  'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'mega'
>;
export const cardColorArr: CardColor[] = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[2],
  colorNamesArr[3],
  colorNamesArr[5],
  colorNamesArr[6],
];

export interface CardComponentCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innholdet i komponenten. */
  children: ReactNode;
  /** Farge på border og bakgrunn. */
  color?: CardColor;
  ariaLabelledBy?: ComponentPropsWithoutRef<'section'>['aria-labelledby'];
  /** Luft til innholdet i Card. For at den skal ta effekt må man bruke minst én av underkomponentene. Card.Actions, Card.Content osv. */
  spacing?: CardSpacing;
}

export type CardProps = CardComponentCommonProps;

export interface CardComponent extends React.FC<CardProps> {
  Alert: React.FC<CardAlertProps>;
  Actions: React.FC<CardActionsProps>;
  Content: React.FC<CardContentProps>;
  Header: React.FC<CardContentProps>;
}
