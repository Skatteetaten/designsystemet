import { JSX } from 'react';

import { Icon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

/**
 * IconButton
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-iconbutton--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/iconbutton/) - Brukerveiledning
 */
export const IconButton = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  brightness = 'default',
  size = 'medium',
  spinnerTitle,
  svgPath,
  accessKey,
  disabled = false,
  title,
  type = 'button',
  ariaDescribedby,
  ariaExpanded,
  hasSpinner = false,
  isOutlined = false,
  onClick,
  onBlur,
  onFocus,
}: IconButtonProps): JSX.Element => {
  const sizeClassName = styles[`button_${size}`];
  const outlineClassName = isOutlined ? styles.button_outlined : '';
  return (
    <button
      ref={ref}
      id={id}
      className={`${styles.button} ${sizeClassName} ${outlineClassName} ${className}`.trim()}
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
        <Icon
          className={styles.icon}
          size={size}
          svgPath={svgPath}
          title={title}
        />
      )}
      {hasSpinner && (
        <Spinner
          className={styles.spinner}
          color={disabled ? 'black' : 'blue'}
          size={size}
          hideTitle
        >
          {spinnerTitle}
        </Spinner>
      )}
    </button>
  );
};

IconButton.displayName = 'IconButton';
