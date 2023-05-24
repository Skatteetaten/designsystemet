import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getRadioGroupVariantDefault } from './defaults';
import { RadioGroupComponent, RadioGroupProps } from './RadioGroup.types';
import { RadioGroupContext } from './RadioGroupContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Radio } from '../Radio/Radio';

import styles from './RadioGroup.module.scss';

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      errorMessage,
      legend,
      selectedValue,
      variant = getRadioGroupVariantDefault(),
      disabled,
      name,
      required,
      hasError,
      hideLegend,
      onChange,
      children,
    },
    ref
  ): JSX.Element => {
    const errorId = `radioErrorId-${useId()}`;
    const uniqueNameId = `radioInputName-${useId()}`;
    const nameId = name ?? uniqueNameId;

    const hasVariantHorizontal = variant === 'horizontal';

    const concatenatedClassName = `${styles.radioGroup} ${className}`;
    let requiredClassName;
    if (typeof legend === 'string') {
      requiredClassName = required ? styles.radioGroupLegend_required : '';
    } else {
      requiredClassName = required
        ? styles.radioGroupLegendAsMarkup_required
        : '';
    }

    const hideClassName = hideLegend ? styles.radioGroupLegend_hide : '';
    const legendClassName =
      `${styles.radioGroupLegend} ${hideClassName} ${requiredClassName}`.trim();
    const errorClassName = hasError ? styles.radioGroupItemContainer_error : '';
    const variantClassName = hasVariantHorizontal
      ? `${styles.radioGroupItemContainer_horizontal}`
      : '';
    const radioGroupItemContainer =
      `${styles.radioGroupItemContainer} ${errorClassName} ${variantClassName}`.trim();

    return (
      <fieldset
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        disabled={disabled}
      >
        <legend className={legendClassName}>{legend}</legend>

        <div className={radioGroupItemContainer}>
          <RadioGroupContext.Provider
            value={{
              errorId: hasError ? errorId : '',
              name: nameId,
              selectedValue: selectedValue,
              hasError: hasError ?? undefined,
              required,
              onChange,
            }}
          >
            {children}
          </RadioGroupContext.Provider>
        </div>

        <ErrorMessage
          id={errorId}
          showError={hasError && errorMessage !== undefined}
        >
          {errorMessage ?? ''}
        </ErrorMessage>
      </fieldset>
    );
  }
) as RadioGroupComponent;

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Radio = Radio;
