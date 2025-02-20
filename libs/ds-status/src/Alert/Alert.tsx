import { forwardRef, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  CompletedSVGpath,
  Icon,
  InfoSquareSVGpath,
  WarningStopSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { AlertProps } from './Alert.types';
import { getAlertBackgroundBrightnessDefault } from './defaults';

import styles from './Alert.module.scss';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      backgroundBrightness = getAlertBackgroundBrightnessDefault(),
      svgPath,
      variant,
      ariaLive,
      showAlert,
      children,
      onClose,
    },
    ref
  ): JSX.Element => {
    const variantClassName = styles[`alert_${variant}`];
    const { t } = useTranslation('ds_status', { i18n: dsI18n });

    let svg;
    if (svgPath) {
      svg = svgPath;
    } else if (variant === 'success') {
      svg = CompletedSVGpath;
    } else if (variant === 'neutral') {
      svg = InfoSquareSVGpath;
    } else if (variant === 'warning') {
      svg = WarningSVGpath;
    } else {
      svg = WarningStopSVGpath;
    }

    const getAriaLive = (): typeof ariaLive => {
      if (ariaLive) {
        return ariaLive;
      } else if (variant === 'danger') {
        return 'assertive';
      } else {
        return 'polite';
      }
    };

    const concatenatedClassName =
      `${styles.alert} ${variantClassName} ${backgroundBrightness === 'light' ? styles.alert_light : ''} ${className ?? ''}`.trim();

    return (
      <div
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        aria-live={getAriaLive()}
        aria-atomic
      >
        {showAlert && children && (
          <div className={concatenatedClassName}>
            <span className={styles.iconWrapper}>
              <Icon size={'large'} svgPath={svg} className={styles.icon} />
            </span>
            <span className={styles.content}>{children}</span>
            {onClose && (
              <IconButton
                className={styles.closeButton}
                size={'small'}
                svgPath={CancelSVGpath}
                title={t('alert.CloseMessage')}
                onClick={(): void => {
                  onClose?.();
                }}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { getAlertBackgroundBrightnessDefault };
