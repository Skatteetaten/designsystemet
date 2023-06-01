import { ReactElement, ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TableContextProps } from '../Table/Table.types';

export interface ExpandableRowProps extends BaseProps {
  expandButtonTitle: string;
  expandableContent: ReactNode;
  context: TableContextProps | null;
  svgPath: ReactElement;
  expandButtonAriaDescribedby?: string;
  isDesktop: boolean;
  isExpanded?: boolean;
  isExpandButtonDisabled?: boolean;
  hideIconButton?: boolean;
  onExpandClick: () => void;
  children?: ReactNode;
  classNames?: { expandedContent?: string };
}
