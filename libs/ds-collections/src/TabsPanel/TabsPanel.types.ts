import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsPanelProps extends BaseProps {
  /** innhold panelet  */
  children: ReactNode;
  /** unique key with reference to same key in tabs.tab */
  value: string;
}
