import React, { useId } from 'react';

import { BaseProps, Size } from '@skatteetaten/ds-core-devutils';

import styles from './icon.module.scss';

/**
 * aria-label (optional): Hvis svg-en er meningsbærende og ikke bare pynt/dekor skal tag'en ha aria-label="beskrivelse". Merk at aria-label vises kun når title ikke allerede er angitt.
 * role (optional): Mulighet til å overskrive role. Merk at når title eller aria-label er angitt anses ikonet som meningsbærende og vises med role="img". Alternativt vises den uten role og med aria-hidden="true".
 * tabIndex (optional): Styrer focus. Oversatt til tab-index.
 * viewBox (optional): definerer størrelsen på svg viewBox'en. Default er 0 0 24 24.
 */
type IconPropsHTMLAttributes = Pick<
  React.SVGAttributes<Record<string, never>>,
  'aria-label' | 'role' | 'viewBox' | 'tabIndex'
>;

/**
 * title (optional): Oppretter en <title> tag nested i svg. Dette medfører tooltip.
 * size (optional): Setter width og height på selve ikonet basert på Size verdier. Default er 'small'.
 * svgPath: selve <path> som tegner ikoner
 */
interface IconCustomProps extends IconPropsHTMLAttributes {
  title?: string;
  size?: Size;
  svgPath: React.ReactElement;
}

export type IconProps = IconCustomProps & BaseProps;

// TODO utvide skript til å opprette mappe .nyc_output
// TODO FRONT-842 Bør tilby TemaIcon
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      id,
      className,
      'data-testid': dataTestId,
      title,
      size = 'medium',
      svgPath,
      'aria-label': ariaLabel,
      role = title || ariaLabel ? 'img' : undefined,
      viewBox = '0 0 24 24',
      tabIndex,
    },
    ref
  ): JSX.Element => {
    const uniqueId = useId();
    const sizeClassName = styles[`icon_${size}`];
    const titleId = `svgtitle-${id ?? uniqueId}`;

    return (
      <svg
        ref={ref}
        id={id}
        className={className ? `${sizeClassName} ${className}` : sizeClassName}
        data-testid={dataTestId}
        aria-label={!title ? ariaLabel : undefined}
        role={role}
        viewBox={viewBox}
        tabIndex={tabIndex}
        aria-labelledby={title ? titleId : undefined}
        aria-hidden={!title && !ariaLabel}
        focusable={false}
      >
        {title && <title id={titleId}>{title}</title>}
        {svgPath}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
export default Icon;
