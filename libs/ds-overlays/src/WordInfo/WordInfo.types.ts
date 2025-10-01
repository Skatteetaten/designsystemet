import { FunctionComponent, ReactNode } from 'react';

import { PopoverPosition, PopoverProps } from '../Popover/Popover.types';
import { WordInfoContent } from '../WordInfoContent/WordInfoContent';
import { WordInfoTrigger } from '../WordInfoTrigger/WordInfoTrigger';

export interface WordInfoProps extends Omit<PopoverProps, 'color'> {
  /** Om popup-boksen er synlig */
  isOpen?: boolean;
  /** Callback når popup-boksen lukkes */
  onClose?: () => void;
  /** Plassering av popup-boksen i forhold til teksten */
  position?: PopoverPosition;
  /** WordInfo.Trigger og WordInfo.Content */
  children?: ReactNode;
}

export interface WordInfoComponent extends FunctionComponent<WordInfoProps> {
  Content: typeof WordInfoContent;
  Trigger: typeof WordInfoTrigger;
}
