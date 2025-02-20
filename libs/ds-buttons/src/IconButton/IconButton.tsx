import { forwardRef, JSX } from 'react';

import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

import {
  getIconButtonBrightnessDefault,
  getIconButtonSizeDefault,
} from './defaults';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      brightness = getIconButtonBrightnessDefault(),
      size = getIconButtonSizeDefault(),
      spinnerTitle,
      svgPath,
      accessKey,
      disabled,
      title,
      type = getCommonButtonTypeDefault(),
      ariaDescribedby,
      ariaExpanded,
      hasSpinner,
      isOutlined,
      onClick,
      onBlur,
      onFocus,
    },
    ref
  ): JSX.Element => {
    const sizeClassName = styles[`button_${size}`];
    const outlineClassName = isOutlined ? styles.button_outlined : '';
    return (
      <button
        ref={ref}
        id={id}
        className={`${styles.button} ${sizeClassName} ${outlineClassName} ${className ?? ''}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        data-brightness={brightness}
        disabled={disabled}
        accessKey={accessKey}
        type={type}
        aria-describedby={ariaDescribedby}
        aria-expanded={ariaExpanded}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {!hasSpinner && (
          <Icon className={styles.icon} svgPath={svgPath} title={title} />
        )}
        {hasSpinner && (
          <Spinner
            className={styles.spinner}
            color={disabled ? 'black' : 'blue'}
            size={size === 'extraSmall' ? 'small' : size}
            hideTitle
          >
            {spinnerTitle}
          </Spinner>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { getIconButtonSizeDefault, getIconButtonBrightnessDefault };
