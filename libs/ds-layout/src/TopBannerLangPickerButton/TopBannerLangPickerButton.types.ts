import {
  ComponentPropsWithoutRef,
  KeyboardEventHandler,
  MouseEventHandler,
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
  /** flagg som somsvarer med språket */
  flagIcon: JSX.Element;
  /** teksten på knappen */
  children: string;
}
