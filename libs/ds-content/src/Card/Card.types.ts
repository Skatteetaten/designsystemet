import { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';

import { BaseProps, colorNamesArr, Spacing } from '@skatteetaten/ds-core-utils';

import { CardActions } from '../CardActions/CardActions';
import { CardAlert } from '../CardAlert/CardAlert';
import { CardContent } from '../CardContent/CardContent';
import { CardHeader } from '../CardHeader/CardHeader';

export type CardSpacing =
  | Extract<Spacing, 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'mega'>
  | 'responsive';

export const cardColorArr = colorNamesArr.filter(
  (color) =>
    color === 'white' ||
    color === 'ochre' ||
    color === 'forest' ||
    color === 'burgundy' ||
    color === 'denim' ||
    color === 'graphite'
);
export type CardColor = (typeof cardColorArr)[number];

export interface CardComponentCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innholdet i komponenten. */
  children: ReactNode;
  /** Farge på border og bakgrunn. */
  color?: CardColor;
  ariaLabelledBy?: ComponentPropsWithoutRef<'section'>['aria-labelledby'];
  /** Luft til innholdet i Card. For at den skal ta effekt må man bruke minst én av underkomponentene: Card.Header, Card.Content, Card.Actions. */
  spacing?: CardSpacing;
}

export type CardProps = CardComponentCommonProps;

export interface CardComponent extends React.FC<CardProps> {
  Alert: typeof CardAlert;
  Actions: typeof CardActions;
  Content: typeof CardContent;
  Header: typeof CardHeader;
}
