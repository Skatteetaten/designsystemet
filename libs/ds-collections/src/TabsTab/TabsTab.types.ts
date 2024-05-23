import { FunctionComponent, MouseEventHandler, ReactElement } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface TabsTabProps extends BaseProps {
  /** innhold i en tab */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** unique key with reference to same key in tabs.panel */
  value: string;
  /** indeks brukt til fokusnavigering */
  index?: number;
  /** varianter */
  /* variant?: Variants; */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TabsTabComponent extends FunctionComponent<TabsTabProps> {
  /** Innhold i en tab. Tekst */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** unique key with reference to same key in tabs.panel */
  value: string;
}
