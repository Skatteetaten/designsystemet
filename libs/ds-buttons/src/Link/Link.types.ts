import {
  ComponentPropsWithoutRef,
  HTMLProps,
  MouseEventHandler,
  ReactElement,
  Ref,
} from 'react';

import { BaseProps, LinkColor } from '@skatteetaten/ds-core-utils';

type RequiredLinkHTMLAttributes = Pick<
  HTMLProps<HTMLAnchorElement>,
  'href' | 'target' | 'onClick' | 'download'
>;

type LinkHTMLAttributes = Partial<RequiredLinkHTMLAttributes>;

interface LinkPropsHTMLAttributes extends LinkHTMLAttributes {
  href: string;
  target?: string;
  ariaCurrent?: ComponentPropsWithoutRef<'a'>['aria-current'];
  ariaDescribedby?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface LinkComponentCommonProps
  extends LinkPropsHTMLAttributes,
    BaseProps {
  ref?: Ref<HTMLAnchorElement>;
  /**
   * Viser ikon etter lenketeksten som indikerer at lenken er til en side på et
   * annet domene.
   */
  isExternal?: boolean;
  /** Farge på ikon og tekst */
  color?: LinkColor;
  /**
   * HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke.
   * Alternativt kan custom path sendes.
   */
  svgPath?: ReactElement<SVGPathElement>;
  /** Lenketekst. */
  children: string;
}

export type LinkProps = LinkComponentCommonProps;
