import { forwardRef, JSX, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import {
  getSpinnerColorDefault,
  getSpinnerTitlePositionDefault,
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
      classNames,
      color = getSpinnerColorDefault(),
      titlePosition = getSpinnerTitlePositionDefault(),
      size = getSpinnerSizeDefault(),
      hideTitle,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_status', { i18n: dsI18n });
    const [isRendered, setIsRendered] = useState<boolean>(false);

    /**
     * useEffect sørger for at div med role=status blir rendret før children.
     * Dette gjør at skjermleser vet at den skal lytte etter tekster som må leses opp.
     */
    useEffect(() => {
      setTimeout(() => {
        setIsRendered(true);
      }, 0);
    }, []);

    const sizeClassname = size ? styles[`spinner_${size}`] : undefined;
    const colorClassname = color ? styles[`spinner_${color}`] : undefined;
    const positionClassname =
      titlePosition === 'right'
        ? styles.spinner_flexRow
        : styles.spinner_flexColumn;

    const concatenatedClassnames = `${
      styles.spinner
    } ${colorClassname} ${positionClassname} ${sizeClassname} ${className} ${
      classNames?.container ?? ''
    }`;
    return (
      <div
        ref={ref}
        aria-live={'polite'}
        aria-atomic={'true'}
        id={id}
        className={concatenatedClassnames}
        lang={lang}
        data-testid={dataTestId}
      >
        <div
          className={`${styles.spinnerAnimation} ${
            classNames?.animation ?? ''
          }`}
        />
        <span
          className={`${styles.spinnerTitle} ${
            hideTitle ? styles.srOnly : ''
          } ${
            titlePosition === 'bottom' ? styles.spinnerTitle_centerText : ''
          } ${classNames?.title ?? ''}`}
        >
          {isRendered && (children ?? t('spinner.LoadingLabel'))}
        </span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export {
  getSpinnerColorDefault,
  getSpinnerSizeDefault,
  getSpinnerTitlePositionDefault,
};
