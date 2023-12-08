import {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const topBannerButtonVariantArr = ['outline', 'filled'] as const;
export type TopBannerButtonVariant = (typeof topBannerButtonVariantArr)[number];

type RequiredButtonHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onClick'
>;

type ButtonHTMLAttributes = Partial<RequiredButtonHTMLAttributes>;
interface ButtonPropsHTMLAttributes extends ButtonHTMLAttributes {
  ariaExpanded?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface TopBannerButtonProps
  extends ButtonPropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    text?: string;
  };
  /** Innhold/tekst på knappen. */
  children: ReactNode;
  /** HTML-path node. */
  svgPath: ReactElement;
  /** Hvis svgPath er meningsbærende, må ha en beskrivende tekst */
  title?: string;
  /** Definerer stilen til TopBannerButton. */
  variant?: TopBannerButtonVariant;
  /** Om pil vises */
  hasArrow?: boolean;
}
