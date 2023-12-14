import { forwardRef, JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CheckSVGpath, Icon } from '@skatteetaten/ds-icons';

import { TopBannerLangPickerButtonProps } from './TopBannerLangPickerButton.types';

import styles from './TopBannerLangPickerButton.module.scss';

export const TopBannerLangPickerButton = forwardRef<
  HTMLButtonElement,
  TopBannerLangPickerButtonProps
>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      flagIcon,
      ariaCurrent,
      onClick,
      onKeyDown,
      children,
    },
    ref
  ): JSX.Element => {
    const concatenatedClassNames = `${
      ariaCurrent ? styles.buttonCurrent : ''
    } ${styles.button} ${className}`;

    return (
      <button
        ref={ref}
        id={id}
        className={concatenatedClassNames}
        lang={lang}
        data-testid={dataTestId}
        aria-current={ariaCurrent}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span className={styles.flagWrapper}>{flagIcon}</span>
        <span className={styles.buttonText}>{children}</span>
        {ariaCurrent && <Icon svgPath={CheckSVGpath} />}
      </button>
    );
  }
);

TopBannerLangPickerButton.displayName = 'TopBannerLangPickerButton';
