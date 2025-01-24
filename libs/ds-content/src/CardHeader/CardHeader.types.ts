import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CardSpacingVertical } from '../Card/Card.types';

export interface CardContentCommonProps extends BaseProps {
  /** Ekstra innhold som skal vises til høyre for hovedinnholdet. */
  rightContent?: ReactNode;
  /** Luft over og under komponenten. Hvis den ikke er satt arves verdi fra parent Card. */
  spacingVertical?: CardSpacingVertical;
  classNames?: { rightContent?: string };
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardContentProps = CardContentCommonProps;
