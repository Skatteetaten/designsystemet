import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ActionMenuActionsRef {
  open?: () => void;
  close?: () => void;
}

export interface TopBannerInternalActionMenuProps extends BaseProps {
  /** Ref som eksponerer funksjoner får å åpne/lukke menyen. */
  menuActionsRef?: Ref<ActionMenuActionsRef>;
  /** Innhold i komponenten */
  children: ReactNode;
}
