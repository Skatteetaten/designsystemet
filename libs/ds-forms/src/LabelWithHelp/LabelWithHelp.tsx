import { JSX, useId } from 'react';

import { Help } from './Help/Help';
import { LabelWithHelpProps } from './LabelWithHelp.types';

import styles from './LabelWithHelp.module.scss';

export const LabelWithHelp = ({
  ref,
  id: idExternal,
  className = '',
  classNames,
  lang,
  'data-testid': dataTestId,
  description,
  descriptionId,
  helpText,
  helpSvgPath,
  titleHelpSvg,
  disabled = false,
  htmlFor,
  hideLabel = false,
  children,
  onHelpToggle,
}: LabelWithHelpProps): JSX.Element => {
  const uniqueLabelId = `labelId-${useId()}`;
  const labelId = idExternal ?? uniqueLabelId;

  const hideLabelClassName = hideLabel ? styles.srOnly : '';
  const concatenatedClassName = `${
    styles.label
  } ${hideLabelClassName} ${className} ${classNames?.label ?? ''}`.trim();

  return (
    <div
      className={styles.container}
      data-helptext={!!helpText}
      data-hidelabel={hideLabel}
    >
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
        className={classNames?.helpText}
        classNames={classNames}
        helpSvgPath={helpSvgPath}
        helpText={helpText}
        hideHelp={hideLabel}
        targetId={labelId}
        titleHelpSvg={titleHelpSvg}
        description={description}
        descriptionId={descriptionId}
        disabled={disabled}
        onHelpToggle={onHelpToggle}
      />
    </div>
  );
};

LabelWithHelp.displayName = 'LabelWithHelp';
