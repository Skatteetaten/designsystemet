import {
  useEffect,
  useMemo,
  useCallback,
  useImperativeHandle,
  type JSX,
} from 'react';

import {
  getCommonClassNameDefault,
  getHasSpacingDefault,
} from '@skatteetaten/ds-core-utils';

import {
  getSelectedValuesFromValue,
  getSearchTermFromValue,
} from './combobox-utils';
import type { ComboboxProps, ComboboxComponent } from './Combobox.types';
import { ComboboxAccessibilityAnnouncer } from './ComboboxAccessibilityAnnouncer';
import { ComboboxButton } from './ComboboxButton';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import {
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
  getCombobboxMinSearchLengthDefault,
  getComboboxIsMultiSelectDefault,
  getComboboxIsLoadingDefault,
} from './defaults';
import { useBrowserCompatibility } from './hooks/useBrowserCompatibility';
import { useComboboxCore } from './hooks/useComboboxCore';
import { useComboboxInput } from './hooks/useComboboxInput';
import { useComboboxKeyboard } from './hooks/useComboboxKeyboard';
import { useComboboxSelection } from './hooks/useComboboxSelection';
import { ComboboxChips } from './SelectedOptions/SelectedOptions';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './Combobox.module.scss';

// eslint-disable-next-line jsdoc/require-returns, jsdoc/require-param
/**
 * Combobox allows users to select from a list of predefined options with search functionality.
 * Supports both single and multi-select modes, with controlled and uncontrolled variants.
 *
 * ## Single Select Usage:
 * - **Uncontrolled**: Omit `value` prop, use `onSelectionChange` for selection events
 * - **Controlled**: Provide `value` prop, use `onSelectionChange` to update state
 * - **With search**: Use `onInputChange` for live search/filtering functionality
 *
 * ## Multi Select Usage:
 * - Set `multiple={true}` prop
 * - **Uncontrolled**: Omit `value` prop, use `onSelectionChange` for selection events
 * - **Controlled**: Provide `value` as array, use `onSelectionChange` to update state
 * - Automatically uses 'large' variant for chip display space
 */
