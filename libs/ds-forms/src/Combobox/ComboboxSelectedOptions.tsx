import React, { type JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';

import type { ComboboxSelectedOptionsProps } from './Combobox.types';

import styles from './Combobox.module.scss';

export const ComboboxSelectedOptions = React.memo<ComboboxSelectedOptionsProps>(
  ({
    multiple,
    selectedValues,
    onRemoveValue,
    labelId,
    disabled,
  }: ComboboxSelectedOptionsProps): JSX.Element | null => {
    const setChipsRef = (element: HTMLUListElement | null): void => {
      if (element && labelId) {
        element.setAttribute('aria-labelledby', labelId);
      }
    };

    if (!multiple || selectedValues.length === 0) {
      return null;
    }

    return (
      <Chips ref={setChipsRef} className={styles.chips}>
        {selectedValues.map((selectedValue) => (
          <Chips.Removable
            key={selectedValue.value}
            className={styles.chip}
            size={'small'}
            disabled={disabled}
            onClose={() => onRemoveValue(selectedValue)}
          >
            {selectedValue.label}
          </Chips.Removable>
        ))}
      </Chips>
    );
  }
);

ComboboxSelectedOptions.displayName = 'ComboboxComboboxSelectedOptions';
