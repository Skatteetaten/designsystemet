import { ReactNode } from 'react';

import { BaseProps, Position } from '@skatteetaten/ds-core-utils';

export interface RowProps extends BaseProps {
  /** Overstyring av standard title for expandButton */
  expandButtonTitle?: string;
  /** Posisjonen til ikonet: 'left', 'right'. */
  expandButtonPosition?: Position;
  /**  Innholdet som vises når raden er utvidet  */
  expandedContent?: ReactNode;
  /** Avgjør om raden kan utvides */
  isExpandable?: boolean;
  /** Brukes til å styre ekspandert tilstand utenfor komponenten */
  isExpanded?: boolean;
  /** callback når raden utvides eller kollapses */
  onExpandCollapse?: () => void;
  /**  Innholdet i raden  */
  children?: ReactNode;
}
