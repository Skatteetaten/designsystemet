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

export const popoverColorArr: PopoverColor[] = [
  colorNamesArr[0],
  colorNamesArr[1],
  colorNamesArr[6],
];

export interface PopoverProps {
  /** Plassering av popover */
  position?: PopoverPosition;
  /** Bakgrunnsfarge */
  color?: PopoverColor;
  /** Om autolukking skal skrus av */
  disableAutoDismiss?: boolean;
  /** Om autolukking skal skrus av på enheter med smal skjerm.  Gjelder også selv om disableAutoDismiss er satt til false. */
  disableAutoDismissOnMobile?: boolean;
  /** Om Popover er synlig */
  isOpen?: boolean;
  /** Om focus skal settes tilbake til trigger ved bruk av lukkekrysset. */
  shouldRestoreFocus?: boolean;
  /** Callback når Popover lukkes */
  onClose?: () => void;
  /** Popover.Content og Popover.Trigger */
  children?: ReactNode;
}

export interface PopoverComponent extends FunctionComponent<PopoverProps> {
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
}

export interface PopoverContextProps extends Exclude<PopoverProps, 'children'> {
  arrowRef: MutableRefObject<HTMLDivElement | null>;
  floatingData: UseFloatingReturn<HTMLButtonElement>;
  interactions: ReturnType<typeof useInteractions>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}
