/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipProps } from './Chip.types';
import { getChipVariantDefault } from './defaults';

import styles from './Chip.module.scss';

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      //variant = getChipVariantDefault(),
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassName = `${styles.chip} ${className}`;

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        onClick={onClose}
      >
        {children}
        {onClose ? (
          <Icon
            svgPath={CancelSVGpath}
            size={'small'}
            title={'TODO: legg inn tittel'}
          />
        ) : null}
      </button>
    );
  }
);
Chip.displayName = 'Chip';

export { getChipVariantDefault };
