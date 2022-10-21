import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getIconVariantDefault, getIconSizeDefault } from './defaults';
import { IconProps } from './Icon.types';

import styles from './Icon.module.scss';

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      'data-testid': dataTestId,
      title,
      variant = getIconVariantDefault(),
      size = getIconSizeDefault(),
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
        focusable={false}
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-hidden={!title && !ariaLabel}
        role={'img'}
      >
        {title && <title id={titleId}>{title}</title>}
        {svgPath}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

export { getIconVariantDefault, getIconSizeDefault };
