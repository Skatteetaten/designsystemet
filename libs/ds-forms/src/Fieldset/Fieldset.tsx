import { forwardRef, useId, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { FieldsetProps } from './Fieldset.types';
import { Help } from '../Help/Help';

import styles from './Fieldset.module.scss';

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      description,
      helpSvgPath,
      helpText,
      legend,
      titleHelpSvg,
      disabled,
      form,
      hasSpacing,
      hideLegend,
      showRequiredMark,
      onHelpToggle,
      children,
    },
    ref
  ): JSX.Element => {
    const uniqueLegendId = `legendId-${useId()}`;
    const legendId = uniqueLegendId;

    if (legend === '') {
      console.error(
        'Fieldset - Empty legend is not recommended. Set hideLegend to false if legend prop exists but is an empty string https://html.spec.whatwg.org/multipage/form-elements.html#the-legend-element'
      );
    }

    let requiredMarkClassName = '';
    if (showRequiredMark) {
      requiredMarkClassName =
        typeof legend === 'string'
          ? styles.legend_required
          : styles.legendWithMarkup_required;
    }
    const hasSpacingClassName = hasSpacing ? styles.fieldset_hasSpacing : '';
    const hideLegendClassName = hideLegend ? styles.srOnly : '';
    const noMarginBottomLegendClassName =
      description || helpText ? styles.legendNoMarginBottom : '';
    const noMarginTopContentContainerClassName = hideLegend
      ? styles.contentContainerNoMarginTop
      : '';
    const legendClassName = `${
      styles.legend
    } ${requiredMarkClassName} ${hideLegendClassName} ${noMarginBottomLegendClassName} ${
      classNames?.legend ?? ''
    }`.trim();

    return (
      <fieldset
        ref={ref}
        id={id}
        data-testid={dataTestId}
        className={`${styles.fieldset} ${hasSpacingClassName} ${className}`.trim()}
        lang={lang}
        disabled={disabled}
        form={form}
      >
        <legend id={legendId} className={styles.srOnly}>
          {legend}
        </legend>

        <div className={legendClassName} aria-hidden={'true'}>
          {legend}
        </div>
        <Help
          classNames={classNames}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          hideHelp={hideLegend}
          targetId={legendId}
          titleHelpSvg={titleHelpSvg}
          description={description}
          onHelpToggle={onHelpToggle}
        />
        <div
          className={`${styles.contentContainer} ${noMarginTopContentContainerClassName}`.trim()}
        >
          {children}
        </div>
      </fieldset>
    );
  }
);

Fieldset.displayName = 'Fieldset';
