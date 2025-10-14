import React, { type JSX } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
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
    variant,
  }: ComboboxButtonProps): JSX.Element => {
    const buttonClassName = `${styles.chevronButton} ${variant === 'large' ? styles.chevronButton_large : ''}`;
    const iconSize = variant === 'large' ? 'medium' : 'small';

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
          <Icon
            svgPath={CancelSVGpath}
            size={iconSize}
            title={dsI18n.t('ds_forms:combobox.ResetSuggestion')}
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
          title={
            isOpen
              ? dsI18n.t('ds_forms:combobox.CloseSuggestion')
              : dsI18n.t('ds_forms:combobox.OpenSuggestion')
          }
        />
      </div>
    );
  }
);

ComboboxButton.displayName = 'Combobox.Button';
