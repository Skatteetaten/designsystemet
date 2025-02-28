import { forwardRef, useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { CardAlertProps } from './CardAlert.types';
import {
  getCardAlertSvgPathDefault,
  getCardAlertTitleAsDefault,
  getCardAlertVariantDefault,
} from './defaults';

import styles from './CardAlert.module.scss';

export const CardAlert = forwardRef<HTMLDivElement, CardAlertProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      title,
      titleAs = getCardAlertTitleAsDefault(),
      variant = getCardAlertVariantDefault(),
      svgPath = getCardAlertSvgPathDefault(variant),
      showAlert: showAlertExternal,
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });
    const [showAlertInternal, setShowAlertInternal] = useState<boolean>(true);

    const showAlert =
      showAlertExternal !== undefined ? showAlertExternal : showAlertInternal;

    if (!showAlert) {
      return <> </>;
    }

    return (
      <div
        ref={ref}
        id={id}
        className={`${styles.cardAlert} ${className}`.trim()}
        lang={lang}
        data-testid={dataTestId}
        data-variant={variant}
      >
        <div className={styles.cardAlertHeadingContainer}>
          <Icon className={styles.cardAlertIcon} svgPath={svgPath} />
          <Heading level={5} as={titleAs}>
            {title}
          </Heading>
          <IconButton
            className={styles.cardAlertCloseButton}
            svgPath={CancelSVGpath}
            title={t('shared.Close')}
            onClick={() => {
              setShowAlertInternal(false);
              onClose?.();
            }}
          />
        </div>
        {children}
        <div className={styles.cardAlertArrow}></div>
      </div>
    );
  }
);
