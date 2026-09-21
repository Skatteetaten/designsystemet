import { JSX } from 'react';

import { DividerProps } from './Divider.types';

import styles from './Divider.module.scss';

/**
 * Divider
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/divider)
 */
export const Divider = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  variant = 'subtle',
  spacingTop = 's',
  spacingBottom = 's',
  ariaHidden,
}: DividerProps): JSX.Element => {
  const concatenatedClassName = `${styles.divider} ${className}`.trim();
  return (
    <hr
      ref={ref}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      className={concatenatedClassName}
      aria-hidden={ariaHidden}
      data-variant={variant}
      data-spacing-top={spacingTop}
      data-spacing-bottom={spacingBottom}
    />
  );
};
