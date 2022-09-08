import { BaseProps, Size } from '@skatteetaten/ds-core-devutils';

import styles from './icon.module.scss';

/**
 * aria-label (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse". Merk at aria-label vises kun når title ikke allerede er angitt.
 * tabIndex (optional): Styrer focus. Oversatt til tab-index.
 * role (optional): Mulighet til å overskrive role. Merk at når title eller aria-label er angitt anses ikonet som meningsbærende og vises med role="img" og beskrivelse. Alternativt vises den uten role og med aria-hidden="true".
 * viewBox (optional): definerer størrelsen på svg viewBox'en. Default er 0 0 24 24.
 */
type IconPropsHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'aria-label' | 'tabIndex' | 'role' | 'viewBox'
>;

/**
 * title (optional): Oppretter en <title> tag nested i svg. Dette medfører tooltip for brukeren.
 * size: Setter width og height på selve ikonet basert på Size verdier
 * svgPath: selve <path> som tegner ikoner
 */
interface IconCustomProps extends IconPropsHTMLAttributes {
  title?: string;
  size?: Size;
  svgPath: React.ReactElement;
}

export type IconProps = IconCustomProps & BaseProps;

// TODO FRONT-842 Bør tilby TemaIcon
export function Icon({
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  tabIndex,
  id,
  className,
  role,
  title,
  size = 'medium',
  viewBox = '0 0 24 24',
  svgPath,
}: IconProps): JSX.Element {
  const sizeClassName = styles[`icon_${size}`];
  const defaultRole = title || ariaLabel ? 'img' : undefined;

  return (
    <svg
      id={id}
      viewBox={viewBox}
      aria-label={!title ? ariaLabel : undefined}
      aria-hidden={!title && !ariaLabel}
      data-testid={dataTestId}
      className={className ? `${sizeClassName} ${className}` : sizeClassName}
      role={role ?? defaultRole}
      focusable={false}
      tabIndex={tabIndex}
    >
      {title && <title>{title}</title>}
      {svgPath}
    </svg>
  );
}

export default Icon;
