import React, { forwardRef, useId } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import {
  CancelSVGpath,
  CheckIcon,
  FileOutlineIcon,
  FileOutlineSVGpath,
} from '@skatteetaten/ds-icons';

import { FileUploaderFileProps } from './FileUploaderFile.types';

import styles from './FileUploaderFile.module.scss';

//TODO håndtere whitespace i filnavn
export const FileUploaderFile = forwardRef<
  HTMLLIElement,
  FileUploaderFileProps
>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      href,
      onClick,
      children,
    },
    ref
  ) => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
      <li
        ref={ref}
        id={id}
        className={`${styles.fileListItem} ${className}`}
        lang={lang}
        data-testid={dataTestId}
      >
        <div className={styles.fileListContainer}>
          <span>
            {href ? (
              <Link
                id={`${id}-file-${children}`}
                svgPath={FileOutlineSVGpath}
                href={href}
                download
              >
                {children}
              </Link>
            ) : (
              <>
                <FileOutlineIcon
                  className={styles.fileListIcon}
                  size={'small'}
                  title={t('fileuploader.FileIconLabel')}
                />
                <span
                  id={`${id}-file-${children}`}
                  className={styles.fileListFile}
                >
                  {children}
                </span>
              </>
            )}
            <CheckIcon size={'medium'} className={styles.successIcon} />
          </span>
          <span>
            <IconButton
              svgPath={CancelSVGpath}
              title={t('fileuploader.DeleteLabel')}
              ariaDescribedby={`${id}-file-${children}`}
              onClick={onClick}
            />
          </span>
        </div>
      </li>
    );
  }
);

FileUploaderFile.displayName = 'FileUploaderFile';
