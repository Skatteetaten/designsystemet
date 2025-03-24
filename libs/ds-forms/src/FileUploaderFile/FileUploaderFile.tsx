import { useId, JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  CheckIcon,
  DescriptionIcon,
  FileIcon,
  FileOutlineIcon,
  FileOutlineSVGpath,
} from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';

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
  showSpinner,
  onClick,
  onClickDelete,
  children,
}: FileUploaderFileProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const generatedId = useId();
  const id = externalId ?? generatedId;
  const hasLink = !!href;

  return (
    <li
      ref={ref}
      id={id}
      className={`${styles.fileListItem} ${hasLink ? styles.hasLink : ''} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      <Card spacing={'xxs'} className={styles.cardWithAnimatedBorder}>
        <Card.Content
          classNames={{
            children: styles.fileContentContainer,
          }}
          rightContent={
            showSpinner ? (
              <Spinner
                className={styles.fileSpinner}
                color={'blue'}
                size={'medium'}
                hideTitle
              >
                {t('fileuploader.DeleteInProgress')}
              </Spinner>
            ) : (
              <IconButton
                svgPath={CancelSVGpath}
                size={'small'}
                title={t('fileuploader.DeleteLabel')}
                ariaDescribedby={`${id}-file-${children}`}
                onClick={onClickDelete}
              />
            )
          }
        >
          <div className={styles.iconWrapper}>
            <DescriptionIcon
              className={styles.fileListIcon}
              size={'small'}
              title={fileIconTitle ?? t('fileuploader.FileIconLabel')}
            />
          </div>

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
