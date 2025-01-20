import { ReactElement, ReactNode } from 'react';

import { BaseProps, HeadingAs, Status } from '@skatteetaten/ds-core-utils';

export type CardNoteVariant = Extract<Status, 'neutral' | 'warning' | 'danger'>;

export interface CardNoteCommonProps extends BaseProps {
  /** Overskrift. */
  title?: string;
  /** Heading-element h1-h6. */
  titleAs?: HeadingAs;
  /** Definerer stilen til komponenten. */
  variant?: CardNoteVariant;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Innholdet i komponenten. */
  children: ReactNode;
  /** Om innholdet skal vises */
  showNote?: boolean;
  /**
   * Callback til lukk-knapp
   */
  onClose?: () => void;
}

export type CardNoteProps = CardNoteCommonProps;
