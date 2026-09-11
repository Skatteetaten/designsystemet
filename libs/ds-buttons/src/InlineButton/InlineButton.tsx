/* eslint-disable jsx-a11y/no-access-key */
import { JSX } from 'react';

import { Icon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

import { InlineButtonProps } from './InlineButton.types';

import styles from './InlineButton.module.scss';

/**
 * InlineButton
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/inlinebutton)
 */
export const InlineButton = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  iconPosition = 'left',
  spinnerTitle,
  svgPath,
  accessKey,
  disabled = false,
  form,
  type = 'button',
  ariaDescribedby,
  brightness = 'default',
  hasSpinner = false,
  onBlur,
  onClick,
  onFocus,
  children,
}: InlineButtonProps): JSX.Element => {
  const hasIconLeft = svgPath && iconPosition === 'left';
  const hasIconRight = svgPath && iconPosition === 'right';
  const withIconLeftClassName = hasIconLeft ? styles.button_withIconLeft : '';
  const withIconRightClassName = hasIconRight
    ? styles.button_withIconRight
    : '';
  const concatenatedClassName =
    `${styles.button} ${withIconLeftClassName} ${withIconRightClassName} ${className}`.trim();
  const hideClassName = hasSpinner ? styles.hide : '';

  return (
    <button
      ref={ref}
      id={id}
      className={concatenatedClassName}
      lang={lang}
      data-testid={dataTestId}
      data-brightness={brightness}
      accessKey={accessKey}
      form={form}
      disabled={disabled}
      type={type}
      aria-describedby={ariaDescribedby}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
    >
      {hasIconLeft && (
        <Icon
          className={`${styles.icon} ${hideClassName}`.trim()}
          svgPath={svgPath}
        />
      )}
      <span className={hideClassName}>{children}</span>
      {hasIconRight && (
        <Icon
          className={`${styles.icon} ${hideClassName}`.trim()}
          svgPath={svgPath}
        />
      )}
      {hasSpinner && (
        <Spinner
          className={styles.spinner}
          color={disabled ? 'black' : 'interactive'}
          size={'small'}
          hideTitle
        >
          {spinnerTitle}
        </Spinner>
      )}
    </button>
  );
};

InlineButton.displayName = 'InlineButton';
