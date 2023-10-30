import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps, LinkColor } from '@skatteetaten/ds-core-utils';

import { LinkProps } from '../Link/Link.types';

export const linkGroupVariantArr = ['list', 'anchors'] as const;
export type LinkGroupVariant = (typeof linkGroupVariantArr)[number];

export interface LinkGroupComponentCommonProps extends BaseProps {
  /** Margin under lenkegruppen */
  hasSpacing?: boolean;
  /** Farge på ikoner og lenker */
  color?: LinkColor;
  /** Definerer stilen til lenkegruppen. */
  variant?: LinkGroupVariant;
  /** Link-komponenter */
  children?: ReactNode;
}

export type LinkGroupProps = LinkGroupComponentCommonProps;

export interface LinkGroupComponent
  extends ForwardRefExoticComponent<
    LinkGroupProps & RefAttributes<HTMLUListElement>
  > {
  Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
}

export interface LinkContextProps {
  color?: LinkColor;
}
