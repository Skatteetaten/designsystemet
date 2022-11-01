import { forwardRef } from 'react';

import {
  getCommonDisabledDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import {
  getIconButtonIsOutlinedDefault,
  getIconButtonSizeDefault,
} from './defaults';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      'data-testid': dataTestId,
      accessKey,
      ariaLabel,
      ariaDescribedBy,
      size = getIconButtonSizeDefault(),
      svgPath,
      isOutlined = getIconButtonIsOutlinedDefault(),
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

export { getIconButtonIsOutlinedDefault, getIconButtonSizeDefault };
