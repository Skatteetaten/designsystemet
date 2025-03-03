import { JSX, ReactNode, Ref } from 'react';

import { LinkProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

import { FooterLink } from '../FooterLink/FooterLink';
import { FooterLogo } from '../FooterLogo/FooterLogo';

export interface FooterProps extends BaseProps {
  ref?: Ref<HTMLElement>;
  /** URL til Kontakt oss */
  contactUsURL?: string;
  /** URL til Sikkerhet og personvern */
  securityURL?: string;
  /** URL til Tilgjengelighetserklæring */
  accessibilityURL?: string;
  /** Om logo til Skatteetaten skal skjules */
  hideLogo?: boolean;
  /** Tittel til første kolonne */
  titleFirstColumn: string;
  /** Tittel til andre kolonne */
  titleSecondColumn?: string;
  /** Tittel til tredje kolonne */
  titleThirdColumn?: string;
  /** Innhold i første kolonne under Kontakt oss, Sikkerhet og personvern, Tilgjengelighetserklæring */
  firstColumn?: ReactNode;
  /** Innhold i andre kolonne */
  secondColumn?: ReactNode;
  /** Innhold i tredje kolonne */
  thirdColumn?: ReactNode;
  /**
   * Footer.LinkFirstColumn, Footer.Logo eller Footer.Link:
   * Footer.LinkFirstColumn blir plassert under de første tre lenkene i første kolonne.
   * Footer.Logo blir plassert ved siden av Skatteetatens logo.
   * Footer.Link blir plassert under logoen horisontalt.
   */
  children?: JSX.Element | JSX.Element[];
}

export interface FooterComponent extends React.FC<FooterProps> {
  Logo: typeof FooterLogo;
  Link: typeof FooterLink;
  LinkFirstColumn: React.FC<Omit<LinkProps, 'color'>>;
}
