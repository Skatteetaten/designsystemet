import {
  ChangeEvent,
  DragEvent,
  forwardRef,
  useId,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { AttachFileIcon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';
import { Alert } from '@skatteetaten/ds-status';

import { FileUploaderComponent, FileUploaderProps } from './FileUploader.types';
import { useFileUploader } from './useFileUploader';
import { getFiles, isChangeEvent, normalize } from './utils';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FileUploaderFile } from '../FileUploaderFile/FileUploaderFile';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './FileUploader.module.scss';

export const FileUploader = forwardRef<HTMLDivElement, FileUploaderProps>(
  (
    {
      id: externalId,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      acceptedFileFormats,
      uploadResult,
      buttonText: buttonTextExternal,
      errorMessage,
      fileFormatsText,
      helpProps,
      invalidCharacterRegexp,
      uploadedFiles,
      multiple,
      hasError,
      isUploading,
      onFileChange,
      onFileDelete,
    },
    ref
  ) => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [srOnlyText, setSrOnlyText] = useState<string>();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const generatedId = useId();

    const id = externalId ?? generatedId;
    const fileformatsId = `${id}-accepted-formats`;
    const buttonTextId = `${id}-upload-button`;

    const acceptedFormatsAsCommaSeparatedString =
      acceptedFileFormats?.join(', ');

    const defaultButtonText = multiple
      ? t('fileuploader.AddMultipleLabel')
      : t('fileuploader.AddSingleLabel');

    const buttonText = buttonTextExternal ?? defaultButtonText;

    const handleFileChange = (
      event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLButtonElement>
    ): void => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
      if (isUploading) {
        return;
      }

      const files = getFiles(event);
      if (invalidCharacterRegexp) {
        const normalizedFiles = files.map((file) => {
          const normalizedName = normalize(file, invalidCharacterRegexp);
          return new File([file], normalizedName);
        });
        onFileChange?.(normalizedFiles);
      } else {
        onFileChange?.(files);
      }

      if (isChangeEvent(event)) {
        /**
         * Resetter verdien slik at Chrome tillatter å laste opp samme fil flere ganger.
         * Det skal være mulig å laste opp slettede filer på nytt.
         */
        event.target.value = '';
      }
    };

    const handleDragEnter = (event: DragEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
    };

    const handleDragOver = (event: DragEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleDeleteFile = (file: string): void => {
      if (onFileDelete?.(file)) {
        buttonRef.current?.focus();
        //TODO oversettelser
        setSrOnlyText(`${file} slettet`);
      } else {
        setSrOnlyText(t('fileuploader.GeneralDeleteError'));
      }
      setTimeout(() => {
        setSrOnlyText('');
      }, 3000);
    };
    const concatenatedClassnames = `${styles.container} ${className}`;

    return (
      <div
        ref={ref}
        className={concatenatedClassnames}
        lang={lang}
        data-testid={dataTestId}
      >
        {helpProps && <LabelWithHelp {...helpProps} htmlFor={id} />}
        <button
          ref={buttonRef}
          disabled={isUploading}
          id={id}
          className={`${styles.dropZone} ${
            hasError ? styles.dropZone_error : ''
          } ${isDragging && !isUploading ? styles.dropZone_dragging : ''}`}
          aria-describedby={`${buttonTextId} ${fileformatsId}`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleFileChange}
          onClick={(): void => {
            inputRef?.current?.click();
          }}
        >
          <div className={styles.removePointerEvents}>
            {isUploading ? (
              <Spinner
                classNames={{ title: styles.spinner }}
                size={'large'}
                color={'blue'}
              >
                {t('fileuploader.InProgressLabel')}
              </Spinner>
            ) : (
              <AttachFileIcon className={styles.icon} size={'large'} />
            )}
            <label className={styles.innerLabel} htmlFor={id}>
              {!isUploading && buttonText}
            </label>
            <input
              ref={inputRef}
              type={'file'}
              accept={acceptedFormatsAsCommaSeparatedString}
              multiple={multiple}
              hidden
              onChange={handleFileChange}
            />
          </div>
        </button>
        {acceptedFileFormats && (
          <span id={fileformatsId} className={styles.fileInfo}>
            {fileFormatsText ?? `${t('fileuploader.FormatLabel')} `}

            <span className={styles.fileFormatList}>
              {acceptedFormatsAsCommaSeparatedString}
            </span>
          </span>
        )}
        <ErrorMessage showError={hasError}>{errorMessage ?? ''}</ErrorMessage>
        <Alert
          showAlert={!!uploadResult}
          className={styles.alert}
          variant={uploadResult?.hasUploadFailed ? 'warning' : 'success'}
        >
          {uploadResult?.statusMessage}
        </Alert>
        <ul className={styles.fileList}>
          {uploadedFiles?.map(
            (file) =>
              !file.errorMessage && (
                <FileUploaderFile
                  key={file.name}
                  href={file.href}
                  onClick={(): void => handleDeleteFile(file.name)}
                >
                  {file.name}
                </FileUploaderFile>
              )
          )}
        </ul>
        <div
          className={styles.srOnly}
          aria-live={'polite'}
          aria-atomic={'true'}
        >
          {srOnlyText}
        </div>
      </div>
    );
  }
) as FileUploaderComponent;

FileUploader.useFileUploader = useFileUploader;

FileUploader.displayName = 'FileUploader';
