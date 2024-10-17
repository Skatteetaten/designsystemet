import { ElementRef, ReactElement, ReactNode, Ref, RefObject } from 'react';

import {
  BaseProps,
  HeadingAs,
  SubheadingAs,
  colorNamesArr,
} from '@skatteetaten/ds-core-utils';
import { IconProps } from '@skatteetaten/ds-icons';

export const panelVariantArr = ['outline', 'filled'] as const;
export type PanelVariant = (typeof panelVariantArr)[number];

export type PanelColor = Extract<
  (typeof colorNamesArr)[number],
  'ochre' | 'forest' | 'burgundy' | 'denim' | 'graphite'
>;

export const panelPaddingArr = ['s', 'm', 'l', 'xl', 'xxl', 'mega'] as const;
export type PanelPadding = (typeof panelPaddingArr)[number];

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
export type PanelSpacing = (typeof panelSpacingArr)[number];

export interface PanelComponentCommonProps extends BaseProps {
  /** Lar heading i komponenten være fokuserbar ved å sett tabIndex: -1 */
  canManuallySetTitleFocus?: boolean;
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
  /** Ref for Panel Header (H1-H6) */
  //headingRef: RefObject<HTMLInputElement>;
  headingRef?: Ref<HTMLHeadingElement>;
}

export type PanelDiscriminatedGraphicProps =
  | {
      /** Source til illustrasjonsbilde */
      imageSource?: string;
      /** Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på alt tekst. */
      imageSourceAltText?: string;
      /** Icon-komponent som en funksjon */
      renderIcon?: never;
    }
  | {
      /** Source til illustrasjonsbilde */
      imageSource?: never;
      /** Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på alt tekst. */
      imageSourceAltText?: never;
      /** Icon-komponent som en funksjon */
      renderIcon?: () => ReactElement<IconProps>;
    };

export type PanelProps = PanelComponentCommonProps &
  PanelDiscriminatedGraphicProps;
