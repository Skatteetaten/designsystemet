import { ReactNode } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

type ExpandButtonPosition = Extract<Position, 'left' | 'right'>;

export interface TableRowProps extends BaseProps {
  /** Overstyring av standard title for expandButton */
  expandButtonTitle?: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  expandButtonPosition?: ExpandButtonPosition;
  /**  Innholdet som vises når raden er utvidet  */
  expandableContent?: ReactNode;
  /**
   * Skal settes til radheader sin id dersom rad er ekspanderbar.
   *  Dette er for å tydeliggjøre hvilken rad som ekspanderes
   */
  expandButtonAriaDescribedby?: string;
  /** Avgjør om raden kan utvides */
  isExpandable?: boolean;
  /** Brukes til å styre ekspandert tilstand utenfor komponenten */
  isExpanded?: boolean;
  /** callback når raden utvides */
  onExpand?: () => void;
  /** callback når raden lukkes */
  onClose?: () => void;
  /**  Innholdet i raden  */
  children?: ReactNode;
}
