import { ReactNode } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export const arrowPositionArr = [
  'topRight',
  'topLeft',
  'bottomRight',
  'bottomLeft',
] as const;
export type ArrowPosition = (typeof arrowPositionArr)[number];

export const popoverColorArr = ['forest', 'ochre', 'white'] as const;
export type PopoverColor = (typeof popoverColorArr)[number];

export interface PopoverProps extends BaseProps {
  /** Plassering av pilen */
  arrowPosition?: ArrowPosition;
  /** Tekst */
  children: ReactNode;
  /** Bakgrunnsfarge */
  color?: PopoverColor;
  /** Om autolukking skal skrus av */
  disableAutoDismiss?: boolean;
  /** Tittel */
  title?: string;
  /** Tittel as */
  titleAs?: HeadingAs;
  /** Om Popover er synlig */
  open?: boolean;
  /** Element Popover anchors to */
  anchorEl?: Element | null;
  /** Callback når Popover lukkes */
  onClose?: () => void;
}
