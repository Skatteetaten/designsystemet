import { ReactElement, ReactNode, Ref } from 'react';

import { BaseProps, HeadingAs, Status } from '@skatteetaten/ds-core-utils';

export type CardAlertVariant = Extract<Status, 'info' | 'warning' | 'danger'>;

export interface CardAlertCommonProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Overskrift. */
  title: string;
  /** Heading-element h1-h6. */
  titleAs?: HeadingAs;
  /** Definerer stilen til komponenten. */
  variant?: CardAlertVariant;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Innholdet i komponenten. */
  children: ReactNode;
  /** Om innholdet skal vises */
  showAlert?: boolean;
  /**
   * Callback til lukk-knapp
   */
  onClose?: () => void;
}

export type CardAlertProps = CardAlertCommonProps;
