import { MouseEventHandler, ReactNode, RefObject } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TopBannerLangPickerProps } from '../TopBannerLangPicker/TopBannerLangPicker.types';
import { TopBannerLogoProps } from '../TopBannerLogo/TopBannerLogo.types';
import { TopBannerSkipLinkProps } from '../TopBannerSkipLink/TopBannerSkipLink.types';

type UserMyself = {
  role: 'meg';
};

type UserOthers = {
  role: 'andre' | 'virksomhet';
  name: string;
};

export type User = UserMyself | UserOthers;
export type TopBannerMenu = 'Lang' | 'MainMenu' | 'None';

type SkipLink = Omit<TopBannerSkipLinkProps, 'children'> & {
  text: TopBannerSkipLinkProps['children'];
};

export interface TopBannerExternalProps extends BaseProps {
  /** Hvilket språk som skal være forhåndsvalgt i språkvelgeren. */
  defaultLocale?: TopBannerLangPickerProps['defaultLocale'];
  /** Callback når et språk trykkes på i språkvelgeren. */
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  /** Om samisk språk skal vises eller ikke i språkvelgeren. Samisk er med i listen over språk som default. */
  showSami?: boolean;
  /** Callback når Logg inn-knapp trykkes på. Om Logg inn-knappen er synlig eller ikke henger sammen med onLogIn, onLogOut og userRole. Knappen er synlig hvis userRole IKKE har en rolle og det finnes callback-funksjon for Logg inn- og Logg ut-knappen. */
  onLogInClick?: MouseEventHandler<HTMLButtonElement>;
  /** Callback når Logg ut-knapp trykkes på. Om Logg ut-knappen er synlig eller ikke henger sammen med onLogIn, onLogOut og userRole. Knappen er synlig hvis userRole har en rolle og det finnes callback-funksjoner for Logg inn- og Logg ut-knappen. NB! Husk å nullstill userRole i onLogOut slik at Logg inn-knappen blir synlig. */
  onLogOutClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   Styrer rolle og navn til innloget bruker. Hvis user.role er satt til 'meg', vises 'Meg selv' automatisk på user-knappen. Rollen som velges dikterer også hvilket ikon user-knappen får.
   Hvis role ikke er lik 'meg' må user.name settes for å styre teksten på user-knappen.
   */
  user?: User;
  /** Callback når user-knapp trykkes på. User-knappen vises når bruker er innlogget og må alltid ha en callback. Knappen kan brukes til rollebytte. Avhengig av rollen til bruker viser knappen automatisk forskjellig ikoner ut i fra den valgte rollen som userRole har fått. */
  onUserClick?: MouseEventHandler<HTMLButtonElement>;
  /** Meny-innhold første kolonne. Meny-knappen blir synlig når den har innhold. */
  firstColumn?: ReactNode;
  /** Meny-innhold andre kolonne */
  secondColumn?: ReactNode;
  /** Meny-innhold tredje kolonne */
  thirdColumn?: ReactNode;
  /** Tekst eller markup som blir plassert mellom logo og innbakte menyer og knapper. */
  children?: ReactNode;
  /**
   * skipLink.text overskriver default lenketekst.
   * skipLink.target overskriver default target verdi som fokus skal settes til når skipLink klikkes på.
   * Focus settes default til main elementet når skipLink klikkes.
   * Dersom main befinner seg i en shadow-DOM så må shadowRootNode angis for at fokus skal settes riktig.
   */
  skipLink?: SkipLink;
  /**
   * logo.logo Overskriver default logo. Må også angi logo for mobilvisning, alt-tekst og url.
   * logo.mobileLogo  Overskriver default logo for mobilvisning.
   * logo.alt Overskriver default alt-tekst for logo kun dersom logo og mobileLogo også endres. NB! Alt-tekst må være tilpasset om logo er en lenke eller ikke.
   * logo.href  Overskriver default URL.
   * logo.as HTML-tag for Logo. Styrer om logo skal kodes som en lenke eller ikke. Hvis default logo endres til å ikke være en lenke, så blir logoAltText automatisk tilpasset.
   */
  logo?: TopBannerLogoProps;
  /** Legger til flere alternativer i språkvelgeren. */
  additionalLanguages?: TopBannerLangPickerProps['additionalLanguages'];
}

export interface TopBannerExternalHandle extends RefObject<HTMLHeadElement> {
  /* Åpner menyen */
  openMenu: () => void;
  /* Lukker menyen */
  closeMenu: () => void;
}
