import { MouseEventHandler, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { TopBannerInternalActionMenu } from '../TopBannerInternalActionMenu/TopBannerInternalActionMenu';
import { TopBannerSkipLinkProps } from '../TopBannerSkipLink/TopBannerSkipLink.types';

type SkipLink = Omit<TopBannerSkipLinkProps, 'children'> & {
  text: TopBannerSkipLinkProps['children'];
};

export interface TopBannerInternalProps extends BaseProps {
  ref?: Ref<HTMLElement>;
  classNames?: {
    logo?: string;
    childrenAndUserContainer?: string;
  };
  /** Overskrift eller navn på løsning. Merk at dette ikke gir heading-element i topbanner */
  title: string;
  /** Valgfri undertittel */
  description?: string;
  /** Kan brukes til å tydeliggjøre at man er i testmiljø */
  isUnderConstruction?: boolean;
  /** Tekst i konstruksjonsbåndet */
  constructionBandTitle?: string;
  /** For å vise navn og eventuelt gruppe på saksbehandler */
  user?: string;
  /** Innhold som plasseres til venstre for innlogget brukernavn */
  children?: ReactNode;
  /**
   * skipLink.text overskriver default lenketekst.
   * skipLink.target overskriver default target verdi som fokus skal settes til når skipLink klikkes på.
   * Focus settes default til main elementet når skipLink klikkes.
   * Dersom main befinner seg i en shadow-DOM så må shadowRootNode angis for at fokus skal settes riktig.
   */
  skipLink?: SkipLink;
  /** Url på logo. Skal settes til hjem-siden/arbeidslisten i løsningen.  */
  logoHref: string;

  /** Overskriver default logo. */
  logo?: string;
  /** Kalles ved klikk på logo */
  onLogoClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Skjuler logo på mobilvisning. */
  hideLogoOnMobile?: boolean;
}

export interface TopBannerInternalComponent
  extends React.FC<TopBannerInternalProps> {
  ActionMenu: typeof TopBannerInternalActionMenu;
}
