import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ListElementProps extends BaseProps {
  /** Tekst eller markup for listelementet */
  children: ReactNode;
}
