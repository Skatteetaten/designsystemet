import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { LogoAs } from '../TopBannerLogo/TopBannerLogo.types';
import { TopBannerSkipLinkProps } from '../TopBannerSkipLink/TopBannerSkipLink.types';
import { UserRole } from '../TopBannerUserButton/TopBannerUserButton.types';

type TopBannerLogoDiscriminatedProps =
  | {
      /** Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url. */
      logo?: never;
      /** Overskriver default logo for mobilvisning. */
      mobileLogo?: never;
      /** Overskriver default alt-tekst for logo kun dersom logo og mobileLogo også endres. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.*/
      logoAltText?: never;
      /** Overskriver default URL. */
      logoURL?: never;
      /** HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. Hvis default logo endres til å ikke være en lenke, så blir logoAltText automatisk tilpasset. */
      logoAs?: LogoAs;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL: string;
      logoAs?: Extract<LogoAs, 'a'>;
    }
  | {
      logo: string;
      mobileLogo: string;
      logoAltText: string;
      logoURL?: never;
      logoAs?: Extract<LogoAs, 'div'>;
    };

interface TopBannerCommonProps extends BaseProps {
  /** Callback når Logg inn-knapp trykkes på. Om Logg inn-knappen er synlig eller ikke henger sammen med onLogIn, onLogOut og userRole. Knappen er synlig hvis userRole IKKE har en rolle og det finnes callback-funksjon for Logg inn- og Logg ut-knappen. */
  onLogIn?: () => void;
  /** Callback når Logg ut-knapp trykkes på. Om Logg ut-knappen er synlig eller ikke henger sammen med onLogIn, onLogOut og userRole. Knappen er synlig hvis userRole har en rolle og det finnes callback-funksjoner for Logg inn- og Logg ut-knappen. NB! Husk å nullstill userRole i onLogOut slik at Logg inn-knappen blir synlig. */
  onLogOut?: () => void;
  /** Hvilken rolle innloget bruker har. Hvis userRole er satt til 'meg', settes username til 'Meg selv' automatisk. Rollen som velges dikterer også hvilket ikon username-knappen får. */
  userRole?: UserRole;
  /** Teksten på username-knappen. Hva teksten skal være henger sammen med userRole. Når userRole er lik 'meg', settes username til 'Meg selv' automatisk og kan ikke overskrives. Hvis userRole er lik 'andre' eller 'virksomhet', så må username settes til hhv navnet på person det gjelder eller navnet på virksomheten. */
  username?: string;
  /** Callback når username-knapp trykkes på. Username-knappen vises når bruker er innlogget og må alltid ha en callback. Knappen kan brukes til rollebytte. Avhengig av rollen til bruker viser knappen automatisk forskjellig ikoner ut i fra den valgte rollen som userRole har fått. */
  onUsername?: () => void;
  /** Meny-innhold første kolonne. Meny-knappen blir synlig når den har innhold. */
  firstColumn?: ReactNode;
  /** Meny-innhold andre kolonne */
  secondColumn?: ReactNode;
  /** Meny-innhold tredje kolonne */
  thirdColumn?: ReactNode;
  /** Tekst eller markup som blir plassert mellom logo og innbakte menyer og knapper. */
  children?: ReactNode;
  /** Overskriver default lenketekst. */
  skipLinkText?: TopBannerSkipLinkProps['children'];
  /** Overskriver default verdi til href som flytter fokus til toppen av hovedinnholdet. */
  skipLinkURL?: TopBannerSkipLinkProps['href'];
}

export type TopBannerExternalProps = TopBannerCommonProps &
  TopBannerLogoDiscriminatedProps;
