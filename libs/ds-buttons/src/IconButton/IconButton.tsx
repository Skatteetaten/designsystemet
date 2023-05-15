import { forwardRef } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getIconButtonSizeDefault } from './defaults';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      accessKey,
      title,
      ariaDescribedby,
      ariaExpanded,
      size = getIconButtonSizeDefault(),
      svgPath,
      isOutlined,
      disabled,
      type = 'button',
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
        className={`${styles.button} ${sizeClassName} ${outlineClassName} ${className}`}
        lang={lang}
        data-testid={dataTestId}
        disabled={disabled}
        accessKey={accessKey}
        type={type}
        aria-describedby={ariaDescribedby}
        aria-expanded={ariaExpanded}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        <Icon className={styles.icon} svgPath={svgPath} title={title} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { getIconButtonSizeDefault };
