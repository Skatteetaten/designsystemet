import {
  ComponentPropsWithoutRef,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const topBannerButtonVariantArr = ['outline', 'filled'] as const;
export type TopBannerButtonVariant = (typeof topBannerButtonVariantArr)[number];

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick' | 'onKeyDown'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;
interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaExpanded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
}

export interface TopBannerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    text?: string;
  };
  /** Innhold eller tekst på knapp. */
  children: ReactNode;
  /** HTML-path node. */
  svgPath?: ReactElement;
  /** Hvis svgPath er meningsbærende, må ha en beskrivende tekst. */
  title?: string;
  /** Definerer stilen til TopBannerButton. */
  variant?: TopBannerButtonVariant;
}
