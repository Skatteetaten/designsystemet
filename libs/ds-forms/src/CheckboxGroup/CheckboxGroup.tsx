import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  CheckboxGroupComponent,
  CheckboxGroupProps,
} from './CheckboxGroup.types';
import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxContext } from '../CheckboxContext/CheckboxContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './CheckboxGroup.module.scss';

export const CheckboxGroup = forwardRef<
  HTMLFieldSetElement,
  CheckboxGroupProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      errorMessage,
      legend,
      disabled,
      // TODO AK B4 - legg inn required og send videre til children
      hasError,
      hideLegend,
      showRequiredMark,
      children,
    },
    ref
  ): JSX.Element => {
    const errorId = `checkboxGroupErrorId-${useId()}`;
    const hideLegendClassName = hideLegend ? styles['fieldsetLegend_hide'] : '';

    if (legend === '') {
      throw new Error('Empty string is not a valid legend.');
    }

    let requiredMarkClassName = '';
    if (showRequiredMark) {
      requiredMarkClassName =
        typeof legend === 'string'
          ? styles['fieldsetLegend_required']
          : styles['fieldsetLegendWithMarkup_required'];
    }

    return (
      <CheckboxContext.Provider
        value={{
          errorId: hasError ? errorId : undefined,
        }}
      >
        <fieldset
          ref={ref}
          id={id}
          className={`${styles.fieldset} ${className}`}
          lang={lang}
          data-testid={dataTestid}
          disabled={disabled}
        >
          <legend
            className={`${styles.fieldsetLegend} ${requiredMarkClassName} ${hideLegendClassName}`}
          >
            {legend}
          </legend>
          {children}
          <ErrorMessage
            id={errorId}
            showError={hasError}
            className={`${styles.fieldsetErrorMessage} ${
              hasError ? styles.fieldsetSpacingBottom : ''
            }`}
          >
            {errorMessage ?? ''}
          </ErrorMessage>
        </fieldset>
      </CheckboxContext.Provider>
    );
  }
) as CheckboxGroupComponent;

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Checkbox = Checkbox;
