import React, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Spinner } from '@skatteetaten/ds-progress';

import type { ComboboxOptionsProps } from './Combobox.types';
import { ComboboxMaxSelectedMessage } from './ComboboxMaxSelectedMessage';
import { ComboboxOptionsListContent } from './ComboboxOptionsListContent';
import type { ComboboxState } from './utils/combobox-state-utils';

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
    className,
    handleButtonFocus,
    handleOptionSelect,
    customListRef,
    maxSelected,
    spinnerLabel,
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
          className={`${styles.optionsListContainer} ${styles.loadingContainer} ${className || ''}`.trim()}
        >
          <Spinner titlePosition={'right'} {...spinnerProps}>
            {spinnerLabel}
          </Spinner>
        </div>
      );
    }

    const comboboxState: ComboboxState = {
      options: displayOptions,
      selectedValues,
      multiple,
      maxSelected,
    };

    // Vis options når vi har resultater
    if (displayOptions.length > 0) {
      return (
        <div
          ref={customListRef}
          className={`${styles.optionsListContainer} ${className || ''}`.trim()}
        >
          <ul
            id={listId}
            role={'listbox'}
            aria-multiselectable={multiple ? 'true' : 'false'}
            className={styles.optionsList}
            onMouseDown={(e) => e.preventDefault()}
          >
            <ComboboxOptionsListContent
              displayOptions={displayOptions}
              comboboxId={comboboxId}
              comboboxState={comboboxState}
              searchTerm={searchTerm}
              multiple={multiple}
              focusedIndex={focusedIndex}
              handleButtonFocus={handleButtonFocus}
              handleOptionSelect={handleOptionSelect}
            />
          </ul>
          {multiple && maxSelected && selectedValues.length > 0 && (
            <ComboboxMaxSelectedMessage
              selectedCount={selectedValues.length}
              maxSelected={maxSelected}
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
          className={`${styles.optionsListContainer} ${className || ''}`.trim()}
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
