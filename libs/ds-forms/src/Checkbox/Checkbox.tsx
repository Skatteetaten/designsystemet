import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from './Checkbox.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './Checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      errorMessage,
      checked,
      defaultChecked,
      disabled,
      name,
      required,
      value,
      ariaLabelledby,
      ariaDescribedby,
      hasError,
      hideLabel,
      onChange,
      children,
    },
    ref
  ): JSX.Element => {
    const uniqueInputId = `checkboxInputId-${useId()}`;
    const inputId = id ?? uniqueInputId;
    const errorId = `checkboxErrorId-${useId()}`;

    const errorClassName = hasError && !checked ? styles[`label_error`] : '';
    const hideTextWrapperClassName = hideLabel
      ? styles[`labelTextWrapper_hide`]
      : '';

    const getAriaDescribedby = (): string | undefined => {
      if (hasError) {
        return ariaDescribedby ? `${ariaDescribedby} ${errorId}` : errorId;
      }
      return ariaDescribedby;
    };

    return (
      <div className={`${styles.container} ${className}`} lang={lang}>
        <input
          ref={ref}
          id={inputId}
          className={styles.input}
          data-testid={dataTestId}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          required={required}
          type={'checkbox'}
          value={value}
          aria-describedby={getAriaDescribedby()}
          aria-invalid={hasError ? hasError : undefined}
          aria-labelledby={ariaLabelledby}
          onChange={onChange}
        />
        <label
          htmlFor={inputId}
          className={`${styles.label} ${errorClassName}`}
        >
          <span className={styles.labelCheckbox}>
            <span className={styles.labelCheckboxCheck}></span>
          </span>
          <span
            className={`${styles.labelTextWrapper} ${hideTextWrapperClassName}`}
          >
            <span className={`${styles.labelTextWrapperText}`}>{children}</span>
            {description && (
              <span className={styles.labelTextWrapperDescription}>
                {description}
              </span>
            )}
          </span>
        </label>
        <ErrorMessage
          id={errorId}
          showError={hasError && errorMessage !== undefined}
        >
          {errorMessage ?? ''}
        </ErrorMessage>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
