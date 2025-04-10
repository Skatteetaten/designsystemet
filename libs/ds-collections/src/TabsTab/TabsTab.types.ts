import { ReactElement, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsTabProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Innhold i en tab */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Verdien som lenker sammen Tabs.Tab og Tabs.Panel */
  value: string;
  /** Callback som kalles ved klikk på Tab. */
  onClick?: (value: string) => void;
}
