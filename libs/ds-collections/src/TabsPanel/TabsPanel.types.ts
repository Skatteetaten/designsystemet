import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsPanelProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innhold panelet  */
  children: ReactNode;
  /** Verdien som lenker sammen Tabs.Tab og Tabs.Panel */
  value: string;
  /** Om innholdet skal forbli i DOM når skjult (true) eller fjernes helt (false). Standard: true */
  keepMounted?: boolean;
}
