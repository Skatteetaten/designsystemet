import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CardSpacing } from '../Card/Card.types';

export interface CardContentCommonProps extends BaseProps {
  /** Ekstra innhold som skal vises til høyre for hovedinnholdet. */
  rightContent?: ReactNode;
  /** Luft rundt komponenten. Hvis den ikke er satt arves verdi fra parent Card. */
  spacing?: CardSpacing;
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardContentProps = CardContentCommonProps;
