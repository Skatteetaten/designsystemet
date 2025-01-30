import { forwardRef, JSX, useEffect, useId, useState } from 'react';
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
      percentComplete,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_progress', { i18n: dsI18n });
    const [isRendered, setIsRendered] = useState<boolean>(false);
    const generatedId = useId();
    const titleId = `title-${id ?? generatedId}`;

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
    const isInPercentageMode = percentComplete !== undefined;
    const spinnerLabel = t('spinner.LoadingLabel');

    const getAriaBusyStatus = (): 'true' | 'false' | undefined => {
      if (!isInPercentageMode) return undefined;

      if (percentComplete < 100) {
        return 'true';
      } else {
        return 'false';
      }
    };
    return (
      <>
        <div
          ref={ref}
          aria-labelledby={isInPercentageMode ? titleId : undefined}
          aria-live={!isInPercentageMode ? 'polite' : undefined}
          aria-atomic={!isInPercentageMode ? 'true' : undefined}
          role={isInPercentageMode ? 'progressbar' : undefined}
          aria-valuemin={isInPercentageMode ? 0 : undefined}
          aria-valuemax={isInPercentageMode ? 100 : undefined}
          aria-busy={getAriaBusyStatus()}
          aria-valuenow={percentComplete}
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
            id={titleId}
            className={`${styles.spinnerTitle} ${
              hideTitle ? styles.srOnly : ''
            } ${
              titlePosition === 'bottom' ? styles.spinnerTitle_centerText : ''
            } ${classNames?.title ?? ''}`}
          >
            {isInPercentageMode && `${spinnerLabel} (${percentComplete} %)`}
            {!isInPercentageMode && isRendered && (children ?? spinnerLabel)}
          </span>
        </div>
        {isInPercentageMode && (
          <div
            className={styles.srOnly}
            aria-atomic={'true'}
            aria-live={'polite'}
          >
            {`${percentComplete} %`}
          </div>
        )}
      </>
    );
  }
);

Spinner.displayName = 'Spinner';

export {
  getSpinnerColorDefault,
  getSpinnerSizeDefault,
  getSpinnerTitlePositionDefault,
};
