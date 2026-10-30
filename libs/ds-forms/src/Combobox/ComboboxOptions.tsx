import {
  type JSX,
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { Spinner } from '@skatteetaten/ds-progress';

import type { ComboboxOptionsProps } from './Combobox.types';
import { ComboboxMaxSelectedMessage } from './ComboboxMaxSelectedMessage';
import { ComboboxOptionsListContent } from './ComboboxOptionsListContent';
import type { ComboboxState } from './utils/combobox-state-utils';

import styles from './Combobox.module.scss';

type ComboboxOpenOptionsProps = Omit<
  ComboboxOptionsProps,
  | 'isOpen'
  | 'openTrigger'
  | 'isLoading'
  | 'spinnerProps'
  | 'spinnerLabel'
  | 'onMinSearchLengthDelayChange'
> & {
  showMinSearchLengthText: boolean;
};

/**
 * Returnerer en funksjon med stabil identitet som alltid kaller siste versjon
 * av callback, slik at memoiserte rader ikke rendres på nytt bare fordi en
 * handler har fått ny identitet.
 */
const useStableCallback = <Args extends unknown[], Result>(
  callback: (...args: Args) => Result
): ((...args: Args) => Result) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback((...args: Args) => callbackRef.current(...args), []);
};

/**
 * Innholdet i en åpen liste. Komponenten monteres når listen åpnes, slik at
 * useDeferredValue returnerer verdiene direkte ved åpning. Ved påfølgende søk
 * rendres listen i bakgrunnen, slik at input-feltet ikke blokkeres når det er
 * mange alternativer. Filtrering og tastaturnavigasjon bruker fortsatt ferske
 * verdier.
 */
const ComboboxOpenOptions = ({
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
  showMinSearchLengthText,
}: ComboboxOpenOptionsProps): JSX.Element | null => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });

  const deferredDisplayOptions = useDeferredValue(displayOptions);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const stableHandleButtonFocus = useStableCallback(handleButtonFocus);
  const stableHandleOptionSelect = useStableCallback(handleOptionSelect);

  const comboboxState: ComboboxState = useMemo(
    () => ({
      options: deferredDisplayOptions,
      selectedValues,
      multiple,
      maxSelected,
    }),
    [deferredDisplayOptions, selectedValues, multiple, maxSelected]
  );

  // Vis options når vi har resultater
  if (deferredDisplayOptions.length > 0) {
    return (
      <div
        ref={customListRef}
        className={`${styles.optionsListContainer} ${className || ''}`.trim()}
      >
        <ul
          id={listId}
          role={'listbox'}
          aria-multiselectable={multiple ? 'true' : 'false'}
          tabIndex={-1}
          className={styles.optionsList}
          onMouseDown={(e) => e.preventDefault()}
        >
          <ComboboxOptionsListContent
            displayOptions={deferredDisplayOptions}
            comboboxId={comboboxId}
            comboboxState={comboboxState}
            multiple={multiple}
            focusedIndex={focusedIndex}
            handleButtonFocus={stableHandleButtonFocus}
            handleOptionSelect={stableHandleOptionSelect}
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

  const isBelowMinSearchLength = deferredSearchTerm.length < minSearchLength;
  const shouldShowMinSearchLengthMessage =
    isBelowMinSearchLength && showMinSearchLengthText;
  const shouldShowNoResultsMessage =
    !isBelowMinSearchLength && !!deferredSearchTerm;

  // Vis "skriv minst x tegn" eller "ingen resultater"
  if (shouldShowMinSearchLengthMessage || shouldShowNoResultsMessage) {
    const message = shouldShowMinSearchLengthMessage
      ? t('combobox.minSearchLengthText', { ant: minSearchLength })
      : t('combobox.NoResults', { searchTerm: deferredSearchTerm });

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
};

export const ComboboxOptions = memo<ComboboxOptionsProps>(
  ({
    isOpen,
    openTrigger,
    isLoading = false,
    spinnerProps,
    spinnerLabel,
    onMinSearchLengthDelayChange,
    ...openOptionsProps
  }: ComboboxOptionsProps): JSX.Element | null => {
    const { searchTerm, minSearchLength, customListRef, listId, className } =
      openOptionsProps;
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

    return (
      <ComboboxOpenOptions
        {...openOptionsProps}
        showMinSearchLengthText={showMinSearchLengthText}
      />
    );
  }
);
