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
      iconPosition = getInlineButtonPositionDefault(),
      svgPath,
      accessKey,
      disabled = getCommonDisabledDefault(),
      type = 'button',
      ariaDescribedby,
      onBlur,
      onClick,
      onFocus,
      children,
    },
    ref
  ): JSX.Element => {
    const hasIconLeft = svgPath && iconPosition === 'left';
    const hasIconRight = svgPath && iconPosition === 'right';
    const withIconLeftClassName = hasIconLeft ? styles.button_withIconLeft : '';
    const withIconRightClassName = hasIconRight
      ? styles.button_withIconRight
      : '';

    const concatenatedClassName = `${styles.button} ${withIconLeftClassName} ${withIconRightClassName} ${className}`;

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        data-testid={dataTestId}
        accessKey={accessKey}
        disabled={disabled}
        type={type}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onClick={onClick}
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