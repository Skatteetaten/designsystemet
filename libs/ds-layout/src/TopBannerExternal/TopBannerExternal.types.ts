import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { LogoAs } from '../TopBannerLogo/TopBannerLogo.types';
import { TopBannerSkipLinkProps } from '../TopBannerSkipLink/TopBannerSkipLink.types';
import { UserRole } from '../TopBannerUser/TopBannerUser.types';

type TopBannerLogoDiscriminatedProps =
  | {
      /** Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url. */
      logo?: never;
      /** Overskriver default logo for mobilvisning. */
      mobileLogo?: never;
      /** Overskriver default alt-tekst for logo. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.*/
      logoAltText?: never;
      /** Overskriver default URL. */
      logoURL?: never;
      /** HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. */
      logoAs?: LogoAs;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL: string;
      logoAs?: Extract<LogoAs, 'div'>;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL?: never;
      logoAs?: Extract<LogoAs, 'a'>;
    };

interface TopBannerCommonProps extends BaseProps {
  classNames?: {
    children?: string;
    firstColumn?: string;
    secondColumn?: string;
    thirdColumn?: string;
  };
  /** Overskriver default lenketekst. */
  skipLinkText?: TopBannerSkipLinkProps['children'];
  /** Overskriver default verdi til href som flytter fokus til toppen av hovedinnholdet. */
  skipLinkURL?: TopBannerSkipLinkProps['href'];
  /** Brukernavn */
  username?: string;
  /** Brukerrolle */
  userRole?: UserRole;
  /** Callback når username-knapp trykkes på. */
  onSwitchUserRole?: () => void;
  /** Callback når Logg inn-knapp trykkes på. */
  onLogIn?: () => void;
  /** Callback når Logg ut-knapp trykkes på. */
  onLogOut?: () => void;
  /** Tekst eller markup (f.eks. et søk) som blir plassert etter logo. */
  children?: ReactNode;
  /** Meny-innhold første kolonne */
  firstColumn?: ReactNode;
  /** Meny-innhold andre kolonne */
  secondColumn?: ReactNode;
  /** Meny-innhold tredje kolonne */
  thirdColumn?: ReactNode;
}

export type TopBannerExternalProps = TopBannerCommonProps &
  TopBannerLogoDiscriminatedProps;
