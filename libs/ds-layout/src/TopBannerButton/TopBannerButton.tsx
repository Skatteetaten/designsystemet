import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { getTopBannerButtonVariantDefault } from './defaults';
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
      variant = getTopBannerButtonVariantDefault(),
      ariaExpanded,
      onClick,
      children,
    },
    ref
  ): JSX.Element => {
    const variantIconClassName = styles[`icon_${variant}`];
    const variantClassName = styles[`button_${variant}`];
    const concatenatedClassName =
      `${styles.button} ${variantClassName} ${className} ${classNames?.container}`.trim();

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassName}
        lang={lang}
        data-testid={dataTestId}
        aria-expanded={ariaExpanded}
        onClick={onClick}
      >
        <Icon
          svgPath={svgPath}
          className={`${variantIconClassName} ${styles.icon}`}
          title={title}
        />
        <span className={classNames?.text}>{children}</span>
      </button>
    );
  }
);

TopBannerButton.displayName = 'TopBannerButton';
