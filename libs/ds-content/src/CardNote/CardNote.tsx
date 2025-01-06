import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { CardNoteProps } from './CardNote.types';
import {
  getCardNoteSvgPathDefault,
  getCardNoteTitleAsDefault,
  getCardNoteVariantDefault,
} from './defaults';

import styles from './CardNote.module.scss';

export const CardNote = forwardRef<HTMLDivElement, CardNoteProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      title,
      titleAs = getCardNoteTitleAsDefault(),
      variant = getCardNoteVariantDefault(),
      svgPath = getCardNoteSvgPathDefault(variant),
      showNote: showNoteExternal,
      onClose,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('Shared', { i18n: dsI18n });
    const [showNoteInternal, setShowNoteInternal] = useState<boolean>(true);

    const showNote =
      showNoteExternal !== undefined ? showNoteExternal : showNoteInternal;

    if (!showNote) {
      return <> </>;
    }

    return (
      <div
        ref={ref}
        id={id}
        className={`${className} ${styles.cardNote}`}
        lang={lang}
        data-testid={dataTestId}
        data-variant={variant}
      >
        <div className={styles.cardNoteHeadingContainer}>
          <Icon className={styles.cardNoteIcon} svgPath={svgPath} />
          <Heading level={5} as={titleAs}>
            {title}
          </Heading>
          <IconButton
            className={styles.cardNoteCloseButton}
            svgPath={CancelSVGpath}
            title={t('shared.Close')}
            onClick={() => {
              setShowNoteInternal(false);
              onClose?.();
            }}
          />
        </div>
        {children}
        <div className={styles.cardNoteArrow}></div>
      </div>
    );
  }
);
