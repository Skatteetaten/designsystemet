import React, { type JSX, RefObject } from 'react';

import type { SpinnerProps } from '@skatteetaten/ds-progress';

import { getOptionState, type ComboboxState } from '../combobox-state-utils';
import styles from '../Combobox.module.scss';
import type { ComboboxOption } from '../Combobox.types';
import { LoadingMessage } from './LoadingMessage';
import { MaxSelectedMessage } from '../MaxSelectedMessage/MaxSelectedMessage';

interface ComboboxOptionsProps {
  isOpen: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  spinnerProps?: Partial<Pick<SpinnerProps, 'size' | 'color'>>;
  displayOptions: ComboboxOption[];
  searchTerm: string;
  multiple: boolean;
  selectedValues: ComboboxOption[];
  comboboxId: string;
  listId: string;
  focusedIndex: number;
  classNames?: { options?: string };
  handleButtonFocus: (index: number) => void;
  handleOptionSelect: (option: ComboboxOption, fromKeyboard?: boolean) => void;
  setFocusedIndex: (index: number) => void;
  customListRef: RefObject<HTMLUListElement | null>;
  hasError?: boolean;
  maxSelected?: number;
}

export const ComboboxOptions = React.memo<ComboboxOptionsProps>(
  ({
    isOpen,
    isLoading = false,
    spinnerProps,
    displayOptions,
    searchTerm,
    multiple,
    selectedValues,
    comboboxId,
    listId,
    focusedIndex,
    classNames,
    handleButtonFocus,
    handleOptionSelect,
    setFocusedIndex,
    customListRef,
    hasError = false,
    maxSelected,
  }: ComboboxOptionsProps): JSX.Element | null => {
    if (!isOpen) {
      return null;
    }

    // Vis loading state
    if (isLoading) {
      return (
        <div
          id={listId}
          className={`${styles.optionsList} ${hasError ? styles.optionsListWithError : ''} ${classNames?.options || ''}`}
        >
          <LoadingMessage comboboxId={comboboxId} spinnerProps={spinnerProps} />
        </div>
      );
    }

    // Vis options når vi har resultater
    if (displayOptions.length > 0) {
      return (
        <ul
          ref={customListRef}
          id={listId}
          role={'listbox'}
          aria-multiselectable={multiple ? 'true' : 'false'}
          className={`${styles.optionsList} ${hasError ? styles.optionsListWithError : ''} ${classNames?.options || ''}`}
        >
          {displayOptions.map((option, index) => {
            const comboboxState: ComboboxState = {
              options: displayOptions,
              selectedValues,
              multiple,
              maxSelected,
            };

            const { isSelected, isDisabled } = getOptionState(
              option,
              comboboxState
            );
            const isFocused = index === focusedIndex;

            return (
              <li
                key={option.value}
                id={`${comboboxId}-option-${index}`}
                role={'option'} // We need to use <li> for screenreader support, even though sonarqube complains
                aria-selected={isSelected}
                aria-disabled={isDisabled ? 'true' : undefined}
                className={`${styles.option} ${multiple ? styles.optionWithCheckbox : ''} ${isFocused ? styles.focused : ''} ${isSelected ? styles.selected : ''} ${isDisabled ? styles.disabled : ''}`}
                tabIndex={-1}
                onFocus={() => handleButtonFocus(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (!isDisabled) {
                      handleOptionSelect(option, true); // true = fromKeyboard
                    }
                  }
                }}
                onMouseEnter={() => setFocusedIndex(index)}
                onClick={() => {
                  if (!isDisabled) {
                    handleOptionSelect(option, false); // false = fromMouse
                  }
                }}
              >
                {multiple && (
                  <div
                    className={`${styles.checkboxIcon} ${isSelected ? styles.checked : ''} ${isDisabled ? styles.disabled : ''}`}
                  >
                    {isSelected && <div className={styles.checkboxIconCheck} />}
                  </div>
                )}
                <span className={styles.optionLabel}>{option.label}</span>
              </li>
            );
          })}
          {/* Add max selected message when selections are made */}
          {multiple && maxSelected && selectedValues.length > 0 && (
            <MaxSelectedMessage
              selectedCount={selectedValues.length}
              maxSelected={maxSelected}
              comboboxId={comboboxId}
            />
          )}
        </ul>
      );
    }

    // Vis "ingen resultater" når bruker har søkt men ikke fått treff
    if (searchTerm && displayOptions.length === 0) {
      return (
        <ul
          ref={customListRef}
          id={listId}
          role={'listbox'}
          aria-multiselectable={'false'}
          className={`${styles.optionsList} ${hasError ? styles.optionsListWithError : ''} ${classNames?.options || ''}`}
        >
          <li
            id={`${comboboxId}-option-no-results`}
            role={'option'}
            aria-selected={'false'}
            aria-disabled={'true'}
            className={styles.emptyResult}
          >
            {'Ingen treff for "'}
            {searchTerm}
            {'"'}
          </li>
        </ul>
      );
    }

    return null;
  }
);

ComboboxOptions.displayName = 'Combobox.Options';
