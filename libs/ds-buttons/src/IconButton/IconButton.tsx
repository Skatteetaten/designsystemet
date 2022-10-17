import { forwardRef } from 'react';

import { Icon } from '@skatteetaten/ds-icons';

import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

import { getClassNameDefault, getOutlinedDefault, getSizeDefault } from './defaults';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getClassNameDefault(),
      'data-testid': dataTestId,
      tabIndex,
      accessKey: accessKey,
      ariaLabel: ariaLabel,
      ariaDescribedBy: ariaDescribedBy,
      buttonSize = getSizeDefault(),
      iconProps,
      isOutlined = getOutlinedDefault(),
      disabled = getOutlinedDefault(),
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const sizeClassName = styles[`button_${buttonSize}`];
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
        <Icon {...iconProps} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
