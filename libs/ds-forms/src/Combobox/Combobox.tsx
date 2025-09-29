import {
  useEffect,
  useMemo,
  useCallback,
  useImperativeHandle,
  type JSX,
} from 'react';

import {
  getSelectedValuesFromValue,
  getSearchTermFromValue,
} from './combobox-utils';
import type { ComboboxProps, ComboboxComponent } from './Combobox.types';
import { ComboboxAccessibilityAnnouncer } from './ComboboxAccessibilityAnnouncer/ComboboxAccessibilityAnnouncer';
import { ComboboxButton } from './ComboboxButton/ComboboxButton';
import { ComboboxInputContainer } from './ComboboxInputContainer';
import { ComboboxInputField } from './ComboboxInputField/ComboboxInputField';
import { ComboboxOptions } from './ComboboxOptions/ComboboxOptions';
import { ComboboxWrapper } from './ComboboxWrapper';
import {
  getComboboxPlaceholderDefault,
  getComboboxLoadingMessageDefault,
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
    options,
    value,
    onSelectionChange,
    placeholder = getComboboxPlaceholderDefault(),
    variant,
    multiple = false,
    label,
    hideLabel = false,
    description,
    required,
    minSearchLength = 0,
    isLoading = false,
    loadingMessage = getComboboxLoadingMessageDefault(),
    onInputChange,
    onBlur,
    onFocus,
    onHelpToggle,
    classNames,
    hasSpacing = false,
    disabled = false,
    name,
    errorMessage,
    spinnerProps,
    helpText,
    helpSvgPath,
    titleHelpSvg,
    id,
    className,
    'data-testid': dataTestId,
    lang,

    ...htmlAttributes
  } = props;
  const { safeFocus } = useBrowserCompatibility();

  // Resolve variant with smart defaults
  // Multi-select ALWAYS uses 'large' variant for chip display space
  const resolvedVariant = multiple
    ? 'large' // Required for multi-select chips
    : (variant ?? 'medium'); // Default single-select size

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

  // displayOptions is now calculated inside useComboboxCore for better performance

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

  const focusedOptionId = useMemo(
    () =>
      focusedIndex >= 0 ? `${comboboxId}-option-${focusedIndex}` : undefined,
    [focusedIndex, comboboxId]
  );

  const ariaDescribedBy = useMemo(
    () => [errorMessage && errorId].filter(Boolean).join(' ') || undefined,
    [errorMessage, errorId]
  );

  const containerClassNames = useMemo(() => {
    let className = styles.inputContainer;

    if (label && !hideLabel) {
      className += ` ${styles.inputContainerMarginTop}`;
    }

    if (multiple) {
      className += ` ${styles.inputContainerMultiple}`;
    }

    if (resolvedVariant === 'large') {
      className += ` ${styles.inputContainer_large}`;
    }

    return className;
  }, [label, hideLabel, multiple, resolvedVariant]);

  return (
    <ComboboxWrapper
      hasSpacing={hasSpacing}
      className={`${classNames?.container || ''} ${className || ''}`.trim()}
    >
      <LabelWithHelp
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

      <ComboboxInputContainer
        className={containerClassNames}
        disabled={disabled}
        handleContainerClick={handleContainerClick}
        handleContainerKeyDown={handleContainerKeyDown}
      >
        <div className={styles.inputContentArea}>
          <ComboboxChips
            multiple={multiple}
            selectedValues={selectedValues}
            classNames={classNames}
            onRemoveValue={handleRemoveValue}
          />

          <ComboboxInputField
            inputRef={inputRef}
            comboboxId={comboboxId}
            searchTerm={searchTerm}
            placeholder={placeholder}
            disabled={disabled}
            required={required || false}
            isOpen={isOpen}
            listId={listId}
            focusedOptionId={focusedOptionId}
            ariaDescribedBy={ariaDescribedBy}
            errorMessage={errorMessage}
            isLoading={isLoading}
            multiple={multiple}
            selectedValues={selectedValues}
            classNames={classNames}
            name={name}
            handleInputChange={handleInputChange}
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
            data-testid={dataTestId}
            lang={lang}
            htmlAttributes={htmlAttributes}
          />
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
      </ComboboxInputContainer>

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
    </ComboboxWrapper>
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
