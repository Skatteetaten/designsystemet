import { forwardRef, useContext, useId, JSX } from 'react';

import {
  getCommonClassNameDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { CheckboxProps } from './Checkbox.types';
import { CheckboxContext } from '../CheckboxContext/CheckboxContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './Checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
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
      required,
      value,
      ariaDescribedby,
      hideLabel,
      showRequiredMark,
      onChange,
      children,
    },
    ref
  ): JSX.Element => {
    useValidateFormRequiredProps({ required, showRequiredMark });
    const context = useContext(CheckboxContext);
    const errorIdExternal = context?.errorId;

    const uniqueInputId = `checkboxInputId-${useId()}`;
    const inputIdInternal = idExternal ?? uniqueInputId;
    const uniqueErrorId = `checkboxErrorId-${useId()}`;
    const errorIdInternal = errorIdExternal ?? uniqueErrorId;
    const hasErrorInternal =
      errorIdExternal && !checked ? true : !!errorMessage;
    const isRequired = required && !checked;

    const spacingBottomClassName = context ? styles.containerSpacingBottom : '';
    const checkboxErrorClassName = hasErrorInternal
      ? styles.labelCheckbox_error
      : '';
    const labelErrorClassName =
      hasErrorInternal && !context && required ? styles.label_error : '';
    const labelRequiredClassName =
      !context && showRequiredMark ? styles.labelContent_required : '';
    const hideLabelClassName = hideLabel ? styles.srOnly : '';

    const ariaDescribedbyInput = `${ariaDescribedby ?? ''} ${
      hasErrorInternal ? errorIdInternal : ''
    }`.trim();

    return (
      <div
        className={`${styles.container} ${spacingBottomClassName} ${className}`}
        lang={lang}
      >
        <input
          ref={ref}
          id={inputIdInternal}
          className={styles.input}
          data-testid={dataTestId}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          form={form}
          name={name}
          required={isRequired}
          type={'checkbox'}
          value={value}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={hasErrorInternal || undefined}
          onChange={onChange}
        />
        <label
          htmlFor={inputIdInternal}
          className={`${styles.label} ${labelErrorClassName} ${
            classNames?.label ?? ''
          }`}
        >
          <span className={`${styles.labelCheckbox} ${checkboxErrorClassName}`}>
            <span className={styles.labelCheckboxCheck}></span>
          </span>
          <span className={`${styles.labelContent} ${hideLabelClassName}`}>
            <span className={labelRequiredClassName}>{children}</span>
            {description && (
              <span className={styles.labelContentDescription}>
                {description}
              </span>
            )}
          </span>
        </label>
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
  }
);

Checkbox.displayName = 'Checkbox';
