import { useId, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CancelSVGpath, DescriptionIcon } from '@skatteetaten/ds-icons';

import { FileUploaderFileProps } from './FileUploaderFile.types';

import styles from './FileUploaderFile.module.scss';

export const FileUploaderFile = ({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  fileIconTitle,
  href,
  animate,
  showSpinner,
  onClick,
  onClickDelete,
  children,
}: FileUploaderFileProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const generatedId = useId();
  const id = externalId ?? generatedId;

  return (
    <li
      ref={ref}
      id={id}
      className={`${styles.fileListItem} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      <Card
        spacing={'xxs'}
        className={`${styles.fileCard} ${animate ? styles.fileCard_withAnimation : ''}`.trim()}
      >
        <Card.Content
          classNames={{
            children: styles.fileContentContainer,
            rightContent: styles.fileContentRight,
          }}
          rightContent={
            <IconButton
              className={styles.fileDeleteButton}
              svgPath={CancelSVGpath}
              size={'extraSmall'}
              title={t('fileuploader.DeleteLabel')}
              spinnerTitle={t('fileuploader.DeleteInProgress')}
              hasSpinner={showSpinner}
              ariaDescribedby={`${id}-file-${children}`}
              onClick={onClickDelete}
            />
          }
        >
          <DescriptionIcon
            className={styles.fileListIcon}
            size={'small'}
            title={fileIconTitle ?? t('fileuploader.FileIconLabel')}
          />
          <div className={styles.fileNameContainer}>
            {href ? (
              <Link
                id={`${id}-file-${children}`}
                href={href}
                download
                onClick={onClick}
              >
                {children}
              </Link>
            ) : (
              <span id={`${id}-file-${children}`}>{children}</span>
            )}
          </div>
        </Card.Content>
      </Card>
    </li>
  );
};

FileUploaderFile.displayName = 'FileUploaderFile';
