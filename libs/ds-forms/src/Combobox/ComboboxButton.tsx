import React, { type JSX } from 'react';

import {
  ChevronDownSVGpath,
  ChevronUpSVGpath,
  CancelSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';

import { ComboboxSize } from './Combobox.types';

import styles from './Combobox.module.scss';

interface ComboboxButtonProps {
  isOpen: boolean;
  onClick: (e?: React.MouseEvent) => void;
  hasValue?: boolean;
  onClear?: () => void;
  multiple?: boolean;
  disabled?: boolean;
  variant?: ComboboxSize;
}

export const ComboboxButton = React.memo<ComboboxButtonProps>(
  ({
    isOpen,
    onClick,
    hasValue,
    onClear,
    multiple,
    disabled,
    variant = 'medium',
  }: ComboboxButtonProps): JSX.Element => {
    const buttonClassName = `${styles.chevronButton} ${variant === 'large' ? styles.chevronButton_large : ''}`;
    const iconSize = variant === 'large' ? 'medium' : 'small';

    if (!multiple && hasValue && onClear) {
      return (
        <button
          type={'button'}
          className={buttonClassName}
          aria-label={'Nullstill valg'}
          disabled={disabled}
          data-chevron-button
          onClick={onClear}
        >
          <Icon
            svgPath={CancelSVGpath}
            size={iconSize}
            title={'Nullstill valg'}
          />
        </button>
      );
    }

    return (
      <div
        className={buttonClassName}
        data-disabled={disabled}
        aria-hidden={'true'}
        data-chevron-button
        onClick={disabled ? undefined : onClick}
      >
        <Icon
          svgPath={isOpen ? ChevronUpSVGpath : ChevronDownSVGpath}
          size={iconSize}
          title={isOpen ? 'Lukk forslag' : 'Åpne forslag'}
        />
      </div>
    );
  }
);

ComboboxButton.displayName = 'Combobox.Button';
