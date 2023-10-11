import { forwardRef, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, HelpSimpleSVGpath } from '@skatteetaten/ds-icons';

import { LabelWithHelpProps } from './LabelWithHelp.types';
import { HelpProps } from '../Help/Help.types';

import styles from './LabelWithHelp.module.scss';

//TODO FRONT-1395
const Help = ({
  description,
  helpText,
  helpSvgPath,
  hideHelp,
  targetId,
  titleHelpSvg,
}: HelpProps): JSX.Element => {
  const { t } = useTranslation('Shared', { i18n: dsI18n });

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

  const marginTopClassName = showHelpText ? styles.descriptionMarginTop : '';
  const hideHelpClassName = hideHelp ? styles.srOnly : '';

  return (
    <>
      {helpText && (
        <IconButton
          ref={helpButtonRef}
          className={`${styles.helpButton} ${hideHelpClassName}`.trim()}
          svgPath={svgHelpIcon}
          title={titleHelpIcon}
          size={'extraSmall'}
          ariaExpanded={showHelpText}
          ariaDescribedby={targetId}
          isOutlined
          onClick={(): void => toggleHelpText()}
        />
      )}
      {helpText && showHelpText && (
        <div className={`${styles.helpBox} ${hideHelpClassName}`.trim()}>
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
          className={`${styles.description} ${marginTopClassName} ${hideHelpClassName}`.trim()}
        >
          {description}
        </div>
      )}
    </>
  );
};

Help.displayName = 'Help';

export const LabelWithHelp = forwardRef<HTMLLabelElement, LabelWithHelpProps>(
  (
    {
      id: idExternal,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      description,
      helpText,
      helpSvgPath,
      titleHelpSvg,
      htmlFor,
      hideLabel,
      showRequiredMark,
      children,
    },
    ref
  ): JSX.Element => {
    const uniqueLabelId = `labelId-${useId()}`;
    const labelId = idExternal ?? uniqueLabelId;

    const requiredMarkClassName = showRequiredMark ? styles.label_required : '';
    const hideLabelClassName = hideLabel ? styles.srOnly : '';
    const concatenatedClassName =
      `${styles.label} ${requiredMarkClassName} ${hideLabelClassName} ${className}`.trim();

    return (
      <>
        <label
          ref={ref as (instance: HTMLLabelElement | null) => void}
          id={labelId}
          data-testid={dataTestId}
          className={concatenatedClassName}
          lang={lang}
          htmlFor={htmlFor}
        >
          {children}
        </label>
        <Help
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          hideHelp={hideLabel}
          targetId={labelId}
          titleHelpSvg={titleHelpSvg}
          description={description}
        />
      </>
    );
  }
);

LabelWithHelp.displayName = 'LabelWithHelp';
