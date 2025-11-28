import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';

import { TopBannerButtonProps } from './TopBannerButton.types';

import styles from './TopBannerButton.module.scss';

export const TopBannerButton = ({
  ref,
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
  onFocus,
  children,
}: TopBannerButtonProps): JSX.Element => {
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
      onFocus={onFocus}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {svgPath && (
        <>
          <span className={styles.iconWrapper}>
            <Icon svgPath={svgPath} className={styles.icon} title={title} />
          </span>
          <span
            className={`${styles.buttonText} ${classNames?.text ?? ''}`.trim()}
          >
            {children}
          </span>
        </>
      )}
      {!svgPath && children}
    </button>
  );
};

TopBannerButton.displayName = 'TopBannerButton';
