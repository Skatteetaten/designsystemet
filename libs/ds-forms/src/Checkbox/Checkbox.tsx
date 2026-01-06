import { useContext, useId, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from './Checkbox.types';
import { CheckboxContext } from '../CheckboxGroup/CheckboxContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './Checkbox.module.scss';

export const Checkbox = ({
  ref,
  id: idExternal,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  description,
  errorMessage,
  checked,
  defaultChecked,
  disabled,
  form,
  name,
  readOnly,
  required,
  value,
  ariaDescribedby,
  hasSpacing,
  hideLabel,
  showRequiredMark,
  onChange,
  onBlur,
  onFocus,
  children,
}: CheckboxProps): JSX.Element => {
  const { t } = useTranslation('Shared', { i18n: dsI18n });
  useValidateFormRequiredProps({ required, showRequiredMark });
  const context = useContext(CheckboxContext);
  const errorIdExternal = context?.errorId;

  const uniqueInputId = `checkboxInputId-${useId()}`;
  const inputIdInternal = idExternal ?? uniqueInputId;
  const uniqueErrorId = `checkboxErrorId-${useId()}`;
  const errorIdInternal = errorIdExternal ?? uniqueErrorId;
  const descriptionId = `descId-${useId()}`;
  const hasErrorInternal = errorIdExternal && !checked ? true : !!errorMessage;

  const ariaDescribedbyInput = [
    description && descriptionId,
    ariaDescribedby,
    hasErrorInternal && errorIdInternal,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (
      context?.readOnly &&
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
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          form={form}
          name={name}
          required={required}
          type={'checkbox'}
          value={value}
          data-read-only={readOnly || context?.readOnly || undefined}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={hasErrorInternal}
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
          <span
            className={
              !context && showRequiredMark ? styles.checkboxLabel_required : ''
            }
          >
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
