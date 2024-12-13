import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import { BaseProps, Status } from '@skatteetaten/ds-core-utils';

interface AlertHTMLAttributes {
  ariaLive?: ComponentPropsWithoutRef<'div'>['aria-live'];
}

export type AlertBackgroundBrightness = 'default' | 'light';

type AlertShow =
  | {
      /** Bryter som kontrollerer om alerten er visuelt synlig */
      showAlert: false;
      /** Tekst eller markup for meldingen.*/
      children?: ReactNode;
    }
  | {
      /** Bryter som kontrollerer om alerten er visuelt synlig */
      showAlert: true;
      /** Tekst eller markup for meldingen */
      children: ReactNode;
    };

export type AlertProps = AlertHTMLAttributes &
  BaseProps &
  AlertShow & {
    /** Brightness på bakgrunnsfarge. 'light' bør brukes når Alert ligger på fargede bakgrunner. */
    backgroundBrightness?: AlertBackgroundBrightness;
    /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
    svgPath?: ReactElement;
    /** Definerer stilen */
    variant: Status;
    /** Callback til lukk-knapp  */
    onClose?: () => void;
  };
