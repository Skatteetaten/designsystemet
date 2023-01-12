import { forwardRef } from 'react';

import {
  getCommonClassNameDefault,
  getCommonDisabledDefault,
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
      title,
      size = getIconButtonSizeDefault(),
      svgPath,
      isOutlined = getIconButtonIsOutlinedDefault(),
      accessKey,
      disabled = getCommonDisabledDefault(),
      type = 'button',
      ariaDescribedby,
      onBlur,
      onClick,
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
        accessKey={accessKey}
        disabled={disabled}
        type={type}
        aria-describedby={ariaDescribedby}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        <Icon svgPath={svgPath} title={title} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { getIconButtonIsOutlinedDefault, getIconButtonSizeDefault };
