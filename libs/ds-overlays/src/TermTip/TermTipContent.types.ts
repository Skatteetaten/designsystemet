import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TermTipContentProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innhold i popup-boksen */
  children: ReactNode;
}
