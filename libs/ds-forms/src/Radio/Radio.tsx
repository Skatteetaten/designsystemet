import { forwardRef, useId, useContext } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { RadioProps } from './Radio.types';
import { RadioGroupContext } from '../RadioGroup/RadioGroupContext';

import styles from './Radio.module.scss';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      value,
      ariaDescribedby,
      children,
    },
    ref
  ): JSX.Element => {
    const context = useContext(RadioGroupContext);

    const uniqueInputId = `radioInputId-${useId()}`;
    const inputId = id ?? uniqueInputId;

    const concatenatedClassName = `${styles.radio} ${className}`.trim();
    const ariaDescribedbyInput = `${ariaDescribedby ?? ''} ${
      context?.errorId ?? ''
    }`.trim();

    return (
      <div className={concatenatedClassName} lang={lang}>
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
          value={value}
          type={'radio'}
          name={context?.name}
          required={context?.required}
          aria-describedby={ariaDescribedbyInput || undefined}
          aria-invalid={context?.hasError}
          onChange={context?.onChange}
        />
        <label className={styles.radioLabel} htmlFor={inputId}>
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
