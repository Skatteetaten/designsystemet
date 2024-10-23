import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CircleRingSVGpath,
  CompletedSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { ChipsToggleProps } from './ChipsToggle.types';
import {
  getChipsToggleDefaultShowCheckmark,
  getChipsToggleDefaultIsSelected,
} from './defaults';
import styles from '../Chips/Chips.module.scss';
import { getChipDefaultSize } from '../Chips/defaults';

export const ChipsToggle = forwardRef<HTMLButtonElement, ChipsToggleProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      disabled,
      size = getChipDefaultSize(),
      isSelected = getChipsToggleDefaultIsSelected(),
      showCheckmark = getChipsToggleDefaultShowCheckmark(),
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassName =
      `${styles.chip} ${size === 'small' ? styles.chip_small : ''} ${showCheckmark ? styles.chip_withCheckmark : ''} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={'button'}
        id={id}
        disabled={disabled}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        aria-pressed={isSelected ? 'true' : 'false'}
        onClick={onClick}
      >
        {showCheckmark ? (
          <Icon
            className={styles.icon}
            svgPath={isSelected ? CompletedSVGpath : CircleRingSVGpath}
            size={size}
          />
        ) : null}
        {children}
      </button>
    );
  }
);

ChipsToggle.displayName = 'ChipsToggle';

export {
  getChipsToggleDefaultShowCheckmark,
  getChipsToggleDefaultIsSelected,
  getChipDefaultSize,
};
