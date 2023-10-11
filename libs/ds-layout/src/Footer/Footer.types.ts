import { ReactNode } from 'react';

import { LinkProps } from '@skatteetaten/ds-buttons';
import { BaseProps } from '@skatteetaten/ds-core-utils';

import { FooterLogoProps } from '../FooterLogo/FooterLogo.types';

export interface FooterProps extends BaseProps {
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

export interface FooterComponent
  extends React.ForwardRefExoticComponent<
    FooterProps & React.RefAttributes<HTMLElement>
  > {
  Logo: React.ForwardRefExoticComponent<
    FooterLogoProps & React.RefAttributes<HTMLDivElement>
  >;
  Link: React.ForwardRefExoticComponent<
    Omit<LinkProps, 'color'> & React.RefAttributes<HTMLAnchorElement>
  >;
  LinkFirstColumn: React.ForwardRefExoticComponent<
    Omit<LinkProps, 'color'> & React.RefAttributes<HTMLAnchorElement>
  >;
}
