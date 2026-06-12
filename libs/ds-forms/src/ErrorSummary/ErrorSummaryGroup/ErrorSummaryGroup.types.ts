import { ReactNode, Ref } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export interface ErrorSummaryGroupProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Overskrift for grupperingen */
  title: string;
  /** Rendrer overskriften som heading på gitt nivå */
  titleAs?: HeadingAs;
  /** Liste med feil i gruppen */
  children: ReactNode;
}
