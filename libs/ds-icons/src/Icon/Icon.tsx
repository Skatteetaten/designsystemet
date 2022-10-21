import { forwardRef, useId } from 'react';

import {
  getClassNameDefault,
  getVariantDefault,
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
      size = getSizeDefault(),
      svgPath,
      tabIndex,
      ariaLabel,
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
        viewBox={variant === 'systemIcon' ? '0 0 24 24' : '0 0 48 48'}
        tabIndex={tabIndex}
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-hidden={!title && !ariaLabel}
        role={'img'}
        focusable={false}
      >
        {title && <title id={titleId}>{title}</title>}
        {svgPath}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export { getClassNameDefault, getVariantDefault, getSizeDefault };
