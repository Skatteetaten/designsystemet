import { ReactElement, ReactNode } from 'react';

import { IconButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TableContextProps } from '../Table/Table.types';

export interface ExpandableRowProps extends BaseProps {
  expandButtonTitle: string;
  expandableContent: ReactNode;
  context: TableContextProps | null;
  svgPath: ReactElement<SVGPathElement>;
  expandButtonAriaDescribedby?: string;
  iconButtonAriaExpanded?: IconButtonProps['ariaExpanded'];
  hideIconButton?: boolean;
  isDesktop: boolean;
  isExpanded?: boolean;
  isExpandButtonDisabled?: boolean;
  onExpandClick: () => void;
  children?: ReactNode;
  classNames?: { expandedContent?: string };
}
