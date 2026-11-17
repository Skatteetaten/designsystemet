import { ReactElement, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ActionMenuActionsRef {
  open?: () => void;
  close?: () => void;
}

export interface TopBannerInternalActionMenuProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Ref som eksponerer funksjoner for å åpne/lukke menyen */
  menuActionsRef?: Ref<ActionMenuActionsRef>;
  /** Overskriver default tekst på meny-knappen */
  menuLabel?: string;
  /** Overskriver default meny-ikon */
  svgPath?: ReactElement<SVGPathElement>;
  /** Innhold i komponenten */
  children: ReactNode;
}
