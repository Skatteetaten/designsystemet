import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface CardActionsCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Hovedinnholdet. */
  children: ReactNode;
}

export type CardActionsProps = CardActionsCommonProps;
