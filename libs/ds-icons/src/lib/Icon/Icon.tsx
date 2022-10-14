import { forwardRef, useId } from 'react';

import { IconProps } from './Icon.types';

import styles from './Icon.module.scss';

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      id,
      className = '',
      'data-testid': dataTestId,
      title,
      'aria-label': ariaLabel,
      role = 'img',
      variant = 'systemIcon',
      viewBox = variant === 'systemIcon' ? '0 0 24 24' : '0 0 48 48',
      size = 'medium',
      svgPath,
      tabIndex,
    },
    ref
  ): JSX.Element => {
    const uniqueId = useId();
    const sizeClassName = styles[`${variant}_${size}`];
    const titleId = `svgtitle-${id ?? uniqueId}`;

    return (
      <svg
        ref={ref}
        id={id}
        className={`${styles[variant]} ${sizeClassName} ${className}`}
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
