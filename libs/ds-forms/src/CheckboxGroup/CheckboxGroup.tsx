import { useId, JSX } from 'react';

import {
  getCommonClassNameDefault,
  getHasSpacingDefault,
} from '@skatteetaten/ds-core-utils';

import { CheckboxContext } from './CheckboxContext';
import {
  CheckboxGroupComponent,
  CheckboxGroupProps,
} from './CheckboxGroup.types';
import { Checkbox } from '../Checkbox/Checkbox';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Fieldset } from '../Fieldset/Fieldset';

import styles from './CheckboxGroup.module.scss';

/**
 * CheckboxGroup
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-checkboxgroup--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/checkboxgroup/) - Brukerveiledning
 */
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
  readOnly,
  titleHelpSvg,
  disabled,
  form,
  hasSpacing = getHasSpacingDefault(),
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
      classNames={{
        ...classNames,
        contentContainer:
          `${styles.contentContainer} ${hideLegend ? '' : styles.contentContainerSpacing} ${classNames?.contentContainer}`.trim(),
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
      <CheckboxContext.Provider
        value={{
          errorId: errorMessage ? errorId : undefined,
          readOnly,
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
