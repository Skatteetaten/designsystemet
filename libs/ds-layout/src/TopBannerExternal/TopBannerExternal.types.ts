import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TopBannerSkipLinkProps } from '../TopBannerSkipLink/TopBannerSkipLink.types';
import { UsernameAs, UserRole } from '../TopBannerUser/TopBannerUser.types';

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
      /** Hvis logo ikke skal være en lenke. */
      noLinkLogo?: boolean;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL: string;
      noLinkLogo?: false;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL?: never;
      noLinkLogo: true;
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
  /** Overskriver default verdi til href som flytter fokus til main-element. */
  skipLinkURL?: TopBannerSkipLinkProps['href'];
  /** Brukernavn */
  username?: string;
  /** Brukernavn enten som button hvis bruker har flere roller eller bare tekst når bruker har en rolle */
  usernameAs?: UsernameAs;
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
