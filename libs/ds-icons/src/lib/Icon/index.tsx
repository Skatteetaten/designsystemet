//import { AriaRole } from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-devutils';

// TODO, bør vi tilby color? Bør vi tilby tab-index, viewBox?
/**
 * aria-label (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse".
 * role (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha role="img". Er role undefined vil svg automatisk anses som pynt og få aria-hidden="true".
 */
type IconPropsHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'aria-label' | 'tabIndex' | 'role' | 'viewBox'
>;

/**
 * title (optional): Oppretter en <title> tag nested i svg. Dette medfører tooltip for brukeren.
 * size: //TODO - hente size fra designtokens
 */
interface IconCustomProps extends IconPropsHTMLAttributes {
  title?: string;
  size?: Size;
  icon: React.ReactElement;
}

export type IconProps = IconCustomProps & BaseProps;

export function Icon({
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  tabIndex,
  id,
  className,
  role,
  title,
  viewBox = '0 0 24 24',
  icon,
}: IconProps): JSX.Element {
  return (
    <svg
      id={id}
      viewBox={viewBox}
      aria-label={ariaLabel}
      aria-hidden={!title}
      data-testid={dataTestId}
      className={className}
      role={role}
      focusable={false}
      tabIndex={tabIndex}
    >
      {title && <title>{title}</title>}
      {icon}
    </svg>
  );
}

export default Icon;
