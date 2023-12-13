import {
  ComponentPropsWithoutRef,
  KeyboardEventHandler,
  MouseEventHandler,
  JSX,
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
  /** Flagg som samsvarer med språket. */
  flagIcon: JSX.Element;
  /** Navn på språket. */
  children: string;
}
