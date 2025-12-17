import {
  Dispatch,
  FunctionComponent,
  RefObject,
  ReactNode,
  SetStateAction,
} from 'react';

import { UseFloatingReturn, useInteractions } from '@floating-ui/react';

import { Color, positionArr } from '@skatteetaten/ds-core-utils';

import { PopoverContent } from './PopoverContent/PopoverContent';
import { PopoverTrigger } from './PopoverTrigger/PopoverTrigger';

export type PopoverPosition = Extract<
  (typeof positionArr)[number],
  'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd'
>;

export const popoverColorArr = [
  'ochre',
  'forest',
  'white',
] as const satisfies readonly Color[];
export type PopoverColor = (typeof popoverColorArr)[number];

export interface PopoverProps {
  /** Plassering av popover */
  position?: PopoverPosition;
  /** Bakgrunnsfarge */
  color?: PopoverColor;
  /** Om autolukking skal skrus av */
  disableAutoDismiss?: boolean;
  /**
   * Om autolukking skal skrus av på enheter med smal skjerm. Gjelder også selv
   * om disableAutoDismiss er satt til false.
   */
  disableAutoDismissOnMobile?: boolean;
  /** Om Popover er synlig */
  isOpen?: boolean;
  /**
   * Om fokus skal settes tilbake til trigger ved bruk av lukkekrysset. Hvis
   * denne settes til false, så må fokus håndteres manuelt.
   */
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
  arrowRef: RefObject<HTMLDivElement | null>;
  floatingData: UseFloatingReturn<HTMLButtonElement>;
  interactions: ReturnType<typeof useInteractions>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}
