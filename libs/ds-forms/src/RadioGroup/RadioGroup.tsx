import { useId, JSX, FocusEvent, ChangeEvent } from 'react';

import {
  getCommonClassNameDefault,
  getHasSpacingDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { getRadioGroupVariantDefault } from './defaults';
import { Radio } from './Radio/Radio';
import { RadioGroupComponent, RadioGroupProps } from './RadioGroup.types';
import { RadioGroupContext } from './RadioGroupContext';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Fieldset } from '../Fieldset/Fieldset';

import styles from './RadioGroup.module.scss';

export const RadioGroup = (({
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
  selectedValue,
  titleHelpSvg,
  variant = getRadioGroupVariantDefault(),
  defaultValue,
  disabled,
  form,
  name,
  required,
  hasSpacing = getHasSpacingDefault(),
  hideLegend,
  showRequiredMark,
  shadowRootNode,
  onBlur: onBlurExternal,
  onChange: onChangeExternal,
  onHelpToggle,
  children,
}: RadioGroupProps): JSX.Element => {
  useValidateFormRequiredProps({ required, showRequiredMark });
  const errorId = `radioErrorId-${useId()}`;
  const uniqueNameId = `radioInputName-${useId()}`;
  const nameId = name ?? uniqueNameId;

  const variantClassName =
    variant === 'horizontal'
      ? `${styles.radioGroupItemContainer_horizontal}`
      : '';
  const radioGroupItemContainer =
    `${styles.radioGroupItemContainer} ${variantClassName}`.trim();

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>): void => {
    const blurredRadio = event.target as HTMLInputElement;
    const clickedElement = event.relatedTarget;
    let clickedRadioName;
    if (
      clickedElement instanceof HTMLInputElement &&
      clickedElement.type === 'radio'
    ) {
      clickedRadioName = clickedElement.name;
    } else if (clickedElement instanceof HTMLLabelElement) {
      let inputElement;
      if (shadowRootNode) {
        inputElement = shadowRootNode.getElementById(
          clickedElement.htmlFor
        ) as HTMLInputElement;
      } else {
        inputElement = document.getElementById(
          clickedElement.htmlFor
        ) as HTMLInputElement;
      }
      clickedRadioName = inputElement.name;
    }
    if (clickedRadioName !== blurredRadio.name && onBlurExternal) {
      onBlurExternal?.(event);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChangeExternal?.(event);
  };
  return (
    <Fieldset
      ref={ref}
      id={id}
      className={className}
      classNames={{
        ...classNames,
        contentContainer:
          `${hideLegend ? '' : styles.contentContainerSpacing} ${classNames?.contentContainer}`.trim(),
      }}
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
      hasSpacing={hasSpacing}
      onHelpToggle={onHelpToggle}
    >
      <div className={radioGroupItemContainer}>
        <RadioGroupContext.Provider
          value={{
            defaultValue,
            errorId: errorMessage ? errorId : '',
            selectedValue,
            name: nameId,
            hasError: !!errorMessage,
            required,
            onChange: handleChange,
            onBlur: handleBlur,
          }}
        >
          {children}
        </RadioGroupContext.Provider>
      </div>
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
}) as RadioGroupComponent;

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Radio = Radio;
