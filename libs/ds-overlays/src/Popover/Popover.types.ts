import { ReactNode } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

export const arrowLocationArr = [
  'topRight',
  'topLeft',
  'bottomRight',
  'bottomLeft',
] as const;
export type ArrowLocation = (typeof arrowLocationArr)[number];

export const popoverColorArr = ['forest', 'ochre', 'white'] as const;
export type PopoverColor = (typeof popoverColorArr)[number];

export interface PopoverProps extends BaseProps {
  /** Plassering av pilen */
  arrowLocation?: ArrowLocation;
  /** Tekst */
  children: ReactNode;
  /** Farge */
  color?: PopoverColor;
  /** Skru av autolukking */
  disableAutoDismiss?: boolean;
  /** Om Popover skal ha lukkekryss */
  showCloseButton?: boolean;
  /** Tittel */
  title?: string;
  /** Tittel as */
  titleAs?: HeadingAs;
}
