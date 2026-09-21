import { useContext, useId, JSX, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n } from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from './Checkbox.types';
import { CheckboxContext } from '../CheckboxGroup/CheckboxContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { getAriaInvalid } from '../utils';

import styles from './Checkbox.module.scss';

/**
 * Checkbox
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/checkbox)
 */
export const Checkbox = ({
  ref,
  id: idExternal,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  description,
  errorMessage,
  checked,
  defaultChecked,
  disabled = false,
  form,
  name,
  readOnly = false,
  required = false,
  value,
  ariaDescribedby,
  hasSpacing = false,
  hideLabel = false,
  onChange,
  onBlur,
  onFocus,
  children,
}: CheckboxProps): JSX.Element => {
  const { t } = useTranslation('Shared', { i18n: dsI18n });
  const context = useContext(CheckboxContext);
  const errorIdExternal = context?.errorId;

  const uniqueInputId = `checkboxInputId-${useId()}`;
  const inputIdInternal = idExternal ?? uniqueInputId;
  const uniqueErrorId = `checkboxErrorId-${useId()}`;
  const errorIdInternal = errorIdExternal ?? uniqueErrorId;
  const descriptionId = `descId-${useId()}`;
  const isControlled = checked !== undefined;
  const isChecked = checked ?? defaultChecked ?? false;
  const hasErrorInternal =
    errorIdExternal && !isChecked ? true : !!errorMessage;

  const ariaDescribedbyInput = [
    description && descriptionId,
    ariaDescribedby,
    hasErrorInternal && errorIdInternal,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (
      (context?.readOnly || readOnly) &&
      (event.key === ' ' ||
        event.key === 'Enter' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight')
    ) {
      event.preventDefault();
    }
  };

  return (
    <div
      className={`${styles.container} ${className}`.trim()}
      lang={lang}
      data-has-spacing={hasSpacing}
    >
      <div className={styles.checkbox}>
        <input
          ref={ref}
          id={inputIdInternal}
          className={styles.checkboxInput}
          data-testid={dataTestId}
          {...(isControlled ? { checked } : { defaultChecked })}
          disabled={disabled}
          form={form}
          name={name}
          required={required}
          type={'checkbox'}
          value={value}
          data-read-only={readOnly || context?.readOnly || undefined}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={getAriaInvalid(
            errorMessage || errorIdExternal,
            required
          )}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onKeyDown={handleKeyDown}
        />
        <label
          htmlFor={inputIdInternal}
          className={`${styles.checkboxLabel} ${hideLabel ? styles.srOnly : ''} ${
            classNames?.label ?? ''
          }`.trim()}
        >
          <span>
            {children}
            {(readOnly || context?.readOnly) && (
              <span
                className={styles.srOnly}
              >{`, ${t('shared.ReadOnly')}`}</span>
            )}
          </span>
          {description && (
            <>
              &nbsp;
              <span
                id={descriptionId}
                className={styles.checkboxLabelDescription}
              >
                {description}
              </span>
            </>
          )}
        </label>
      </div>
      {!context && (
        <ErrorMessage
          id={errorIdInternal}
          className={classNames?.errorMessage}
          showError={hasErrorInternal}
        >
          {errorMessage}
        </ErrorMessage>
      )}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
