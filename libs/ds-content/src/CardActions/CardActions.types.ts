import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CardSpacing } from '../Card/Card.types';

export interface CardActionsCommonProps extends BaseProps {
  /** Luft rundt komponenten. Hvis den ikke er satt arves verdi fra parent Card. */
  spacing?: CardSpacing;
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardActionsProps = CardActionsCommonProps;
