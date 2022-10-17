import { forwardRef } from 'react';
import { Icon } from '@skatteetaten/ds-icons';
import { IconButtonProps } from './IconButton.types';
import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = '',
      'data-testid': dataTestId,
      tabIndex,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      'aria-hidden': ariaHidden,
      buttonSize = 'medium',
      iconProps,
      isOutlined = false,
      disabled = false,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        id={id}
        className={`${styles.button} ${styles[`button_${buttonSize}`]} ${isOutlined ? styles[`button_outlined`] : ''} ${className}`}
        data-testid={dataTestId}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        aria-describedby={ariaDescribedby}
        tabIndex={tabIndex}
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
export default IconButton;
