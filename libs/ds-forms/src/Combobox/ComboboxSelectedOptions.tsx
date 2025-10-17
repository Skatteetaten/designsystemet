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
  }: ComboboxSelectedOptionsProps): JSX.Element | null => {
    if (!multiple || selectedValues.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.chipsInline} ${classNames || ''}`}>
        <Chips>
          {selectedValues.map((selectedValue) => (
            <Chips.Removable
              key={selectedValue.value}
              size={'small'}
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
