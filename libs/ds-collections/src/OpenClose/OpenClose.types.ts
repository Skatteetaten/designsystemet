import { MouseEventHandler, ReactNode, Ref } from 'react';

import {
  BaseProps,
  HeadingAs,
  Position,
  Size,
} from '@skatteetaten/ds-core-utils';

export type OpenCloseIconPosition = Extract<Position, 'left' | 'right'>;

export type OpenCloseSize = Extract<Size, 'small' | 'medium' | 'large'>;

export interface OpenCloseProps extends BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Posisjonen til ikonet */
  iconPosition?: OpenCloseIconPosition;
  /** Tekst på knappen */
  title: string;
  /** Rendrer knappen som heading på gitt nivå */
  titleAs?: HeadingAs | 'div';
  /** Størrelse */
  size?: OpenCloseSize;
  /** Om innholdet skal vises */
  isExpanded?: boolean;
  /** Om innholdet skal vises når siden lastes? (Ukontrollert tilstand) */
  isDefaultExpanded?: boolean;
  /** Om onClick bare skal kalles når innholdet åpnes */
  isOnClickOnlyFiredOnOpen?: boolean;
  /** Om teksten på knappen skal ha understrek */
  showUnderline?: boolean;
  /**
   * Om innholdet skal forbli i DOM når skjult (true) eller fjernes helt
   * (false). Standard: false
   */
  keepMounted?: boolean;
  /** Callback når knappen OpenClose trykkes på */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Tekst eller markup som vises/skjules. */
  children?: ReactNode;
}
