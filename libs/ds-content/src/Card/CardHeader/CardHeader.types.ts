import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';
export interface CardContentCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Ekstra innhold som skal vises til høyre for hovedinnholdet. */
  rightContent?: ReactNode;
  classNames?: { rightContent?: string };
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardContentProps = CardContentCommonProps;
