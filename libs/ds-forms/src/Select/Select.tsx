import {
  ChangeEvent,
  Children,
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
  const placeholderPaletteGraphite50 = 'var(--palette-graphite-50)';

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
  }, [value, isReadOnly, hidePlaceholder]);

  useLayoutEffect(() => {
    changePlaceholderColor();
    // eslint-disable-next-line
  }, [value, isReadOnly, hidePlaceholder]);

  const resolvedAriaDescribedBy =
    [ariaDescribedBy, description && descriptionId, errorMessage && errorId]
      .filter(Boolean)
      .join(' ') || undefined;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    changePlaceholderColor();
    onChange?.(e);
  };

  const changePlaceholderColor = (): void => {
    const select = selectRef.current;
    if (!select) {
      return;
    }

    if (!hidePlaceholder) {
      if (select.value.length === 0) {
        select.style.color = placeholderPaletteGraphite50;
      } else {
        select.style.color = '';
      }
    } else {
      select.style.color = '';
    }
  };

  const getOptionLabel = (): string => {
    const selected = value ?? internalValue;
    /* Bruker ikke falsy-sjekk (!selected) siden 0 kan være en gyldig verdi */
    if (selected === undefined || selected === '') {
      return '';
    }

    const options = Children.toArray(
      children
    ) as ReactElement<SelectOptionProps>[];
    const selectedOption = options.find(
      (option) => String(option.props?.value) === String(selected)
    );
    return selectedOption?.props.children ?? '';
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
