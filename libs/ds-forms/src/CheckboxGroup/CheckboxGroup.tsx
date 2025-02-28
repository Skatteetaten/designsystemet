import { useId, JSX } from 'react';

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

export const CheckboxGroup = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  classNames,
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
}: CheckboxGroupProps): JSX.Element => {
  const errorId = `checkboxGroupErrorId-${useId()}`;

  return (
    <Fieldset
      ref={ref}
      id={id}
      className={className}
      classNames={classNames}
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
        className={`${styles.errorMessage} ${
          classNames?.errorMessage ?? ''
        }`.trim()}
        id={errorId}
        showError={!!errorMessage}
      >
        {errorMessage}
      </ErrorMessage>
    </Fieldset>
  );
}) as CheckboxGroupComponent;

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxGroup.Checkbox = Checkbox;
