import { ComponentPropsWithoutRef, RefObject } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const logoAsArr = ['a', 'div'] as const;
export type LogoAs = (typeof logoAsArr)[number];

export type LogoRefHandle = {
  logoRef: RefObject<HTMLAnchorElement | HTMLDivElement>;
};

type RequiredLogoHTMLAttributes = Pick<ComponentPropsWithoutRef<'img'>, 'alt'>;

type RequiredLinkLogoHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'a'>,
  'href'
>;

export interface TopBannerLogoProps
  extends RequiredLogoHTMLAttributes,
    RequiredLinkLogoHTMLAttributes,
    BaseProps {
  /** Egendefinert logo. Default er Skatteetatens logo. */
  logo?: string;
  /** Egendefinert logo for mobilvisning. Default er Skatteetatens logo. */
  mobileLogo?: string;
  /** HTML-tag for Logo. */
  as?: LogoAs;
}
