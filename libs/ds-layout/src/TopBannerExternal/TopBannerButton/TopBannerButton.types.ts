import {
  ComponentPropsWithoutRef,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  Ref,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const topBannerButtonVariantArr = ['filled'] as const;
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
  onFocus?: FocusEventHandler<HTMLButtonElement>;
}

export interface TopBannerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLButtonElement>;
  classNames?: {
    container?: string;
    text?: string;
  };
  /** Innhold eller tekst på knapp. */
  children: ReactNode;
  /** HTML-path node. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Hvis svgPath er meningsbærende, må ha en beskrivende tekst. */
  title?: string;
  /** Definerer stilen til TopBannerButton. */
  variant?: TopBannerButtonVariant;
}
