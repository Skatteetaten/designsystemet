import React, {
  forwardRef,
  useId,
  useState,
  JSX,
  KeyboardEvent,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, SearchIcon } from '@skatteetaten/ds-icons';

import {
  getSearchFieldHasSearchButtonIconDefault,
  getSearchFieldHideLabelDefault,
} from './defaults';
import { SearchFieldComponent, SearchFieldProps } from './SearchField.types';
import { searchInList } from './utils';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import SearchFieldResult from '../SearchFieldResult/SearchFieldResult';

import styles from './SearchField.module.scss';

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      clearButtonTitle,
      defaultValue,
      description,
      helpSvgPath,
      helpText,
      label,
      titleHelpSvg,
      searchButtonTitle,
      variant = getCommonFormVariantDefault(),
      accessKey,
      disabled,
      form,
      name,
      placeholder,
      readOnly,
      value,
      hasSearchButtonIcon = getSearchFieldHasSearchButtonIconDefault(),
      hideLabel = getSearchFieldHideLabelDefault(),
      onBlur,
      onChange,
      onFocus,
      onSearch,
      onSearchClick,
      onClear,
      onResultClick,
      results,
    },
    ref
  ): JSX.Element => {
    const listboxRef = useRef<HTMLUListElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { t } = useTranslation('ds_forms', { i18n: dsI18n });

    const generatedId = useId();
    const searchFieldId = externalId ?? `searchField-${generatedId}`;
    const inputId = `${searchFieldId}-input`;
    const resultsId = `${searchFieldId}-results`;
    const srFocusId = `${searchFieldId}-srFocus`;
    const labelId = `${searchFieldId}-label`;

    const [shouldShowResults, setShowResults] = useState(false);
    const [showClearButton, setShowClearButton] = useState(
      !!defaultValue || !!value
    );
    const [currentFocus, setCurrentFocus] = useState<number>(-1);

    useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

    useEffect(() => {
      setShowResults(!!(!disabled && results?.length));
    }, [disabled, results]);

    useEffect(() => {
      if (!shouldShowResults) {
        return;
      }
      const handleOutsideMenuEvent: EventListener = (event): void => {
        const node = event.target as Node;
        if (!listboxRef?.current?.contains(node) && node !== inputRef.current) {
          setShowResults(false);
          setCurrentFocus(-1);
          event.type === 'click' && listboxRef?.current?.focus();
        }
      };

      document.addEventListener('focusin', handleOutsideMenuEvent);
      document.addEventListener('click', handleOutsideMenuEvent);
      return () => {
        document.removeEventListener('click', handleOutsideMenuEvent);
        document.removeEventListener('focusin', handleOutsideMenuEvent);
      };
    }, [shouldShowResults]);

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!shouldShowResults) {
        // slik at currentFocus ikke blir flyttet inn i lista hvis man trykker på piltaster og lista er lukket
        return;
      }
      const length = results?.length ?? 0;
      switch (e.key) {
        case 'Escape':
          setCurrentFocus(-1);
          setShowResults(false);
          inputRef.current?.focus();
          break;

        case 'ArrowUp':
          e.preventDefault();
          setCurrentFocus((currentFocus) =>
            currentFocus === 0 ? length - 1 : currentFocus - 1
          );
          break;
        case 'ArrowDown':
          e.preventDefault();
          setCurrentFocus((currentFocus) =>
            currentFocus === length - 1 ? 0 : currentFocus + 1
          );
          break;
      }
    };

    const isLarge = variant === 'large';
    const isExtraLarge = variant === 'extraLarge';
    const searchButtonClassName = `${styles.searchButton} ${
      isLarge ? styles.searchButton_large : ''
    } ${isExtraLarge ? styles.searchButton_extraLarge : ''}`.trim();
    const containerClassName = `${styles.topContainer} ${
      isLarge ? styles.topContainer_large : ''
    } ${isExtraLarge ? styles.topContainer_extraLarge : ''} ${className} ${
      classNames?.container ?? ''
    }`.trim();

    return (
      <div
        id={searchFieldId}
        className={containerClassName}
        lang={lang}
        onKeyDown={handleKeyDown}
      >
        <LabelWithHelp
          id={labelId}
          className={classNames?.label ?? ''}
          htmlFor={inputId}
          hideLabel={hideLabel}
          description={description}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          titleHelpSvg={titleHelpSvg}
        >
          {label}
        </LabelWithHelp>
        <div
          className={`${styles.searchContainer} ${
            classNames?.searchContainer ?? ''
          }`}
        >
          <div className={styles.inputWrapper}>
            <span id={srFocusId} className={styles.srOnly}>
              {t('searchfield.Focus')}
            </span>
            <input
              ref={inputRef}
              id={inputId}
              className={styles.input}
              data-testid={dataTestId}
              accessKey={accessKey}
              defaultValue={defaultValue}
              disabled={disabled}
              form={form}
              name={name}
              placeholder={placeholder}
              readOnly={readOnly}
              value={value}
              aria-describedby={srFocusId}
              aria-owns={shouldShowResults ? resultsId : undefined}
              type={'search'}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSearch?.(event);
                }
              }}
              onBlur={onBlur}
              onChange={(event) => {
                onChange?.(event);
                if (event.target.value.length) {
                  setShowClearButton(true);
                } else {
                  setShowClearButton(false);
                }
              }}
              onFocus={onFocus}
            />
            <span aria-live={'assertive'} className={styles.srOnly}>
              {shouldShowResults &&
                t('searchfield.NumberOfResults', {
                  ant: results?.length ?? 0,
                })}
            </span>
            {shouldShowResults && (
              <div>
                <ul
                  ref={listboxRef}
                  id={resultsId}
                  className={styles.searchResultContainer}
                  role={'listbox'}
                  aria-labelledby={labelId}
                >
                  {results?.map((result, index) => {
                    const hasFocus = currentFocus === index;
                    return (
                      <SearchFieldResult
                        key={result.description}
                        hasFocus={hasFocus}
                        aria-selected={hasFocus}
                        role={'option'}
                        title={result.title}
                        setFocus={setCurrentFocus}
                        index={index}
                        onClick={() => onResultClick?.(result)}
                      >
                        {result.description}
                      </SearchFieldResult>
                    );
                  })}
                </ul>
              </div>
            )}
            {showClearButton && !disabled && !readOnly && (
              <IconButton
                type={'reset'}
                className={styles.clearButton}
                size={variant === 'medium' ? 'extraSmall' : 'small'}
                svgPath={CancelSVGpath}
                title={clearButtonTitle ?? t('searchfield.ClearButtonTitle')}
                onClick={(event) => {
                  onClear?.(event);
                  setShowClearButton(false);
                  if (!value && inputRef.current) {
                    inputRef.current.value = '';
                  }
                  inputRef.current?.focus();
                }}
              />
            )}
          </div>
          {!readOnly && (
            <button
              className={searchButtonClassName}
              disabled={disabled}
              onClick={(event): void => {
                onSearchClick?.(event);
              }}
            >
              {hasSearchButtonIcon ? (
                <SearchIcon
                  className={styles.icon}
                  title={searchButtonTitle ?? t('searchfield.ButtonTitle')}
                />
              ) : (
                t('searchfield.ButtonTitle')
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
) as SearchFieldComponent;

SearchField.displayName = 'SearchField';
SearchField.Result = SearchFieldResult;
SearchField.Result.displayName = 'SearchField.Result';

export { searchInList, getSearchFieldHasSearchButtonIconDefault };
