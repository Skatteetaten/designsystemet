import { MouseEventHandler, ReactElement, ReactNode } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export interface AccordionItemProps extends BaseProps {
  /** Tekst på knappen */
  // TODO: bør vi lage en stringish-type?
  title: string | string[] | number;
  /** Undertittel */
  subtitle?: string | string[] | number;
  /** Rendrer knappen som heading på gitt nivå */
  titleAs?: HeadingAs;
  /** Viser en kompakt versjon med mindre tekst og avstander */
  isExpanded?: boolean;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Callback når AccordionItem trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
