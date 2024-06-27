import { forwardRef, useId, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  CheckboxGroupComponent,
  CheckboxGroupProps,
} from './CheckboxGroup.types';
import { Checkbox } from '../Checkbox/Checkbox';
import { CheckboxContext } from '../CheckboxContext/CheckboxContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Fieldset } from '../Fieldset/Fieldset';

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
      'data-testid': dataTestId,
      description,
      errorMessage,
      helpSvgPath,
      helpText,
      legend,
      titleHelpSvg,
      disabled,
      form,
      hideLegend,
      showRequiredMark,
      onHelpToggle,
      children,
    },
    ref
  ): JSX.Element => {
    const errorId = `checkboxGroupErrorId-${useId()}`;

    return (
      <Fieldset
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestId}
        disabled={disabled}
        form={form}
        legend={legend}
        hideLegend={hideLegend}
        showRequiredMark={showRequiredMark}
        description={description}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        titleHelpSvg={titleHelpSvg}
        hasSpacing
        onHelpToggle={onHelpToggle}
      >
        <CheckboxContext.Provider
          value={{
            errorId: errorMessage ? errorId : undefined,
          }}
        >
          {children}
        </CheckboxContext.Provider>
        <ErrorMessage
          className={styles.errorMessage}
          id={errorId}
          showError={!!errorMessage}
        >
          {errorMessage}
        </ErrorMessage>
      </Fieldset>
    );
  }
) as CheckboxGroupComponent;

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Checkbox = Checkbox;
