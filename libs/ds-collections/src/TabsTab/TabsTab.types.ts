import { ReactElement } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsTabProps extends BaseProps {
  /** Innhold i en tab */
  children: string;
  /** ssHTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Verdien som lenker sammen Tabs.Tab og Tabs.Panel sammen */
  value: string;
}
