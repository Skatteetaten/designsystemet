import {
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactElement,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const topBannerButtonVariantArr = [
  'standard',
  'outline',
  'filled',
] as const;
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
  /** Tekst på knappen. */
  children: string;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath: ReactElement;
  /** Hvis svgPath er meningsbærende, må ha en beskrivende tekst */
  title?: string;
  /** Definerer stilen til TopBannerButton. */
  variant?: TopBannerButtonVariant;
}
