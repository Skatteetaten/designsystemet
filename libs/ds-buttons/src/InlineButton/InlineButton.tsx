/* eslint-disable jsx-a11y/no-access-key */
import { forwardRef } from 'react';

import {
  getCommonDisabledDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getInlineButtonPositionDefault } from './defaults';
import { InlineButtonProps } from './InlineButton.types';

import styles from './InlineButton.module.scss';

export const InlineButton = forwardRef<HTMLButtonElement, InlineButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      'data-testid': dataTestId,
      children,
      disabled = getCommonDisabledDefault(),
      svgPath,
      iconPosition = getInlineButtonPositionDefault(),
      accessKey,
      tabIndex,
      ariaDescribedby,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const hasIconLeft = svgPath && iconPosition === 'left';
    const hasIconRight = svgPath && iconPosition === 'right';

    const withIconClassName = hasIconLeft
      ? `${styles.button_withIconLeft}`
      : hasIconRight
      ? `${styles.button_withIconRight}`
      : '';
    const concatenatedClassName = `${styles.button} ${withIconClassName} ${className}`;

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        data-testid={dataTestId}
        disabled={disabled}
        accessKey={accessKey}
        tabIndex={tabIndex}
        aria-describedby={ariaDescribedby}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {hasIconLeft && (
          <span className={styles.icon}>
            <Icon svgPath={svgPath} />
          </span>
        )}
        {children}
        {hasIconRight && (
          <span className={styles.icon}>
            <Icon svgPath={svgPath} />
          </span>
        )}
      </button>
    );
  }
);

InlineButton.displayName = 'InlineButton';

export { getInlineButtonPositionDefault };
