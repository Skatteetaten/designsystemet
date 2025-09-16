import { FunctionComponent, ReactNode } from 'react';

import { TermTipContent } from './TermTipContent';
import { TermTipTerm } from './TermTipTerm';
import { PopoverPosition, PopoverProps } from '../Popover/Popover.types';

export interface TermTipProps extends Omit<PopoverProps, 'color'> {
  /** Om popup-boksen er synlig */
  isOpen?: boolean;
  /** Callback når popup-boksen lukkes */
  onClose?: () => void;
  /** Plassering av popup-boksen i forhold til teksten */
  position?: PopoverPosition;
  /** TermTip.Term og TermTip.Content */
  children?: ReactNode;
}

export interface TermTipComponent extends FunctionComponent<TermTipProps> {
  Content: typeof TermTipContent;
  Term: typeof TermTipTerm;
}