const Combobox = ((props: Readonly<ComboboxProps>): JSX.Element => {
  const {
    ref,
    id,
    className = getCommonClassNameDefault(),
    lang,
    'data-testid': dataTestId,
    classNames,
    description,
    errorMessage,
    hasSpacing = getHasSpacingDefault(),
    helpSvgPath,
    helpText,
    hideLabel,
    isLoading = getComboboxIsLoadingDefault(),
    label,
    loadingMessage = getComboboxLoadingMessageDefault(),
    minSearchLength = getCombobboxMinSearchLengthDefault(),
    multiple = getComboboxIsMultiSelectDefault(),
    options,
    placeholder = getComboboxPlaceholderDefault(),
    spinnerProps,
    titleHelpSvg,
    value,
    variant,
    name,
    disabled,
    required,
    onBlur,
    onFocus,
    onHelpToggle,
    onInputChange,
    onSelectionChange,

    ...htmlAttributes
  } = props;
  const { safeFocus } = useBrowserCompatibility();

  const resolvedVariant = multiple ? 'large' : (variant ?? 'medium');

  // Extract maxSelected safely from union type props
  // Only available in multi-select mode, undefined otherwise
  const maxSelected = useMemo(() => {
    return multiple && 'maxSelected' in props
      ? (props as { maxSelected?: number }).maxSelected // Type assertion needed for union
      : undefined; // Single-select has no limit
  }, [multiple, props]);

  // UNIFIED CORE HOOK - consolidates dropdown + focus + state management
  const coreState = useComboboxCore({
    options,
    multiple,
    value,
    minSearchLength,
    htmlAttributes: { id },
    isLoading,
    safeFocus,
    maxSelected,
  });

  // Extract everything we need from unified core state
  const {
    searchTerm,
    setSearchTerm,
    selectedValues,
    setSelectedValues,
    isOpen,
    focusedIndex,
    setFocusedIndex,
    enabledIndices,
    displayOptions,
    inputRef,
    containerRef,
    comboboxId,
    listId,
    errorId,
    openDropdown,
    closeDropdown,
    handleChevronClick,
    handleContainerClick,
    handleContainerKeyDown,
    handleButtonFocus,
  } = coreState;

  // Expose the input element to parent component via ref prop
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, [
    inputRef,
  ]);

  // Use selection handlers hook
  const { handleRemoveLastValue, handleOptionSelect, handleRemoveValue } =
    useComboboxSelection({
      multiple,
      selectedValues,
      setSelectedValues,
      setSearchTerm,
      closeDropdown,
      setFocusedIndex,
      inputRef,
      onSelectionChange,
      maxSelected,
    });

  // Use input handlers hook
  const {
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    handleClearValue,
  } = useComboboxInput({
    multiple,
    setSelectedValues,
    setSearchTerm,
    openDropdown,
    closeDropdown,
    inputRef,
    onSelectionChange,
    onInputChange,
    onBlur,
    onFocus,
    value,
  });

  // Memoize keyboard dropdown handler to prevent unnecessary re-creations
  const keyboardOpenDropdown = useCallback(() => {
    const currentValue = inputRef.current?.value || '';
    openDropdown(currentValue, 'keyboard');
  }, [openDropdown, inputRef]);

  // Keyboard navigation hook
  useComboboxKeyboard({
    isOpen,
    allOptions: options,
    displayOptions,
    enabledIndices,
    focusedIndex,
    setFocusedIndex,
    openDropdown: keyboardOpenDropdown,
    closeDropdown,
    setSearchTerm,
    inputRef,
    minSearchLength,
    onSelectionChange,
    multiple,
    selectedValues,
    onRemoveLastValue: handleRemoveLastValue,
    onOptionSelect: handleOptionSelect,
  });

  // Update selected values for multi-select when external value changes
  useEffect(() => {
    if (multiple && Array.isArray(value)) {
      setSelectedValues(getSelectedValuesFromValue(value, options, multiple));
      setSearchTerm(''); // Keep search field clear in multi-select mode
    } else if (!multiple && value !== undefined) {
      // In controlled single mode, update searchTerm when value changes
      setSearchTerm(getSearchTermFromValue(value, options, multiple));
    }
  }, [value, multiple, options, setSearchTerm, setSelectedValues]);

  const focusedOptionId =
    focusedIndex >= 0 ? `${comboboxId}-option-${focusedIndex}` : undefined;

  const ariaDescribedBy =
    [errorMessage && errorId].filter(Boolean).join(' ') || undefined;

  let containerClassNames = styles.inputContainer;

  if (label && !hideLabel) {
    containerClassNames += ` ${styles.inputContainerMarginTop}`;
  }

  if (multiple) {
    containerClassNames += ` ${styles.inputContainerMultiple}`;
  }

  if (resolvedVariant === 'large') {
    containerClassNames += ` ${styles.inputContainer_large}`;
  }

  return (
    <div
      lang={lang}
      data-has-spacing={hasSpacing}
      className={`${styles.comboboxWrapper} ${classNames?.container || ''} ${className || ''}`.trim()}
    >
      <LabelWithHelp
        classNames={classNames}
        htmlFor={comboboxId}
        hideLabel={hideLabel}
        description={description}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
        onHelpToggle={onHelpToggle}
      >
        {label}
      </LabelWithHelp>
      <div
        className={containerClassNames}
        onClick={!disabled ? handleContainerClick : undefined}
        onKeyDown={!disabled ? handleContainerKeyDown : undefined}
      >
        <div className={styles.inputContentArea}>
          <ComboboxChips
            multiple={multiple}
            selectedValues={selectedValues}
            classNames={classNames}
            onRemoveValue={handleRemoveValue}
          />
          <input
            ref={inputRef}
            id={comboboxId}
            type={'text'}
            value={searchTerm}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            role={'combobox'}
            className={`${styles.input} ${classNames?.input || ''}`}
            aria-expanded={isOpen}
            aria-autocomplete={'list'}
            aria-controls={listId}
            aria-activedescendant={focusedOptionId}
            aria-describedby={ariaDescribedBy}
            aria-invalid={!!errorMessage || undefined}
            aria-busy={isLoading || undefined}
            data-testid={dataTestId}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...(multiple ? { name: undefined } : { name })}
            {...htmlAttributes}
          />
          {/* Hidden inputs for form submission in multiple mode */}
          {multiple &&
            selectedValues.map((selectedValue) => (
              <input
                key={selectedValue.value}
                type={'hidden'}
                name={name}
                value={selectedValue.value}
              />
            ))}
        </div>
        <div className={styles.inputButtonArea}>
          <ComboboxButton
            isOpen={isOpen}
            hasValue={!multiple && !!searchTerm}
            multiple={multiple}
            disabled={disabled}
            variant={resolvedVariant}
            onClear={!multiple ? handleClearValue : undefined}
            onClick={handleChevronClick}
          />
        </div>
      </div>
      <ComboboxAccessibilityAnnouncer
        comboboxId={comboboxId}
        isLoading={isLoading}
        loadingMessage={loadingMessage}
        isOpen={isOpen}
        displayOptions={displayOptions}
        searchTerm={searchTerm}
      />
      <ComboboxOptions
        isOpen={isOpen}
        isLoading={isLoading}
        loadingMessage={loadingMessage}
        spinnerProps={spinnerProps}
        displayOptions={displayOptions}
        searchTerm={searchTerm}
        multiple={multiple}
        selectedValues={selectedValues}
        comboboxId={comboboxId}
        listId={listId}
        focusedIndex={focusedIndex}
        classNames={classNames}
        handleButtonFocus={handleButtonFocus}
        handleOptionSelect={handleOptionSelect}
        setFocusedIndex={setFocusedIndex}
        customListRef={containerRef}
        hasError={!!errorMessage}
        maxSelected={maxSelected}
      />
      <ErrorMessage
        id={errorId}
        showError={!!errorMessage}
        className={classNames?.errorMessage}
      >
        {errorMessage}
      </ErrorMessage>
    </div>
  );
}) as ComboboxComponent;

Combobox.displayName = 'Combobox';

Combobox.Button = ComboboxButton;
Combobox.Button.displayName = 'Combobox.Button';

Combobox.Chips = ComboboxChips;
Combobox.Chips.displayName = 'Combobox.Chips';

Combobox.Options = ComboboxOptions;
Combobox.Options.displayName = 'Combobox.Options';

export {
  Combobox,
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
};
