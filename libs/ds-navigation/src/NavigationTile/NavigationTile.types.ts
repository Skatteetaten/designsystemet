import { HTMLProps, ReactElement, ReactNode } from 'react';

import { BaseProps, HeadingAs, Size } from '@skatteetaten/ds-core-utils';

type NavigationTileHTMLAttributes = Pick<
  HTMLProps<HTMLAnchorElement>,
  'target' | 'onClick'
>;

interface NavigationTilePropsHTMLAttributes
  extends NavigationTileHTMLAttributes {
  href: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
}

export type NavigationTileSize = Extract<
  Size,
  'medium' | 'large' | 'extraLarge'
>;

export interface NavigationTileComponentCommonProps
  extends NavigationTilePropsHTMLAttributes,
    BaseProps {
  classNames?: {
    container?: string;
    title?: string;
    description?: string;
  };
  /** Tittel */
  title: string | number | string[] | number[];
  /** Rendrer tittel som heading på gitt nivå */
  titleAs?: HeadingAs;
  /** Beskrivelse */
  description?: ReactNode;
  /** Viser ikon etter lenketeksten som indikerer at lenken er til en side på et annet domene. Ikon ikke synlig dersom 'size' er 'extraLarge'. */
  isExternal?: boolean;
  /** Størrelse på NavigationTile */
  size?: NavigationTileSize;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement<SVGPathElement>;
  /** Skjuler pil-ikonet. Ikonet er alltid skjult dersom 'size' er 'extraLarge' eller dersom 'isExternal' er 'true' */
  hideArrowIcon?: boolean;
  /** Om NavigationTile skal inneholde spinner. Hvis svgPath også er satt, erstatter spinneren ikonet. */
  hasSpinner?: boolean;
  /** Overskriver default tekst som leses opp av skjermleser når Spinner snurrer. */
  spinnerTitle?: string;
}

export type NavigationTileProps = NavigationTileComponentCommonProps;
