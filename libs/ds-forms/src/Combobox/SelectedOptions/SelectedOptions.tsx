import React, { type JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';

import styles from '../Combobox.module.scss';
import type { ComboboxOption } from '../Combobox.types';

interface ComboboxChipsProps {
  multiple: boolean;
  selectedValues: ComboboxOption[];
  onRemoveValue: (value: ComboboxOption) => void;
  classNames?: { chips?: string };
}

export const ComboboxChips = React.memo<ComboboxChipsProps>(
  ({
    multiple,
    selectedValues,
    onRemoveValue,
    classNames,
  }: ComboboxChipsProps): JSX.Element | null => {
    if (!multiple || selectedValues.length === 0) {
      return null;
    }

    return (
      <div className={`${styles.chipsInline} ${classNames?.chips || ''}`}>
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

ComboboxChips.displayName = 'Combobox.Chips';
