import { BaseProps, Size, IconVariant } from '@skatteetaten/ds-core-devutils';

type IconPropsHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'aria-label' | 'role' | 'viewBox' | 'tabIndex'
>;

interface IconComponentCommonProps {
  svgPath: React.ReactElement;
}

interface IconCustomPropsWithTitle extends IconPropsHTMLAttributes {
  title?: string;
  'aria-label': never;
}

export interface IconCustomPropsWithAriaLabel extends IconPropsHTMLAttributes {
  title: never;
}

export type VariantCustomProps =
  | {
      variant: Extract<IconVariant, 'systemIcon'>;
      size?: Size;
    }
  | {
      variant: Extract<IconVariant, 'themeIcon'>;
      size?: Extract<Size, 'medium' | 'large'>;
    };

/**
 * @param {IconCustomPropsWithTitle.title} title - (Optional) Oppretter en <title> tag nested i svg. Dette medfører tooltip.
 * @param {IconCustomPropsWithAriaLabel.aria-label} aria-label - (Optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse". Merk at aria-label vises kun når title ikke allerede er angitt.
 * @param {IconPropsHTMLAttributes.role} role - (Default: "img" når title eler aria-label er angitt) Mulighet til å overskrive role.
 * @param {IconProps.variant} variant - (Default: 'systemIcon') Definerer detaljnivå på et ikon. De tilgjengelige størrelsene under "size" prop er avhengig av variant.
 * @param {IconPropsHTMLAttributes.viewBox} viewBox - (Optional) definerer størrelsen på svg viewBox'en. Default er 0 0 24 24.
 * @param {IconCustomPropsWithTitle.size} size - (Default: 'medium') Setter width og height på selve ikonet basert på Size verdi.
 * @param {IconCustomPropsWithTitle.svgPath} svgPath - selve <path> som tegner ikoner
 * @param {IconPropsHTMLAttributes.tabIndex} tabIndex - (Optional) Styrer focus. Oversatt til tab-index.
 */
export type IconProps = BaseProps &
  IconComponentCommonProps &
  VariantCustomProps &
  (IconCustomPropsWithTitle | IconCustomPropsWithAriaLabel);
