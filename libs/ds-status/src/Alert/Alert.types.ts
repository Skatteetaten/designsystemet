import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import { BaseProps, Status } from '@skatteetaten/ds-core-utils';

interface AlertHTMLAttributes {
  ariaLive?: ComponentPropsWithoutRef<'div'>['aria-live'];
}

type FalseValue = false;
type TrueValue = true;

type AlertShow =
  | {
      /** Bryter som kontrollerer om alerten er visuelt synlig */
      showAlert: FalseValue;
      /** Tekst eller markup for meldingen.*/
      children?: ReactNode;
    }
  | {
      /** Bryter som kontrollerer om alerten er visuelt synlig */
      showAlert: TrueValue;
      /** Tekst eller markup for meldingen */
      children: ReactNode;
    };

export type AlertProps = AlertHTMLAttributes &
  BaseProps &
  AlertShow & {
    /** Om Alert skal ha lukke-knapp */
    showCloseButton?: boolean;
    /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
    svgPath?: ReactElement;
    /** Definerer stilen */
    variant: Status;
  };

// export interface AlertProps extends AlertHTMLAttributes, BaseProps {
//   /** Bryter som kontrolerer om alerten er visuelt synlig */
//   showAlert: boolean | undefined;
//   /** Tekst eller markup for meldingen */
//   children?: ReactNode;
//   /** Om Alert skal ha lukke-knapp */
//   showCloseButton?: boolean;
//   /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
//   svgPath?: ReactElement;
//   /** Definerer stilen */
//   variant: Status;
// }
