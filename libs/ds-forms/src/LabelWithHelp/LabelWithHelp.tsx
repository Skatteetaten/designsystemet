import { forwardRef, useId } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { LabelWithHelpProps } from './LabelWithHelp.types';
import { Help } from '../Help/Help';
import styles from '../LabelWithHelp/LabelWithHelp.module.scss';

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
        />
        {description && (
          <div className={`${styles.description} ${hideLabelClassName}`.trim()}>
            {description}
          </div>
        )}
      </>
    );
  }
);

LabelWithHelp.displayName = 'LabelWithHelp';
