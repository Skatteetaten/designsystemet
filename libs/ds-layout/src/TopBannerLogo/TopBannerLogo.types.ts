import { MouseEventHandler, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export const logoAsArr = ['a', 'div'] as const;
export type LogoAs = (typeof logoAsArr)[number];

type TopBannerLogoDiscrimatedProps =
  | {
      /** Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url. */
      logo?: never;
      /** Overskriver default logo for mobilvisning. */
      mobileLogo?: never;
      /** Overskriver default alt-tekst for logo kun dersom logo og mobileLogo også endres. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.*/
      alt?: never;
      /** Overskriver default URL. */
      href?: never;
      /** HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. Hvis default logo endres til å ikke være en lenke, så blir logoAltText automatisk tilpasset. */
      as?: LogoAs;
    }
  | {
      /** Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url. */
      logo: string;
      /** Overskriver default logo for mobilvisning. */
      mobileLogo: string;
      /** Overskriver default alt-tekst for logo kun dersom logo og mobileLogo også endres. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.*/
      alt: string;
      /** Overskriver default URL. */
      href: string;
      /** HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. Hvis default logo endres til å ikke være en lenke, så blir logoAltText automatisk tilpasset. */
      as?: Extract<LogoAs, 'a'>;
    }
  | {
      /** Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url. */
      logo: string;
      /** Overskriver default logo for mobilvisning. */
      mobileLogo: string;
      /** Overskriver default alt-tekst for logo kun dersom logo og mobileLogo også endres. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.*/
      alt: string;
      /** Overskriver default URL. */
      href?: never;
      /** HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. Hvis default logo endres til å ikke være en lenke, så blir logoAltText automatisk tilpasset. */
      as?: Extract<LogoAs, 'div'>;
    };

interface TopBannerLogoCommonProps {
  ref?: Ref<HTMLAnchorElement | HTMLDivElement | null>;
  onClick?: MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
}

export type TopBannerLogoProps = TopBannerLogoDiscrimatedProps &
  TopBannerLogoCommonProps &
  BaseProps;
