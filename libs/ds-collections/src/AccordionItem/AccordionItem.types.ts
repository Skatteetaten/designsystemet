import { MouseEventHandler, ReactElement, ReactNode } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export interface AccordionItemProps extends BaseProps {
  classNames?: {
    container?: string;
    title?: string;
    subtitle?: string;
    content?: string;
  };
  /** Tekst på knappen */
  title: string;
  /** Undertittel */
  subtitle?: string;
  /** Rendrer knappen som heading på gitt nivå */
  titleAs?: HeadingAs;
  /** Er skuffen åpen siden lastes? (Ukontrollert tilstand) */
  isDefaultExpanded?: boolean;
  /** Er skuffen åpen? (Kontrollert tilstand) */
  isExpanded?: boolean;
  /**
   * HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes.
   * Egendefinert radikon vises ikke dersom overordnet Accordion-komponent er satt med iconPosition = 'left'
   */
  svgPath?: ReactElement;
  /** Callback når AccordionItem trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
