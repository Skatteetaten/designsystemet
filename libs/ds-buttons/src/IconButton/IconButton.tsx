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
      size = getIconButtonSizeDefault(),
      svgPath,
      isOutlined,
      disabled,
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
        lang={lang}
        data-testid={dataTestId}
        disabled={disabled}
        accessKey={accessKey}
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

export { getIconButtonSizeDefault };
