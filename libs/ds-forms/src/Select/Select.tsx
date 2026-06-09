import {
  ChangeEvent,
  useId,
  useImperativeHandle,
  useRef,
  JSX,
  useLayoutEffect,
} from 'react';
import { ChevronDownIcon } from '@skatteetaten/ds-icons';

import { getSelectPlaceholderDefault } from './defaults';
import { SelectComponent, SelectProps } from './Select.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { getAriaInvalid } from '../utils';
import { SelectOption } from './SelectOption/SelectOption';

import styles from './Select.module.scss';

/**
 * Select
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-select--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/select/) - Brukerveiledning
 */
export const Select = (({
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
  placeholder = getSelectPlaceholderDefault(),
  titleHelpSvg,
  value,
  ariaDescribedBy,
  autoComplete,
  disabled,
  form,
  name,
  required,
  hasSpacing,
  hideLabel,
  hidePlaceholder,
  onBlur,
  onChange,
  onFocus,
  onHelpToggle,
  children,
}: SelectProps): JSX.Element => {
  const selectRef = useRef<HTMLSelectElement>(null);
  useImperativeHandle(ref, () => selectRef?.current as HTMLSelectElement);

  const errorId = `selectErrorId-${useId()}`;
  const generatedId = `selectId-${useId()}`;
  const descriptionId = `descId-${useId()}`;
  const selectId = externalId ?? generatedId;

  const placeholderPaletteGraphite50 = 'var(--palette-graphite-50)';
  useLayoutEffect(() => {
    changePlaceholderColor();
    // eslint-disable-next-line
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    changePlaceholderColor();
    onChange?.(e);
  };

  const changePlaceholderColor = (): void => {
    if (!hidePlaceholder) {
      const select = selectRef.current as HTMLSelectElement;
      if (select.value.length === 0) {
        select.style.color = placeholderPaletteGraphite50;
      } else {
        select.style.color = '';
      }
    }
  };

  return (
    <div
      lang={lang}
      className={`${styles.wrapper} ${className} ${classNames?.container ?? ''}`.trim()}
      data-has-spacing={hasSpacing}
    >
      <LabelWithHelp
        classNames={classNames}
        htmlFor={selectId}
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
        className={`${styles.selectContainer} ${label && !hideLabel ? styles.selectContainerMarginTop : ''} ${
          classNames?.selectContainer ?? ''
        }`.trim()}
      >
        <select
          ref={selectRef}
          id={selectId}
          className={styles.select}
          data-testid={dataTestId}
          autoComplete={autoComplete}
          disabled={disabled}
          form={form}
          name={name}
          required={required}
          value={value}
          defaultValue={defaultValue}
          aria-describedby={
            [
              ariaDescribedBy,
              description && descriptionId,
              errorMessage && errorId,
            ]
              .filter(Boolean)
              .join(' ') || undefined
          }
          aria-invalid={getAriaInvalid(errorMessage, required)}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
        >
          {!hidePlaceholder && <option value={''}>{placeholder}</option>}
          {children}
        </select>
        <ChevronDownIcon className={styles.selectIcon} />
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
}) as SelectComponent;

Select.displayName = 'Select';
Select.Option = SelectOption;
Select.Option.displayName = 'Select.Option';
