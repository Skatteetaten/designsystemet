import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  CompletedSVGpath,
  ErrorSVGpath,
  Icon,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';

import { AlertProps } from './Alert.types';

import styles from './Alert.module.scss';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      svgPath,
      variant,
      ariaLive,
      showAlert,
      showCloseButton,
      children,
    },
    ref
  ): JSX.Element => {
    const variantClassName = styles[`alert_${variant}`];
    const { t } = useTranslation('ds_status', { i18n: dsI18n });
    const [showAlertContent, setShowAlertContent] = useState(showAlert);

    useEffect(() => {
      setShowAlertContent(showAlert);
    }, [showAlert]);

    let svg;
    if (svgPath) {
      svg = svgPath;
    } else if (variant === 'success') {
      svg = CompletedSVGpath;
    } else if (variant === 'neutral') {
      svg = InfoSVGpath;
    } else if (variant === 'warning') {
      svg = ErrorSVGpath;
    } else {
      svg = WarningSVGpath;
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

    return (
      <div
        ref={ref}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        aria-live={getAriaLive()}
      >
        {showAlertContent && (
          <div className={`${styles.alert} ${variantClassName} ${className}`}>
            <span className={styles.iconWrapper}>
              <Icon size={'large'} svgPath={svg} className={styles.icon} />
            </span>
            <span className={styles.content}>{children}</span>
            {showCloseButton && (
              <IconButton
                className={styles.closeButton}
                size={'small'}
                svgPath={CancelSVGpath}
                title={t('alert.CloseMessage')}
                onClick={(): void => setShowAlertContent(false)}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
