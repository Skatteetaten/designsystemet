import { ReactElement, ReactNode, RefObject } from 'react';

import { IconButtonProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

import {
  RowWithExpandButtonHandle,
  TableContextProps,
} from '../Table/Table.types';

export interface ExpandableRowProps extends BaseProps {
  ref?: RefObject<RowWithExpandButtonHandle | null>;
  expandButtonTitle: string;
  expandableContent: ReactNode;
  showExpandButtonTitle?: boolean;
  context: TableContextProps | null;
  svgPath: ReactElement<SVGPathElement>;
  expandButtonAriaDescribedby?: string;
  iconButtonAriaExpanded?: IconButtonProps['ariaExpanded'];
  hideIconButton?: boolean;
  isExpanded?: boolean;
  isExpandButtonDisabled?: boolean;
  onExpandClick: () => void;
  children?: ReactNode;
  classNames?: { expandedContent?: string };
}
