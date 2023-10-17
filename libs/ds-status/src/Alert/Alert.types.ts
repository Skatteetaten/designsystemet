import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import { BaseProps, Status } from '@skatteetaten/ds-core-utils';

interface AlertHTMLAttributes {
  ariaLive?: ComponentPropsWithoutRef<'div'>['aria-live'];
}

export interface AlertProps extends AlertHTMLAttributes, BaseProps {
  /** Tekst eller markup for meldingen */
  children: ReactNode;
  /** Om alerten er synlig */
  showAlert?: boolean;
  /** Om Alert skal ha lukke-knapp */
  showCloseButton?: boolean;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer stilen */
  variant: Status;
}
