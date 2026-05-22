import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TopBannerLanguageMenuAnalyticsId } from '../analyticsIds';

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'onKeyDown'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;

interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaCurrent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
}

export interface TopBannerLangPickerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLButtonElement>;
  /** Om komponenten skal være i fokus. */
  focus?: boolean;
  /** Flagg som samsvarer med språket. */
  flagIcon: ReactNode;
  /** Navn på språket. */
  children: string;
  dataWebAnalyticsId?: TopBannerLanguageMenuAnalyticsId;
}
