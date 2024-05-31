import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsPanelProps extends BaseProps {
  /** Innhold panelet  */
  children: ReactNode;
  /** Verdien som lenker sammen Tabs.Tab og Tabs.Panel */
  value: string;
}
