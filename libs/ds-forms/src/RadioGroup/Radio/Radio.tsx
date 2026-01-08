import { useId, useContext, JSX, ChangeEvent, FocusEvent } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { RadioProps } from './Radio.types';
import { getAriaInvalid } from '../../utils';
import { RadioGroupContext } from '../RadioGroupContext';

import styles from './Radio.module.scss';

export const Radio = ({
  ref,
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
}: RadioProps): JSX.Element => {
  const context = useContext(RadioGroupContext);

  const uniqueInputId = `radioInputId-${useId()}`;
  const inputId = externalId ?? uniqueInputId;

  const descriptionId = `descId-${useId()}`;

  const concatenatedClassName = `${styles.radio} ${className}`.trim();
  const ariaDescribedbyInput = [
    description && descriptionId,
    ariaDescribedby,
    context?.errorId,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
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
        aria-invalid={getAriaInvalid(context?.hasError, context?.required)}
        onBlur={onBlurInput}
        onChange={onChangeInput}
        onFocus={onFocusInput}
      />
      <label className={styles.radioLabel} htmlFor={inputId} tabIndex={-1}>
        {children}
        {description && (
          <>
            &nbsp;
            <span id={descriptionId} className={styles.radioLabelDescription}>
              {description}
            </span>
          </>
        )}
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';
