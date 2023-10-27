import React, { forwardRef, JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  getSpinnerColorDefault,
  getSpinnerTextPositionDefault,
  getSpinnerSizeDefault,
} from './defaults';
import { SpinnerProps } from './Spinner.types';

import styles from './Spinner.module.scss';

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      color = getSpinnerColorDefault(),
      textPosition = getSpinnerTextPositionDefault(),
      size = getSpinnerSizeDefault(),
      hideText,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_status', { i18n: dsI18n });
    const [text, setText] = useState<string>();

    /**
     * useEffect sørger for at div med role=status blir rendret før children.
     * Dette gjør at skjermleser vet at den skal lytte etter tekster som må leses opp.
     */
    useEffect(() => {
      setTimeout(() => {
        setText(children ?? t('spinner.LoadingLabel'));
      }, 0);
    }, [children, t]);

    const sizeClassname = size ? styles[`spinner_${size}`] : undefined;
    const colorClassname = color ? styles[`spinner_${color}`] : undefined;
    const positionClassname =
      textPosition === 'right'
        ? styles.spinner_flexRow
        : styles.spinner_flexColumn;

    const concatenatedClassnames = `${styles.spinner} ${colorClassname} ${positionClassname} ${sizeClassname} ${className}`;
    return (
      <div
        ref={ref}
        role={'status'}
        id={id}
        className={concatenatedClassnames}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={`${styles.spinnerAnimation} `} />
        <span
          className={`${styles.spinnerText} ${hideText ? styles.srOnly : ''} ${
            textPosition === 'bottom' ? styles.spinnerText_centerText : ''
          }`}
        >
          {text}
        </span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
