import React, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Spinner } from '@skatteetaten/ds-progress';

import type { ComboboxOptionsProps } from './Combobox.types';
import { ComboboxMaxSelectedMessage } from './ComboboxMaxSelectedMessage';
import {
  getOptionState,
  type ComboboxState,
} from './utils/combobox-state-utils';

import styles from './Combobox.module.scss';

export const ComboboxOptions = React.memo<ComboboxOptionsProps>(
  ({
    isOpen,
    isLoading = false,
    spinnerProps,
    displayOptions,
    searchTerm,
    minSearchLength,
    multiple,
    selectedValues,
    comboboxId,
    listId,
    focusedIndex,
    classNames,
    handleButtonFocus,
    handleOptionSelect,
    customListRef,
    maxSelected,
    loadingLabel,
  }: ComboboxOptionsProps): JSX.Element | null => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });
    if (!isOpen) {
      return null;
    }

    /* Ikke vis liste hvis søketerm er kortere enn minSearchLength
    TODO: Implementer løsning for FRONT-2179 */
    if (searchTerm.length < minSearchLength) {
      return null;
    }

    // Vis loading state
    if (isLoading) {
      return (
        <div
          ref={customListRef}
          id={listId}
          className={`${styles.optionsListContainer} ${styles.loadingContainer} ${classNames || ''}`}
        >
          <Spinner titlePosition={'right'} {...spinnerProps}>
            {loadingLabel}
          </Spinner>
        </div>
      );
    }

    // Vis options når vi har resultater
    if (displayOptions.length > 0) {
      return (
        <div
          ref={customListRef}
          className={`${styles.optionsListContainer} ${classNames || ''}`}
        >
          <ul
            id={listId}
            role={'listbox'}
            aria-multiselectable={multiple ? 'true' : 'false'}
            className={styles.optionsList}
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

              /* In single select mode, we want to mark the option as selected with aria-selected
               when its label matches the search term */
              const isSelectedInSingleMode =
                !multiple && option.label === searchTerm;
              const ariaSelected = multiple
                ? isSelected
                : isSelectedInSingleMode;

              const isFocused = index === focusedIndex;

              return (
                <li
                  key={option.value}
                  id={`${comboboxId}-option-${index}`}
                  role={'option'} // We need to use <li> for screenreader support, even though sonarqube complains
                  aria-selected={ariaSelected ? 'true' : 'false'}
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
                      {isSelected && (
                        <div className={styles.checkboxIconCheck} />
                      )}
                    </div>
                  )}
                  <span className={styles.optionLabel}>{option.label}</span>
                </li>
              );
            })}
          </ul>
          {multiple && maxSelected && selectedValues.length > 0 && (
            <ComboboxMaxSelectedMessage
              selectedCount={selectedValues.length}
              maxSelected={maxSelected}
              comboboxId={comboboxId}
            />
          )}
        </div>
      );
    }

    // Vis "ingen resultater" når bruker har søkt men ikke fått treff
    if (searchTerm && displayOptions.length === 0) {
      return (
        <div
          ref={customListRef}
          className={`${styles.optionsListContainer} ${classNames || ''}`}
        >
          <ul
            id={listId}
            role={'listbox'}
            aria-multiselectable={'false'}
            className={styles.optionsList}
          >
            <li
              id={`${comboboxId}-option-no-results`}
              role={'option'}
              aria-selected={'false'}
              aria-disabled={'true'}
              className={styles.emptyResult}
            >
              {t('combobox.NoResults', { searchTerm })}
            </li>
          </ul>
        </div>
      );
    }

    return null;
  }
);

ComboboxOptions.displayName = 'ComboboxOptions';
