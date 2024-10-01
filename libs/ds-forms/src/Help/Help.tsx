import { JSX, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, HelpSimpleSVGpath } from '@skatteetaten/ds-icons';

import { HelpProps } from './Help.types';

import styles from './Help.module.scss';

export const Help = ({
  description,
  helpText,
  helpSvgPath,
  hideHelp,
  targetId,
  titleHelpSvg,
  onHelpToggle,
  className,
  classNames,
}: HelpProps): JSX.Element => {
  const { t } = useTranslation('Shared', { i18n: dsI18n });

  const [showHelpText, setShowHelpText] = useState(false);
  const helpButtonRef = useRef<HTMLButtonElement>(null);

  const svgHelpIcon = helpSvgPath ?? HelpSimpleSVGpath;
  const titleHelpIcon = titleHelpSvg ?? t('shared.Help');

  const toggleHelpText = (): void => {
    onHelpToggle?.(!showHelpText);
    setShowHelpText(!showHelpText);
  };

  const closeHelpText = (): void => {
    setShowHelpText(false);
    helpButtonRef.current?.focus();
    onHelpToggle?.(false);
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
        <div
          className={`${styles.helpBox} ${hideHelpClassName} ${
            className ?? ''
          } ${classNames?.helpText ?? ''}`.trim()}
        >
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
          className={`${
            styles.description
          } ${marginTopClassName} ${hideHelpClassName} ${
            classNames?.description ?? ''
          }`.trim()}
        >
          {description}
        </div>
      )}
    </>
  );
};

Help.displayName = 'Help';
