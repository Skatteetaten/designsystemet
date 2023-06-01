import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { getRadioGroupVariantDefault } from './defaults';
import { RadioGroupComponent, RadioGroupProps } from './RadioGroup.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Radio } from '../Radio/Radio';
import { RadioGroupContext } from '../RadioGroupContext/RadioGroupContext';

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
      defaultValue,
      disabled,
      name,
      required,
      hasError,
      hideLegend,
      showRequiredMark,
      onChange,
      children,
    },
    ref
  ): JSX.Element => {
    const errorId = `radioErrorId-${useId()}`;
    const uniqueNameId = `radioInputName-${useId()}`;
    const nameId = name ?? uniqueNameId;

    if (legend === '') {
      throw new Error('Empty string is not a valid legend');
    }

    let requiredClassName;
    if (typeof legend === 'string') {
      requiredClassName = showRequiredMark
        ? styles.radioGroupLegend_required
        : '';
    } else {
      requiredClassName = showRequiredMark
        ? styles.radioGroupLegendAsMarkup_required
        : '';
    }

    const hideClassName = hideLegend ? styles.radioGroupLegend_hide : '';
    const legendClassName =
      `${styles.radioGroupLegend} ${hideClassName} ${requiredClassName}`.trim();
    const errorClassName = hasError ? styles.radioGroupItemContainer_error : '';
    const variantClassName =
      variant === 'horizontal'
        ? `${styles.radioGroupItemContainer_horizontal}`
        : '';
    const radioGroupItemContainer =
      `${styles.radioGroupItemContainer} ${errorClassName} ${variantClassName}`.trim();

    return (
      <fieldset
        ref={ref}
        id={id}
        className={`${styles.radioGroup} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        disabled={disabled}
      >
        <legend className={legendClassName}>{legend}</legend>

        <div className={radioGroupItemContainer}>
          <RadioGroupContext.Provider
            value={{
              defaultValue,
              errorId: hasError ? errorId : '',
              name: nameId,
              selectedValue,
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

export { getRadioGroupVariantDefault };
