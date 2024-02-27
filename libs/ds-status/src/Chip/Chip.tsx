import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { ChipProps } from './Chip.types';
import { getChipColorDefault, getChipSizeDefault } from './defaults';

import styles from './Chip.module.scss';

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      color = getChipColorDefault(),
      size = getChipSizeDefault(),
      svgPath,
      children,
    },
    ref
  ): JSX.Element => {
    const variantClassName = styles[`chip_${color}`];
    const sizeClassName = styles[`chip_${size}`];

    return (
      <div
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        className={`${styles.chip} ${variantClassName} ${sizeClassName} ${className}`}
      >
        {svgPath && (
          <div className={styles.iconWrapper} aria-hidden>
            <Icon size={'small'} svgPath={svgPath} />
          </div>
        )}
        {children}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

export { getChipColorDefault, getChipSizeDefault };
