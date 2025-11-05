import React, { type JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';

import type { ComboboxSelectedOptionsProps } from './Combobox.types';

import styles from './Combobox.module.scss';

export const ComboboxSelectedOptions = React.memo<ComboboxSelectedOptionsProps>(
  ({
    multiple,
    selectedValues,
    onRemoveValue,
    classNames,
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
      <div className={`${styles.chipsInline} ${classNames || ''}`}>
        <Chips ref={setChipsRef}>
          {selectedValues.map((selectedValue) => (
            <Chips.Removable
              key={selectedValue.value}
              size={'small'}
              disabled={disabled}
              onClose={() => onRemoveValue(selectedValue)}
            >
              {selectedValue.label}
            </Chips.Removable>
          ))}
        </Chips>
      </div>
    );
  }
);

ComboboxSelectedOptions.displayName = 'ComboboxComboboxSelectedOptions';
