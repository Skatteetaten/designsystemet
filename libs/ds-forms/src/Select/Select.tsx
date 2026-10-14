import {
  ChangeEvent,
  Children,
  isValidElement,
  ReactElement,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  JSX,
  useLayoutEffect,
} from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { ChevronDownIcon } from '@skatteetaten/ds-icons';

import { SelectComponent, SelectProps } from './Select.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { getAriaInvalid } from '../utils';
import { SelectOption } from './SelectOption/SelectOption';
import { SelectOptionProps } from './SelectOption/SelectOption.types';

import styles from './Select.module.scss';

export const getDefaultSelectPlaceholder = (): string =>
  dsI18n.t('Shared:shared.ChooseValue');

/**
 * Select
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/select)
 */
export const Select = ({
  ref,
  id: externalId,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  defaultValue,
  description,
  errorMessage,
  helpSvgPath,
  helpText,
  label,
  placeholder = getDefaultSelectPlaceholder(),
  readOnly,
  titleHelpSvg,
  value,
  ariaDescribedBy,
  autoComplete = 'off',
  disabled = false,
  form,
  name,
  required = false,
  hasSpacing = false,
  hideLabel = false,
  hidePlaceholder = false,
  onBlur,
  onChange,
  onFocus,
  onHelpToggle,
  children,
}: SelectProps): JSX.Element => {
  const isReadOnly = readOnly && !disabled;
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () =>
      (isReadOnly ? inputRef.current : selectRef.current) as HTMLSelectElement,
    [isReadOnly]
  );

  const errorId = `selectErrorId-${useId()}`;
  const generatedId = `selectId-${useId()}`;
  const descriptionId = `descId-${useId()}`;
  const fieldId = externalId ?? generatedId;

  /* Ved ukontrollert bruk ligger brukerens valg kun i DOM-en til select. Valget
   * lagres derfor i state slik at det ikke går tapt når readOnly slås på/av. */
  const [internalValue, setInternalValue] =
    useState<SelectProps['value']>(defaultValue);

  /* Synkroniserer internalValue med det select faktisk viser, f.eks. første
   * option når hidePlaceholder er satt og verken value eller defaultValue er gitt. */
  useLayoutEffect(() => {
    if (value === undefined && selectRef.current) {
      setInternalValue(selectRef.current.value);
    }
  }, [value, isReadOnly]);

  const resolvedAriaDescribedBy =
    [ariaDescribedBy, description && descriptionId, errorMessage && errorId]
      .filter(Boolean)
      .join(' ') || undefined;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const getOptionLabel = (): string => {
    const currentValue = value ?? internalValue;
    /* Bruker ikke falsy-sjekk (!currentValue) siden 0 kan være en gyldig verdi */
    if (currentValue === undefined || currentValue === '') {
      return '';
    }

    const option = Children.toArray(children).find(
      (child): child is ReactElement<SelectOptionProps> =>
        isValidElement<SelectOptionProps>(child) &&
        String(child.props.value) === String(currentValue)
    );

    return option?.props.children ?? '';
  };

  return (
    <div
      lang={lang}
      className={`${styles.wrapper} ${className} ${classNames?.container ?? ''}`.trim()}
      data-has-spacing={hasSpacing}
    >
      <LabelWithHelp
        classNames={classNames}
        htmlFor={fieldId}
        hideLabel={hideLabel}
        description={description}
        descriptionId={descriptionId}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
        disabled={disabled}
        onHelpToggle={onHelpToggle}
      >
        {label}
      </LabelWithHelp>
      <div
        className={`${styles.selectContainer} ${
          classNames?.selectContainer ?? ''
        }`.trim()}
      >
        {isReadOnly ? (
          <>
            <input
              ref={inputRef}
              id={fieldId}
              data-testid={dataTestId}
              className={`${styles.select} ${styles.textbox}`}
              form={form}
              required={required}
              value={getOptionLabel()}
              aria-describedby={resolvedAriaDescribedBy}
              aria-invalid={getAriaInvalid(errorMessage, required)}
              readOnly
            />
            {name && (
              <input
                type={'hidden'}
                form={form}
                name={name}
                value={value}
                defaultValue={value === undefined ? internalValue : undefined}
              />
            )}
          </>
        ) : (
          <>
            <select
              ref={selectRef}
              id={fieldId}
              data-testid={dataTestId}
              className={styles.select}
              autoComplete={autoComplete}
              disabled={disabled}
              form={form}
              name={name}
              required={required}
              value={value}
              /* internalValue beholder brukerens valg når select mountes på nytt etter readOnly */
              defaultValue={value === undefined ? internalValue : undefined}
              aria-describedby={resolvedAriaDescribedBy}
              aria-invalid={getAriaInvalid(errorMessage, required)}
              onBlur={onBlur}
              onChange={handleChange}
              onFocus={onFocus}
            >
              {!hidePlaceholder && <option value={''}>{placeholder}</option>}
              {children}
            </select>
            <ChevronDownIcon className={styles.selectIcon} />
          </>
        )}
      </div>
      <ErrorMessage
        id={errorId}
        showError={!!errorMessage}
        className={classNames?.errorMessage}
      >
        {errorMessage ?? ''}
      </ErrorMessage>
    </div>
  );
};

export default Select as SelectComponent;

Select.displayName = 'Select';
Select.Option = SelectOption;
Select.Option.displayName = 'Select.Option';
