import React, { type JSX, useEffect, useState } from 'react';
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
    openTrigger,
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
    onMinSearchLengthDelayChange,
  }: ComboboxOptionsProps): JSX.Element | null => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });
    const [showMinSearchLengthText, setShowMinSearchLengthText] =
      useState(false);

    const isBelowMinSearchLength = searchTerm.length < minSearchLength;

    useEffect(() => {
      if (!isOpen || minSearchLength === 0 || !isBelowMinSearchLength) {
        setShowMinSearchLengthText(false);
        onMinSearchLengthDelayChange?.(false);
        return;
      }

      if (openTrigger === 'chevron') {
        setShowMinSearchLengthText(true);
        onMinSearchLengthDelayChange?.(true);
        return;
      }

      const timeout = setTimeout(() => {
        setShowMinSearchLengthText(true);
        onMinSearchLengthDelayChange?.(true);
      }, 1000);

      return (): void => {
        clearTimeout(timeout);
      };
    }, [
      isBelowMinSearchLength,
      isOpen,
      minSearchLength,
      openTrigger,
      onMinSearchLengthDelayChange,
    ]);

    if (!isOpen) {
      return null;
    }

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

    const shouldShowMinSearchLengthMessage =
      isBelowMinSearchLength &&
      (openTrigger === 'chevron' || showMinSearchLengthText);
    const shouldShowNoResultsMessage =
      !isBelowMinSearchLength && !!searchTerm && displayOptions.length === 0;

    // Vis "skriv minst x tegn" eller "ingen resultater"
    if (shouldShowMinSearchLengthMessage || shouldShowNoResultsMessage) {
      const message = shouldShowMinSearchLengthMessage
        ? t('combobox.minSearchLengthText', { ant: minSearchLength })
        : t('combobox.NoResults', { searchTerm });

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
              {message}
            </li>
          </ul>
        </div>
      );
    }

    return null;
  }
);
