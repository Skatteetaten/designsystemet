import { forwardRef } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import {
  getClassNameDefault,
  getDisabledDefault,
  getIsOutlinedDefault,
  getSizeDefault,
} from './defaults';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getClassNameDefault(),
      'data-testid': dataTestId,
      tabIndex,
      accessKey,
      ariaLabel,
      ariaDescribedBy,
      size = getSizeDefault(),
      svgPath,
      isOutlined = getIsOutlinedDefault(),
      disabled = getDisabledDefault(),
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const sizeClassName = styles[`button_${size}`];
    const outlineClassName = isOutlined ? styles[`button_outlined`] : '';
    return (
      <button
        ref={ref}
        id={id}
        className={`${styles.button} ${sizeClassName} ${outlineClassName} ${className}`}
        data-testid={dataTestId}
        disabled={disabled}
        tabIndex={tabIndex}
        accessKey={accessKey}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
      >
        <Icon svgPath={svgPath} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export {
  getClassNameDefault,
  getDisabledDefault,
  getIsOutlinedDefault,
  getSizeDefault,
};
