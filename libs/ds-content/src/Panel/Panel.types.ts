import { ReactElement, ReactNode } from 'react';

import {
  BaseProps,
  HeadingAs,
  SubheadingAs,
} from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

export const panelVariantArr = ['outline', 'filled'] as const;
export type PanelVariant = typeof panelVariantArr[number];

export const panelColorArr = [
  'ochre',
  'forest',
  'burgundy',
  'denim',
  'graphite',
] as const;
export type PanelColor = typeof panelColorArr[number];

export const panelPaddingArr = ['s', 'm', 'l', 'xl', 'xxl', 'mega'] as const;
export type PanelPadding = typeof panelPaddingArr[number];

export const panelSpacingArr = [
  'xxs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
  'mega',
] as const;
export type PanelSpacing = typeof panelSpacingArr[number];

export interface PanelComponentCommonProps extends BaseProps {
  /** Tekst eller markup for Panel. */
  children: ReactNode;
  /** Farge på border eller bakgrunn for Panel avhengig av variant som er valgt. */
  color?: PanelColor;
  /** Skjuler svg på mobil opptil breakpoint-s. */
  hideGraphicMobile?: boolean;
  /** Skjuler overskrift men synlig for skjermleser. */
  hideSubtitle?: boolean;
  /** Skjuler underoverskrift men synlig for skjermleser. */
  hideTitle?: boolean;
  /** Padding rundt Panel. */
  padding?: PanelPadding;
  /** Margin under Panel. */
  spacing?: PanelSpacing;
  /** Underoverskrift. */
  subtitle?: string;
  /** Heading-element h2-h6. */
  subtitleAs?: SubheadingAs;
  /** Overskrift. */
  title?: string;
  /** Heading-element h1-h6. */
  titleAs?: HeadingAs;
  /** Definerer stilen til Panel. */
  variant?: PanelVariant;
}

export type PanelDiscriminatedGraphicProps =
  | {
      /** Source til illustrasjonsbilde */
      imageSource?: string;
      /** Icon-komponent  */
      renderIcon?: never;
    }
  | {
      /** Source til illustrasjonsbilde */
      imageSource?: never;
      /** Icon-komponent  */
      renderIcon?: () => ReactElement<IconProps>;
    };

export type PanelProps = PanelComponentCommonProps &
  PanelDiscriminatedGraphicProps;
