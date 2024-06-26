import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import { BaseProps, Status } from '@skatteetaten/ds-core-utils';

interface AlertHTMLAttributes {
  ariaLive?: ComponentPropsWithoutRef<'div'>['aria-live'];
}

export interface AlertProps extends AlertHTMLAttributes, BaseProps {
  /** Bryter som kontrolerer om alerten er visuelt synlig */
  showAlert: boolean | undefined;
  /** Tekst eller markup for meldingen */
  children?: ReactNode;
  /** Om Alert skal ha lukke-knapp */
  showCloseButton?: boolean;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Definerer stilen */
  variant: Status;
}
