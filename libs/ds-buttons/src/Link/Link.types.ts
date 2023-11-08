import { HTMLProps, MouseEventHandler, ReactElement } from 'react';

import { BaseProps, LinkColor } from '@skatteetaten/ds-core-utils';

type RequiredLinkHTMLAttributes = Pick<
  HTMLProps<HTMLAnchorElement>,
  'href' | 'target' | 'onClick'
>;

type LinkHTMLAttributes = Partial<RequiredLinkHTMLAttributes>;

interface LinkPropsHTMLAttributes extends LinkHTMLAttributes {
  href: string;
  target?: string;
  ariaDescribedby?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface LinkComponentCommonProps
  extends LinkPropsHTMLAttributes,
    BaseProps {
  /** Viser ikon etter lenketeksten som indikerer at lenken er til en side på et annet domene. */
  isExternal?: boolean;
  /** Farge på ikon og tekst */
  color?: LinkColor;
  /** HTML-path node. Forhåndsdefinerte paths kan importeres fra @skatteetaten/ds-icons pakke. Alternativt kan custom path sendes. */
  svgPath?: ReactElement;
  /** Lenketekst. */
  children: string;
}

export type LinkProps = LinkComponentCommonProps;
