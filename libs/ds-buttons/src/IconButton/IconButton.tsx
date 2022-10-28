import { forwardRef } from 'react';

import {
  getCommonDisabledDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getIsOutlinedDefault, getSizeDefault } from './defaults';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      'data-testid': dataTestId,
      tabIndex,
      accessKey,
      ariaLabel,
      ariaDescribedBy,
      size = getSizeDefault(),
      svgPath,
      isOutlined = getIsOutlinedDefault(),
      disabled = getCommonDisabledDefault(),
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
        aria-describedby={ariaDescribedBy}
        aria-label={ariaLabel}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        <Icon svgPath={svgPath} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { getIsOutlinedDefault, getSizeDefault };
