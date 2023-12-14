import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { TopBannerButtonProps } from './TopBannerButton.types';

import styles from './TopBannerButton.module.scss';

export const TopBannerButton = forwardRef<
  HTMLButtonElement,
  TopBannerButtonProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      classNames,
      lang,
      'data-testid': dataTestId,
      svgPath,
      title,
      variant,
      ariaExpanded,
      onClick,
      onKeyDown,
      children,
    },
    ref
  ): JSX.Element => {
    const variantClassName = variant ? styles[`button_${variant}`] : '';
    const concatenatedClassName = `${
      styles.button
    } ${variantClassName} ${className} ${classNames?.container ?? ''}`.trim();

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        aria-expanded={ariaExpanded}
        type={'button'}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {svgPath && (
          <>
            <span className={styles.iconWrapper}>
              <Icon svgPath={svgPath} className={styles.icon} title={title} />
            </span>
            <span className={`${styles.buttonText} ${classNames?.text ?? ''}`}>
              {children}
            </span>
          </>
        )}
        {!svgPath && children}
      </button>
    );
  }
);

TopBannerButton.displayName = 'TopBannerButton';
