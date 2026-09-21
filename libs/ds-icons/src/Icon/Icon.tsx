import { useId, JSX } from 'react';

import { IconProps } from './Icon.types';

import styles from './Icon.module.scss';

/**
 * Icon
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/icon)
 */
export const Icon = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  title,
  variant = 'systemIcon',
  size = 'medium',
  svgPath,
  ariaLabel,
}: IconProps): JSX.Element => {
  const uniqueId = useId();
  const sizeClassName = styles[`${variant}_${size}`];
  const titleId = `svgtitle-${id ?? uniqueId}`;

  return (
    <svg
      ref={ref}
      id={id}
      className={`${styles[variant]} ${sizeClassName} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
      viewBox={variant === 'systemIcon' ? '0 0 24 24' : '0 0 48 48'}
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
};

Icon.displayName = 'Icon';
