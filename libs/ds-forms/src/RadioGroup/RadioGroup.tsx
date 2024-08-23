import { forwardRef, useId, JSX, useRef } from 'react';

import {
  getCommonClassNameDefault,
  useValidateFormRequiredProps,
} from '@skatteetaten/ds-core-utils';

import { getRadioGroupVariantDefault } from './defaults';
import { RadioGroupComponent, RadioGroupProps } from './RadioGroup.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Fieldset } from '../Fieldset/Fieldset';
import { Radio } from '../Radio/Radio';
import { RadioGroupContext } from '../RadioGroupContext/RadioGroupContext';

import styles from './RadioGroup.module.scss';

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
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
      hideLegend,
      showRequiredMark,
      onBlur: onBlurExternal,
      onChange: onChangeExternal,
      onHelpToggle,
      children,
    },
    ref
  ): JSX.Element => {
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
    const radioGroupRef = useRef<HTMLDivElement>(null);
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
        <div ref={radioGroupRef} className={radioGroupItemContainer}>
          <RadioGroupContext.Provider
            value={{
              defaultValue,
              errorId: errorMessage ? errorId : '',
              name: nameId,
              selectedValue,
              hasError: !!errorMessage || undefined,
              required,
              onBlur: (event): void => {
                const blurredButton = event.target as HTMLInputElement;
                const blurredButtonName = blurredButton.name;

                // Finn det klikkede elementet
                const clickedElement = event.relatedTarget;
                let clickedButtonName;

                if (
                  clickedElement instanceof HTMLInputElement &&
                  clickedElement.type === 'radio'
                ) {
                  clickedButtonName = clickedElement.name;
                } else if (clickedElement instanceof HTMLLabelElement) {
                  const inputElement = document.getElementById(
                    clickedElement.htmlFor
                  ) as HTMLInputElement;
                  clickedButtonName = inputElement.name;
                }

                // Sjekk om de tilhører samme gruppe
                if (clickedButtonName !== blurredButtonName) {
                  if (onBlurExternal) onBlurExternal?.(event);
                  console.log(
                    'onBlur på radio gruppe ble trigget ved klikk eller tab til utenfor gruppen'
                  );
                }
                // else {
                //   console.log(
                //     'blur ble trigget ved klikk på en radio-knapp eller label i samme gruppe'
                //   );
                // }
              },
              onChange: (event): void => {
                onChangeExternal?.(event);
              },
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
  }
) as RadioGroupComponent;

RadioGroup.displayName = 'RadioGroup';
RadioGroup.Radio = Radio;

export { getRadioGroupVariantDefault };
