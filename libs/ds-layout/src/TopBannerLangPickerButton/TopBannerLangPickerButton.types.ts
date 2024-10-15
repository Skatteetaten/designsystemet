import {
  ComponentPropsWithoutRef,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'onKeyDown'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaCurrent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
}

export interface TopBannerLangPickerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  /**  Om komponenten skal være i fokus. */
  focus?: boolean;
  /** Flagg som samsvarer med språket. */
  flagIcon: ReactNode;
  /** Navn på språket. */
  children: string;
}
