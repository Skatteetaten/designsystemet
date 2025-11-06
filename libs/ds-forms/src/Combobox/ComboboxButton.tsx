import React, { type JSX } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  ChevronDownSVGpath,
  ChevronUpSVGpath,
  Icon,
  CancelIcon,
} from '@skatteetaten/ds-icons';

import { ComboboxButtonProps } from './Combobox.types';

import styles from './Combobox.module.scss';

export const ComboboxButton = React.memo<ComboboxButtonProps>(
  ({
    isOpen,
    onClick,
    hasValue,
    onClear,
    multiple,
    disabled,
    variant,
  }: ComboboxButtonProps): JSX.Element => {
    const buttonClassName = `${styles.chevronButton} ${variant === 'large' ? styles.chevronButton_large : ''}`;
    const iconSize = variant === 'large' ? 'medium' : 'small';

    const handleMouseDown = (e: React.MouseEvent<HTMLElement>): void => {
      // Prevent focus from going to input
      e.preventDefault();
      onClick?.(e);
    };

    if (!multiple && hasValue && onClear) {
      return (
        <button
          type={'button'}
          className={buttonClassName}
          aria-label={dsI18n.t('ds_forms:combobox.ResetSuggestion')}
          disabled={disabled}
          data-chevron-button
          onClick={onClear}
        >
          <CancelIcon size={iconSize} />
        </button>
      );
    }

    return (
      <div
        className={buttonClassName}
        data-disabled={disabled}
        aria-hidden={'true'}
        data-chevron-button
        onMouseDown={disabled ? undefined : handleMouseDown}
      >
        <Icon
          svgPath={isOpen ? ChevronUpSVGpath : ChevronDownSVGpath}
          size={iconSize}
        />
      </div>
    );
  }
);

ComboboxButton.displayName = 'ComboboxButton';
