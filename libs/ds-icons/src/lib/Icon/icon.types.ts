import { BaseProps, Size } from '@skatteetaten/ds-core-devutils';

type IconPropsHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'aria-label' | 'role' | 'viewBox' | 'tabIndex'
>;

interface IconCustomPropsWithTitle extends IconPropsHTMLAttributes {
  title?: string;
  size?: Size;
  svgPath: React.ReactElement;
  'aria-label': never;
}

interface IconCustomPropsWithAriaLabel extends IconPropsHTMLAttributes {
  title: never;
  size?: Size;
  svgPath: React.ReactElement;
}

/**
 * @param {IconCustomPropsWithTitle.title} title - (Optional) Oppretter en <title> tag nested i svg. Dette medfører tooltip.
 * @param {IconCustomPropsWithAriaLabel.aria-label} aria-label - (Optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse". Merk at aria-label vises kun når title ikke allerede er angitt.
 * @param {IconPropsHTMLAttributes.role} role - (Default: "img") Mulighet til å overskrive role.
 * @param {IconPropsHTMLAttributes.viewBox} viewBox - (Optional) definerer størrelsen på svg viewBox'en. Default er 0 0 24 24.
 * @param {IconCustomPropsWithTitle.size} size - (Default: small) Setter width og height på selve ikonet basert på Size verdier.
 * @param {IconCustomPropsWithTitle.svgPath} svgPath - selve <path> som tegner ikoner
 * @param {IconPropsHTMLAttributes.tabIndex} tabIndex - (Optional) Styrer focus. Oversatt til tab-index.
 */
export type IconProps = BaseProps &
  (IconCustomPropsWithTitle | IconCustomPropsWithAriaLabel);
