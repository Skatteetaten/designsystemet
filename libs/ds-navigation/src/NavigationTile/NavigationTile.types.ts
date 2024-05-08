import { HTMLProps, MouseEventHandler, ReactElement } from 'react';

import { BaseProps, HeadingAs, Size } from '@skatteetaten/ds-core-utils';

type RequiredNavigationTileHTMLAttributes = Pick<
  HTMLProps<HTMLAnchorElement>,
  'href' | 'target' | 'onClick'
>;

type NavigationTileHTMLAttributes =
  Partial<RequiredNavigationTileHTMLAttributes>;

interface NavigationTilePropsHTMLAttributes
  extends NavigationTileHTMLAttributes {
  href: string;
  target?: string;
  ariaDescribedby?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
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
  description?: string | number | string[] | number[];
  /** Viser ikon etter lenketeksten som indikerer at lenken er til en side på et annet domene. Ikon ikke synlig dersom 'size' er 'extraLarge'. */
  isExternal?: boolean;
  /** Størrelse på NavigationTile */
  size?: NavigationTileSize;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Skjuler pil-ikonet. Ikonet er alltid skjult dersom 'size' er 'extraLarge' eller dersom 'isExternal' er 'true' */
  hideArrowIcon?: boolean;
}

export type NavigationTileProps = NavigationTileComponentCommonProps;
