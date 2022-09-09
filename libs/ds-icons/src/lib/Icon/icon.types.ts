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
 * title (optional): Oppretter en <title> tag nested i svg. Dette medfører tooltip.
 * aria-label (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse". Merk at aria-label vises kun når title ikke allerede er angitt.
 * role (optional): Mulighet til å overskrive role. Default er "img".
 * viewBox (optional): definerer størrelsen på svg viewBox'en. Default er 0 0 24 24.
 * size (optional): Setter width og height på selve ikonet basert på Size verdier. Default er 'small'.
 * svgPath: selve <path> som tegner ikoner
 * tabIndex (optional): Styrer focus. Oversatt til tab-index.
 */
export type IconProps =
  | (IconCustomPropsWithTitle & BaseProps)
  | (IconCustomPropsWithAriaLabel & BaseProps);
