import { forwardRef, useId } from 'react';

import {
  getClassNameDefault,
  getRoleDefault,
  getVariantDefault,
  getViewBoxDefault,
  getSizeDefault,
} from './defaults';
import { IconProps } from './Icon.types';

import styles from './Icon.module.scss';

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      id,
      className = getClassNameDefault(),
      'data-testid': dataTestId,
      title,
      variant = getVariantDefault(),
      viewBox = getViewBoxDefault(variant),
      size = getSizeDefault(),
      svgPath,
      tabIndex,
      ariaLabel,
      role = getRoleDefault(),
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
        viewBox={viewBox}
        tabIndex={tabIndex}
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-hidden={!title && !ariaLabel}
        role={role}
        focusable={false}
      >
        {title && <title id={titleId}>{title}</title>}
        {svgPath}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
