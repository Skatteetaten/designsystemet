import { BaseProps, LinkColor } from '@skatteetaten/ds-core-utils';

import { LinkProps } from '../Link/Link.types';

export const linkGroupVariantArr = ['list', 'anchors'] as const;
export type LinkGroupVariant = typeof linkGroupVariantArr[number];

export interface LinkGroupComponentCommonProps extends BaseProps {
  /** Margin under lenkegruppen */
  hasSpacing?: boolean;
  /** Farge på ikoner og lenker */
  color?: LinkColor;
  /** Definerer stilen til lenkegruppen. */
  variant?: LinkGroupVariant;
  /** Link-komponenter */
  children?: JSX.Element | JSX.Element[];
}

export type LinkGroupProps = LinkGroupComponentCommonProps;

export interface LinkGroupComponent
  extends React.ForwardRefExoticComponent<
    LinkGroupProps & React.RefAttributes<HTMLUListElement>
  > {
  Link: React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
}
