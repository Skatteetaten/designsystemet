import { MouseEventHandler, ReactElement, ReactNode, Ref } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export interface AccordionItemProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
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
  /** Er skuffen åpen når siden lastes? (Ukontrollert tilstand) */
  isDefaultExpanded?: boolean;
  /** Er skuffen åpen? (Kontrollert tilstand) */
  isExpanded?: boolean;
  /**
   * HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes.
   * Egendefinert radikon vises ikke dersom overordnet Accordion-komponent er satt med iconPosition = 'left'
   */
  svgPath?: ReactElement<SVGPathElement>;
  /** Callback når AccordionItem trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om innholdet skal forbli i DOM når skjult (true) eller fjernes helt (false). Standard: true */
  keepMounted?: boolean;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
