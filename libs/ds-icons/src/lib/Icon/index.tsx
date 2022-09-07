import { BaseProps, Size } from '@skatteetaten/ds-core-devutils';

import styles from './icon.module.scss';

/**
 * aria-label (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse".
 * tabIndex (optional): Styrer focus. Oversatt til tab-index.
 * role (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha role="img". Er role undefined vil svg automatisk anses som pynt og få aria-hidden="true".
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
  return (
    <svg
      id={id}
      viewBox={viewBox}
      aria-label={ariaLabel}
      aria-hidden={!title}
      data-testid={dataTestId}
      className={className ? `${sizeClassName} ${className}` : sizeClassName}
      role={role}
      focusable={false}
      tabIndex={tabIndex}
    >
      {title && <title>{title}</title>}
      {svgPath}
    </svg>
  );
}

export default Icon;
