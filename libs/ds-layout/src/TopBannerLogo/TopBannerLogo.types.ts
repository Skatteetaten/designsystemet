import { ComponentPropsWithoutRef, ReactElement } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export type ConditionalWrapperProps = {
  children: ReactElement;
  condition: boolean;
  wrapper: (children: ReactElement) => JSX.Element;
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
  /** Hvis logo ikke skal være en lenke. Default er false */
  noLinkLogo?: boolean;
}
