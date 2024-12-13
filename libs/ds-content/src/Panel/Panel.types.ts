import { CSSProperties, ReactElement, ReactNode, Ref } from 'react';

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

export type CSSVariables = CSSProperties & {
  '--panel-padding-x'?: string;
};

export interface PanelComponentCommonProps extends BaseProps {
  /**
   * Lar heading i komponenten være fokuserbar.
   * Sørger for at tabIndex: -1
   * Brukes sammen med prop 'headingRef' og 'title'
   */
  canManuallySetTitleFocus?: boolean;
  /** Ekstra CSS hvor padding-verdien styrer paddingen i responsive padding */
  classNames?: {
    padding?: string;
  };
  /** Innholdet i Panel */
  children: ReactNode;
  /** Farge på border eller bakgrunn for Panel avhengig av variant som er valgt. */
  color?: PanelColor;
  /** Skjuler svg på mobil opptil breakpoint-s. */
  hideGraphicMobile?: boolean;
  /** Skjuler overskrift men synlig for skjermleser. */
  hideSubtitle?: boolean;
  /** Skjuler underoverskrift men synlig for skjermleser. */
  hideTitle?: boolean;
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
  /**
   * Ref for Panel Header (H1-H6).
   * Kan brukes til å sette fokus på header i Panel.
   * 'canManuallySetTitleFocus' må være satt til true og
   * 'title' må ha en verdi.
   */
  headingRef?: Ref<HTMLHeadingElement>;
}

export type PanelDiscriminatedPadding =
  | {
      /** Padding rundt Panel. Se også hasResponsivePadding */
      padding?: PanelPadding;
      /** Legger til media query slik at man kan styre padding pr brekkpunkt. Se også padding-prop */
      hasResponsivePadding?: never;
    }
  | {
      /** Padding rundt Panel. Se også hasResponsivePadding  */
      padding?: never;
      /** Legger til media query slik at man kan styre padding pr brekkpunkt. Se også padding-prop */
      hasResponsivePadding?: boolean;
    };

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
  PanelDiscriminatedGraphicProps &
  PanelDiscriminatedPadding;
