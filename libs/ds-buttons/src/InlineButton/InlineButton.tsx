/* eslint-disable jsx-a11y/no-access-key */
import { JSX } from 'react';

import {
  getCommonButtonTypeDefault,
  getCommonClassNameDefault,
} from '@skatteetaten/ds-core-utils';
import { Icon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

import {
  getInlineButtonBrightnessDefault,
  getInlineButtonPositionDefault,
} from './defaults';
import { InlineButtonProps } from './InlineButton.types';

import styles from './InlineButton.module.scss';

export const InlineButton = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  iconPosition = getInlineButtonPositionDefault(),
  spinnerTitle,
  svgPath,
  accessKey,
  disabled,
  form,
  type = getCommonButtonTypeDefault(),
  ariaDescribedby,
  brightness = getInlineButtonBrightnessDefault(),
  hasSpinner,
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
          color={disabled ? 'black' : 'blue'}
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

export { getInlineButtonPositionDefault, getInlineButtonBrightnessDefault };
