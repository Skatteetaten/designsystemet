import {
  forwardRef,
  useId,
  useContext,
  JSX,
  ChangeEvent,
  FocusEvent,
} from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { RadioProps } from './Radio.types';
import { RadioGroupContext } from '../RadioGroupContext/RadioGroupContext';

import styles from './Radio.module.scss';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      form,
      value,
      ariaDescribedby,
      children,
      onBlur,
      onChange,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const context = useContext(RadioGroupContext);

    const uniqueInputId = `radioInputId-${useId()}`;
    const inputId = externalId ?? uniqueInputId;

    const concatenatedClassName = `${styles.radio} ${className}`.trim();
    const ariaDescribedbyInput = `${ariaDescribedby ?? ''} ${
      context?.errorId ?? ''
    }`.trim();
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
      context?.onChange && context.onChange(event);
      onChange && onChange(event);
    };
    const onBlurInput = (event: FocusEvent<HTMLInputElement>): void => {
      context?.onBlur && context.onBlur(event);
      onBlur && onBlur(event);
    };
    const onFocusInput = (event: FocusEvent<HTMLInputElement>): void => {
      onFocus && onFocus(event);
    };

    return (
      <div className={concatenatedClassName} lang={lang}>
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
        <input
          ref={ref}
          id={inputId}
          className={styles.radioInput}
          data-testid={dataTestId}
          checked={
            context?.selectedValue === undefined
              ? undefined
              : context?.selectedValue === value
          }
          defaultChecked={
            context?.defaultValue === undefined
              ? undefined
              : context?.defaultValue === value
          }
          form={form}
          value={value}
          type={'radio'}
          name={context?.name}
          required={context?.required}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={context?.hasError}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onFocus={onFocusInput}
        />
        <label className={styles.radioLabel} htmlFor={inputId} tabIndex={-1}>
          {children}
          {description && (
            <span className={styles.radioLabelDescription}>{description}</span>
          )}
        </label>
      </div>
    );
  }
);

Radio.displayName = 'Radio';
