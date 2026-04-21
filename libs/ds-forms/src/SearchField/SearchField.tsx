import {
  ChangeEvent,
  useId,
  useState,
  JSX,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useEffectEvent,
  useRef,
  useImperativeHandle,
} from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
  getCommonAutoCompleteDefault,
} from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, SearchIcon } from '@skatteetaten/ds-icons';

import {
  getEnableSRNavigationHintDefault,
  getSearchFieldHasSearchButtonIconDefault,
  getSearchFieldHideLabelDefault,
} from './defaults';
import { SearchFieldComponent, SearchFieldProps } from './SearchField.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { getAriaInvalid } from '../utils';
import SearchFieldResult from './SearchFieldResult/SearchFieldResult';

import styles from './SearchField.module.scss';

/**
 * SearchField
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-searchfield--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/searchfield/) - Brukerveiledning
 */
export const SearchField = (({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  clearButtonTitle,
  defaultValue,
  description,
  errorMessage,
  helpSvgPath,
  helpText,
  label,
  titleHelpSvg,
  searchButtonTitle,
  variant = getCommonFormVariantDefault(),
  ariaDescribedBy,
  autoComplete = getCommonAutoCompleteDefault(),
  accessKey,
  disabled,
  form,
  name,
  placeholder,
  readOnly,
  required,
  showRequiredMark,
  value,
  enableSRNavigationHint = getEnableSRNavigationHintDefault(),
  hasSearchButtonIcon = getSearchFieldHasSearchButtonIconDefault(),
  hasSpacing,
  hideLabel = getSearchFieldHideLabelDefault(),
  onBlur,
  onChange,
  onFocus,
  onHelpToggle,
  onSearch,
  onSearchClick,
  onClear,
  onResultClick,
  results,
}: SearchFieldProps): JSX.Element => {
  const listboxRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { t } = useTranslation('ds_forms', { i18n: dsI18n });

  const generatedId = useId();
  const searchFieldId = externalId ?? `searchField-${generatedId}`;
  const descriptionId = `descId-${useId()}`;
  const errorId = `searchFieldErrorId-${useId()}`;
  const inputId = `${searchFieldId}-input`;
  const resultsId = `${searchFieldId}-results`;
  const srFocusId = `${searchFieldId}-srFocus`;
  const labelId = `${searchFieldId}-label`;
  const defaultSearchTerm = defaultValue?.toString() ?? '';

  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    value?.toString() ?? defaultSearchTerm
  );
  const [focusedResultIndex, setFocusedResultIndex] = useState<number>(-1);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? (value?.toString() ?? '') : searchTerm;
  const describedBy =
    [
      ariaDescribedBy,
      description && descriptionId,
      errorMessage && errorId,
      enableSRNavigationHint && srFocusId,
    ]
      .filter(Boolean)
      .join(' ')
      .trim() || undefined;
  const showClearButton = !!currentValue;
  const resultCount = results?.length ?? 0;
  const showNoResults = resultCount === 0;

  useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);

  useEffect(() => {
    if (isControlled) {
      setSearchTerm(value?.toString() ?? '');
    }
  }, [isControlled, value]);

  useEffect(() => {
    if (isControlled) {
      return;
    }

    const formElement = inputRef.current?.form;
    if (!formElement) {
      return;
    }

    const handleReset = (): void => {
      setSearchTerm(defaultSearchTerm);
    };

    formElement.addEventListener('reset', handleReset);
    return (): void => {
      formElement.removeEventListener('reset', handleReset);
    };
  }, [defaultSearchTerm, isControlled, form]);

  const updateShowResults = useEffectEvent(() => {
    const shouldOpenResults = !!(
      !disabled &&
      results !== undefined &&
      document.activeElement === inputRef?.current
    );

    if (shouldOpenResults !== isResultsOpen) {
      setIsResultsOpen(shouldOpenResults);
    }
  });

  useEffect(() => {
    updateShowResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, results]);

  useEffect(() => {
    if (!isResultsOpen) {
      setFocusedResultIndex(-1);
      return;
    }

    const handleOutsideMenuEvent: EventListener = (event): void => {
      const node = event.target as Node;
      if (node === inputRef.current) {
        setFocusedResultIndex(-1);
      }
      if (!listboxRef?.current?.contains(node) && node !== inputRef.current) {
        setIsResultsOpen(false);
        event.type === 'click' && listboxRef?.current?.focus();
      }
    };

    document.addEventListener('focusin', handleOutsideMenuEvent);
    document.addEventListener('click', handleOutsideMenuEvent);
    return (): void => {
      document.removeEventListener('click', handleOutsideMenuEvent);
      document.removeEventListener('focusin', handleOutsideMenuEvent);
    };
  }, [isResultsOpen]);

  const handleResultsKeyDown = (event: KeyboardEvent): void => {
    if (!isResultsOpen) {
      // slik at currentFocus ikke blir flyttet inn i lista hvis man trykker på piltaster og lista er lukket
      return;
    }

    switch (event.key) {
      case 'Escape':
        setFocusedResultIndex(-1);
        setIsResultsOpen(false);
        inputRef.current?.focus();
        break;

      case 'ArrowUp':
        event.preventDefault();
        setFocusedResultIndex((currentFocus) =>
          currentFocus === 0 ? resultCount - 1 : currentFocus - 1
        );
        break;

      case 'ArrowDown':
        event.preventDefault();
        setFocusedResultIndex((currentFocus) =>
          currentFocus === resultCount - 1 ? 0 : currentFocus + 1
        );
        break;
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      onSearch?.(event, currentValue);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event);
    setSearchTerm(event.target.value);
  };

  const handleClearClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onClear?.(event);
    setSearchTerm('');

    if (!isControlled && inputRef.current) {
      inputRef.current.value = '';
    }

    inputRef.current?.focus();
  };

  const handleSearchClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onSearchClick?.(event, currentValue);
  };

  const isLarge = variant === 'large';
  const isExtraLarge = variant === 'extraLarge';
  const hasVisibleLabel = !!label && !hideLabel;
  const clearButtonSize = variant === 'medium' ? 'extraSmall' : 'small';
  const resolvedClearButtonTitle =
    clearButtonTitle ?? t('searchfield.ClearButtonTitle');
  const resolvedSearchButtonTitle =
    searchButtonTitle ?? t('searchfield.ButtonTitle');

  const searchButtonClassName = `${styles.searchButton} ${
    isLarge ? styles.searchButton_large : ''
  } ${isExtraLarge ? styles.searchButton_extraLarge : ''}`.trim();
  const containerClassName = `${styles.topContainer} ${
    isLarge ? styles.topContainer_large : ''
  } ${isExtraLarge ? styles.topContainer_extraLarge : ''} ${className} ${
    classNames?.container ?? ''
  }`.trim();
  const searchContainerClassName = `${styles.searchContainer} ${
    hasVisibleLabel ? styles.searchContainerMarginTop : ''
  } ${classNames?.searchContainer ?? ''}`.trim();
  const inputClassName = `${styles.input} ${classNames?.textbox ?? ''} ${
    showClearButton && !disabled ? styles.inputWithValue : ''
  }`.trim();
  const resultsListClassName = `${styles.searchResultContainer} ${
    classNames?.searchResultsList ?? ''
  }`.trim();

  const screenReaderMessage =
    resultCount > 0
      ? t('searchfield.NumberOfResults', { ant: resultCount })
      : t('combobox.NoResults', { searchTerm: currentValue });

  return (
    <div
      id={searchFieldId}
      className={containerClassName}
      lang={lang}
      data-has-spacing={hasSpacing}
      onKeyDown={handleResultsKeyDown}
    >
      <LabelWithHelp
        id={labelId}
        classNames={classNames}
        htmlFor={inputId}
        hideLabel={hideLabel}
        description={description}
        descriptionId={descriptionId}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
        showRequiredMark={showRequiredMark}
        disabled={disabled}
        onHelpToggle={onHelpToggle}
      >
        {label}
      </LabelWithHelp>
      <div className={searchContainerClassName}>
        <div className={styles.inputWrapper}>
          {enableSRNavigationHint && (
            <span id={srFocusId} className={styles.srOnly}>
              {t('searchfield.Focus')}
            </span>
          )}
          <input
            ref={inputRef}
            id={inputId}
            className={inputClassName}
            data-testid={dataTestId}
            accessKey={accessKey}
            disabled={disabled}
            form={form}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            defaultValue={defaultValue}
            value={isControlled ? currentValue : undefined}
            autoComplete={autoComplete}
            required={required}
            aria-describedby={describedBy}
            aria-invalid={getAriaInvalid(errorMessage, required)}
            aria-owns={isResultsOpen ? resultsId : undefined}
            type={'search'}
            onKeyDown={handleInputKeyDown}
            onBlur={onBlur}
            onChange={handleInputChange}
            onFocus={onFocus}
          />
          <span aria-live={'polite'} className={styles.srOnly}>
            {isResultsOpen && screenReaderMessage}
          </span>
          {isResultsOpen && (
            <ul
              ref={listboxRef}
              id={resultsId}
              className={resultsListClassName}
              role={'listbox'}
              aria-labelledby={labelId}
              // Prevents parent tabIndex scopes from blocking scrollbar clicks in the results list
              tabIndex={-1}
            >
              {showNoResults && (
                <li
                  role={'option'}
                  aria-selected={'false'}
                  aria-disabled={'true'}
                  className={styles.emptyResult}
                >
                  {t('combobox.NoResults', {
                    searchTerm: currentValue,
                  })}
                </li>
              )}
              {results?.map((result, index) => {
                return (
                  <SearchFieldResult
                    key={result.key ?? result.description}
                    className={classNames?.searchResult}
                    hasFocus={focusedResultIndex === index}
                    title={result.title}
                    setFocus={setFocusedResultIndex}
                    index={index}
                    onClick={() => onResultClick?.(result)}
                  >
                    {result.description}
                  </SearchFieldResult>
                );
              })}
            </ul>
          )}
          {showClearButton && !disabled && !readOnly && (
            <IconButton
              className={styles.clearButton}
              size={clearButtonSize}
              svgPath={CancelSVGpath}
              title={resolvedClearButtonTitle}
              onClick={handleClearClick}
            />
          )}
        </div>
        {!readOnly && (
          <button
            type={'button'}
            className={searchButtonClassName}
            disabled={disabled}
            onClick={handleSearchClick}
          >
            {hasSearchButtonIcon ? (
              <SearchIcon
                className={styles.icon}
                title={resolvedSearchButtonTitle}
                size={isLarge || isExtraLarge ? 'large' : 'medium'}
              />
            ) : (
              resolvedSearchButtonTitle
            )}
          </button>
        )}
      </div>
      <ErrorMessage
        id={errorId}
        showError={!!errorMessage}
        className={classNames?.errorMessage}
      >
        {errorMessage}
      </ErrorMessage>
    </div>
  );
}) as SearchFieldComponent;

SearchField.displayName = 'SearchField';
SearchField.Result = SearchFieldResult;
SearchField.Result.displayName = 'SearchField.Result';
