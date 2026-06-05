import { useState, JSX, useContext, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  Icon,
  InfoSquareSVGpath,
  WarningStopSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { CardAlertProps, CardAlertVariant } from './CardAlert.types';
import { CardContext } from '../CardContext';

import styles from './CardAlert.module.scss';

const getCardAlertDefaultSvgPath = (
  variant: CardAlertVariant
): ReactElement<SVGPathElement> => {
  switch (variant) {
    case 'warning':
      return WarningSVGpath;
    case 'danger':
      return WarningStopSVGpath;
    case 'info':
      return InfoSquareSVGpath;
  }
};

export const CardAlert = ({
  ref,
  id,
  className = '',
  lang,
  'data-testid': dataTestId,
  title,
  titleAs = 'h3',
  variant = 'warning',
  svgPath,
  showAlert: showAlertExternal,
  onClose,
  children,
}: CardAlertProps): JSX.Element => {
  const { t } = useTranslation('Shared', { i18n: dsI18n });
  const [showAlertInternal, setShowAlertInternal] = useState<boolean>(true);

  const { alertHeadingId } = useContext(CardContext);

  const showAlert =
    showAlertExternal !== undefined ? showAlertExternal : showAlertInternal;

  const resolvedSvgPath = svgPath ?? getCardAlertDefaultSvgPath(variant);

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
        <Icon className={styles.cardAlertIcon} svgPath={resolvedSvgPath} />
        <Heading id={alertHeadingId} level={5} as={titleAs}>
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
};

CardAlert.displayName = 'CardAlert';
