import {
  Dispatch,
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from 'react';

import { UseFloatingReturn, useInteractions } from '@floating-ui/react';
import { colorNamesArr, positionArr } from '@skatteetaten/ds-core-utils';

import { PopoverContent } from '../PopoverContent/PopoverContent';
import { PopoverTrigger } from '../PopoverTrigger/PopoverTrigger';

export type PopoverPosition = Extract<
  (typeof positionArr)[number],
  'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd'
>;

export type PopoverColor = Extract<
  (typeof colorNamesArr)[number],
  'ochre' | 'forest' | 'white'
>;

export const popoverColorArr = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[6],
] as const;

export interface PopoverProps {
  /** Plassering av pilen */
  position?: PopoverPosition;
  /** Bakgrunnsfarge */
  color?: PopoverColor;
  /** Om autolukking skal skrus av */
  disableAutoDismiss?: boolean;
  /** Om autolukking skal skrus av på enheter med smal skjerm */
  disableAutoDismissOnMobile?: boolean;
  /** Om Popover er synlig */
  isOpen?: boolean;
  /** Popover.Content og Popover.Trigger */
  children?: ReactNode;
}

export interface PopoverComponent extends FunctionComponent<PopoverProps> {
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
}

export interface PopoverContextProps extends Exclude<PopoverProps, 'children'> {
  arrowRef: MutableRefObject<HTMLDivElement | null>;
  floatingData: UseFloatingReturn;
  interactions: ReturnType<typeof useInteractions>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}
