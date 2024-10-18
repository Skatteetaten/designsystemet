import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';

import { ChipsRemovableProps } from './ChipsRemovable.types';
import styles from '../Chips/Chips.module.scss';
import { getChipDefaultSize } from '../Chips/defaults';

export const ChipsRemovable = forwardRef<
  HTMLButtonElement,
  ChipsRemovableProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      size = getChipDefaultSize(),
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassName =
      `${styles.chip} ${size === 'small' ? styles.chip_small : ''} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={'button'}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        onClick={() => {
          //todo add handler
          onClose?.();
        }}
      >
        {children}
        <Icon
          className={styles.icon}
          svgPath={CancelSVGpath}
          size={'small'}
          title={'TODO: legg inn tittel'}
        />
      </button>
    );
  }
);
ChipsRemovable.displayName = 'ChipsRemovable';
