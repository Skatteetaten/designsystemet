import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaCurrent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TopBannerLangPickerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  /** flagg som somsvarer med språket */
  flagIcon: JSX.Element;
  /** teksten på knappen */
  children: string;
}
