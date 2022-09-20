import React, { useId } from 'react';

import { IconProps } from './icon.types';

import styles from './icon.module.scss';

/* const tomt: IconProps = {
  id: 'o',
  title: 'jaja',
  svgPath: <div />,
  'aria-label': 'Dette er aria-label',
} as IconProps; */
/* 
const newVals = { size: () => 'small' } as IconProps; */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      id,
      className,
      'data-testid': dataTestId,
      size = 'medium',
      title,
      'aria-label': ariaLabel,
      role = title || ariaLabel ? 'img' : undefined,
      viewBox = '0 0 24 24',
      svgPath,
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
