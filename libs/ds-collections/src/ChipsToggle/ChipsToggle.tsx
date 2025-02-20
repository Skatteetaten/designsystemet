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
import { getChipDefaultSize } from '../Chips/defaults';

import styles from './ChipsToggle.module.scss';

export const ChipsToggle = forwardRef<HTMLButtonElement, ChipsToggleProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      size = getChipDefaultSize(),
      disabled,
      isSelected = getChipsToggleDefaultIsSelected(),
      showCheckmark = getChipsToggleDefaultShowCheckmark(),
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassName =
      `${styles.toggleChip} ${size === 'small' ? styles.toggleChip_small : ''} ${showCheckmark ? styles.toggleChip_withCheckmark : ''} ${className ?? ''}`.trim();

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
