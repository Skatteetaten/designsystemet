import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { CardSpacingVertical } from '../Card/Card.types';

export interface CardActionsCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Luft over og under komponenten. Hvis den ikke er satt arves verdi fra parent Card. */
  spacingVertical?: CardSpacingVertical;
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardActionsProps = CardActionsCommonProps;
