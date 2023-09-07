import { forwardRef, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, HelpSimpleSVGpath } from '@skatteetaten/ds-icons';

import { FieldsetProps } from './Fieldset.types';

import styles from './Fieldset.module.scss';

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      helpSvgPath,
      helpText,
      legend,
      titleHelpSvg,
      disabled,
      hasSpacing,
      hideLegend,
      showRequiredMark,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });
    const uniqueLegendId = `legendId-${useId()}`;
    const legendId = uniqueLegendId;

    const [showHelpText, setShowHelpText] = useState(false);
    const helpButtonRef = useRef<HTMLButtonElement>(null);

    const svgHelpIcon = helpSvgPath ?? HelpSimpleSVGpath;
    const titleHelpIcon = titleHelpSvg ?? t('shared.Help');

    const toggleHelpText = (): void => {
      setShowHelpText(!showHelpText);
    };

    const closeHelpText = (): void => {
      setShowHelpText(false);
      helpButtonRef.current?.focus();
    };

    if (legend === '') {
      throw new Error('Empty string is not a valid legend.');
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
    const legendClassName =
      `${styles.legend} ${requiredMarkClassName} ${hideLegendClassName} ${noMarginBottomLegendClassName}`.trim();

    return (
      <fieldset
        ref={ref}
        id={id}
        data-testid={dataTestId}
        className={`${styles.fieldset} ${hasSpacingClassName} ${className}`.trim()}
        lang={lang}
        disabled={disabled}
      >
        <legend id={legendId} className={legendClassName}>
          {legend}
        </legend>
        {helpText && (
          <IconButton
            ref={helpButtonRef}
            className={`${styles.helpButton} ${hideLegendClassName}`.trim()}
            svgPath={svgHelpIcon}
            title={titleHelpIcon}
            size={'extraSmall'}
            ariaExpanded={showHelpText}
            ariaDescribedby={legendId}
            isOutlined
            onClick={(): void => toggleHelpText()}
          />
        )}
        {helpText && showHelpText && (
          <div className={`${styles.helpBox} ${hideLegendClassName}`.trim()}>
            <span className={styles.helpBoxText}>{helpText}</span>
            <IconButton
              className={styles.helpBoxCloseButton}
              size={'small'}
              svgPath={CancelSVGpath}
              title={t('shared.Close')}
              onClick={(): void => closeHelpText()}
            />
          </div>
        )}
        {description && (
          <div
            className={`${styles.description} ${hideLegendClassName}`.trim()}
          >
            {description}
          </div>
        )}
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
