import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  JSX,
} from 'react';
import { useTranslation } from 'react-i18next';

import {
  dsI18n,
  getCommonClassNameDefault,
  getCommonFormVariantDefault,
} from '@skatteetaten/ds-core-utils';
import { ChevronDownSVGpath, Icon } from '@skatteetaten/ds-icons';

import { SelectComponent, SelectProps } from './Select.types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';
import { SelectOption } from '../SelectOption/SelectOption';

import styles from './Select.module.scss';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      defaultValue,
      description,
      errorMessage,
      helpSvgPath,
      helpText,
      label,
      placeholder,
      titleHelpSvg,
      variant = getCommonFormVariantDefault(),
      value,
      autoComplete,
      disabled,
      name,
      required,
      hasError,
      hideLabel,
      hidePlaceholder,
      showRequiredMark,
      onBlur,
      onChange,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });

    const selectRef = useRef<HTMLSelectElement>(null);
    useImperativeHandle(ref, () => selectRef?.current as HTMLSelectElement);

    const errorId = `selectErrorId-${useId()}`;
    const generatedId = `selectId-${useId()}`;
    const selectId = externalId ?? generatedId;

    const isLarge = variant === 'large';
    const selectClassName = `${styles.select} ${
      isLarge ? styles.select_large : ''
    }`.trim();
    const selectIconClassName = `${styles.selectIcon} ${
      isLarge ? styles.selectIcon_large : ''
    }`.trim();

    const placeholderPaletteGraphite50 = 'var(--palette-graphite-50)';
    useEffect(() => {
      changePlaceholderColor();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      changePlaceholderColor();
      onChange?.(e);
    };

    const changePlaceholderColor = (): void => {
      if (!hidePlaceholder) {
        const select = selectRef.current as HTMLSelectElement;
        if (select.value.length === 0) {
          select.style.color = placeholderPaletteGraphite50;
        } else {
          select.style.color = '';
        }
      }
    };

    return (
      <div
        lang={lang}
        className={`${className} ${classNames?.container ?? ''}`.trim()}
      >
        <LabelWithHelp
          className={classNames?.label ?? ''}
          htmlFor={selectId}
          hideLabel={hideLabel}
          showRequiredMark={showRequiredMark}
          description={description}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          titleHelpSvg={titleHelpSvg}
        >
          {label}
        </LabelWithHelp>
        <div
          className={`${styles.select_container} ${
            classNames?.selectContainer ?? ''
          }`}
        >
          <select
            ref={selectRef}
            id={selectId}
            className={`${selectClassName} ${classNames?.select ?? ''}`}
            data-testid={dataTestId}
            autoComplete={autoComplete}
            disabled={disabled}
            name={name}
            required={required}
            value={value}
            defaultValue={defaultValue}
            aria-describedby={hasError ? errorId : undefined}
            aria-invalid={hasError ?? undefined}
            onBlur={onBlur}
            onChange={handleChange}
            onFocus={onFocus}
          >
            {!hidePlaceholder && (
              <option value={''}>
                {placeholder ?? t('shared.ChooseValue')}
              </option>
            )}
            {children}
          </select>
          <Icon className={selectIconClassName} svgPath={ChevronDownSVGpath} />
        </div>
        <ErrorMessage
          id={errorId}
          showError={hasError}
          className={classNames?.errorMessage ?? ''}
        >
          {errorMessage ?? ''}
        </ErrorMessage>
      </div>
    );
  }
) as SelectComponent;

Select.displayName = 'Select';
Select.Option = SelectOption;
