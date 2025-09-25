import {
  type RefObject,
  type ChangeEvent,
  type FocusEvent,
  JSX,
  memo,
} from 'react';

import styles from '../Combobox.module.scss';
import type {
  ComboboxOption,
  ComboboxPropsHTMLAttributes,
} from '../Combobox.types';

interface ComboboxInputFieldProps {
  inputRef: RefObject<HTMLInputElement | null>;
  comboboxId: string;
  searchTerm: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  isOpen: boolean;
  listId: string;
  focusedOptionId: string | undefined;
  ariaDescribedBy: string | undefined;
  errorMessage?: string;
  isLoading: boolean;
  multiple: boolean;
  selectedValues: ComboboxOption[];
  classNames?: {
    input?: string;
  };
  name?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (e: FocusEvent<HTMLInputElement>) => void;
  htmlAttributes: ComboboxPropsHTMLAttributes;
}

const ComboboxInputFieldComponent = ({
  inputRef,
  comboboxId,
  searchTerm,
  placeholder,
  disabled,
  required,
  isOpen,
  listId,
  focusedOptionId,
  ariaDescribedBy,
  errorMessage,
  isLoading,
  multiple,
  selectedValues,
  classNames,
  name,
  handleInputChange,
  handleInputFocus,
  handleInputBlur,
  htmlAttributes,
}: ComboboxInputFieldProps): JSX.Element => (
  <>
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
      aria-owns={listId}
      aria-activedescendant={focusedOptionId}
      aria-describedby={ariaDescribedBy}
      aria-invalid={!!errorMessage || undefined}
      aria-busy={isLoading || undefined}
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
  </>
);

export const ComboboxInputField = memo(ComboboxInputFieldComponent);
