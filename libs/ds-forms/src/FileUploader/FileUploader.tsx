import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { AttachFileIcon } from '@skatteetaten/ds-icons';
import { Spinner } from '@skatteetaten/ds-progress';
import { Alert } from '@skatteetaten/ds-status';

import { getFileUploaderGetSpinnerLabelDefault } from './defaults';
import {
  FileUploaderComponent,
  FileUploaderProps,
  UploadedFile,
} from './FileUploader.types';
import { useFileUploader } from './useFileUploader';
import { getFiles, isChangeEvent, normalize } from './utils';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FileUploaderFile } from '../FileUploaderFile/FileUploaderFile';
import { LabelWithHelp } from '../LabelWithHelp/LabelWithHelp';

import styles from './FileUploader.module.scss';

export const FileUploader = (({
  ref,
  id: externalId,
  className = getCommonClassNameDefault(),
  classNames,
  lang,
  'data-testid': dataTestId,
  acceptedFileFormats,
  acceptedFileFormatsDescription,
  acceptedFileFormatsDisplay,
  description,
  errorMessage,
  fileIconTitle,
  helpSvgPath,
  helpText,
  label,
  titleHelpSvg,
  uploadResult,
  uploadedFiles,
  invalidCharacterRegexp,
  spinnerLabel = getFileUploaderGetSpinnerLabelDefault(),
  hasSpacing,
  hideLabel,
  showRequiredMark,
  shouldNormalizeFileName,
  multiple,
  isUploading,
  onFileChange,
  onFileDelete,
  onFileDownload,
  onHelpToggle,
  children: buttonTextExternal,
}: FileUploaderProps) => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [srOnlyText, setSrOnlyText] = useState<string>();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const generatedId = useId();
  const [filesPendingDelete, setFilesPendingDelete] = useState<
    Record<string, boolean>
  >({});

  const [newFiles, setNewFiles] = useState<UploadedFile[]>([]);
  const prevFilesRef = useRef<UploadedFile[] | undefined>(undefined);

  useEffect(() => {
    if (uploadedFiles) {
      const newFiles = uploadedFiles.filter(
        (file) =>
          !prevFilesRef.current?.some((prevFile) => prevFile.id === file.id)
      );

      if (
        newFiles.length > 0 &&
        prevFilesRef.current &&
        prevFilesRef.current.length > 0
      ) {
        setNewFiles(newFiles);
      }

      prevFilesRef.current = uploadedFiles;
    }
  }, [uploadedFiles]);

  const id = externalId ?? generatedId;

  const descriptionId = `descId-${useId()}`;
  const errorId = `${useId()}-fileuploader-error`;
  const fileformatsId = `${id}-accepted-formats`;

  const acceptedFormatsAsCommaSeparatedString = acceptedFileFormats?.join(', ');

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
    if (shouldNormalizeFileName) {
      const normalizedFiles = files.map((file) => {
        const normalizedName = normalize(file, invalidCharacterRegexp);
        return new File([file], normalizedName, { type: file.type });
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

  const deleteButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const UpdateFocusAfterDelete = (
    uploadedFiles: UploadedFile[] | undefined,
    deletedFileIndex: number
  ): void => {
    let previousFileKey: string | undefined;
    if (deletedFileIndex > 0 && uploadedFiles) {
      const prevFile = uploadedFiles[deletedFileIndex - 1];
      previousFileKey = prevFile?.id ?? prevFile?.name;
    }

    if (previousFileKey) {
      setTimeout(() => {
        deleteButtonRefs.current[previousFileKey]?.focus();
      }, 0);
    } else {
      buttonRef.current?.focus();
    }
  };

  const handleDeleteFile = async (
    file: UploadedFile,
    index: number
  ): Promise<void> => {
    if (!onFileDelete) {
      return;
    }

    const key = file.id ?? file.name;
    /**
     * Her er det viktig at en funksjon sendes inn til setState for å få tak i prevState.
     * Hvis dette ikke gjøres oppstår en race-condition dersom man sletter to filer samtidig.
     */

    const timeoutId = setTimeout((): void => {
      setFilesPendingDelete((prevState) => ({ ...prevState, [key]: true }));
    }, 1000);

    const deletedPromise = onFileDelete(file);
    const deleted = await deletedPromise;
    // hvis sletting er ferdig innen 1 sek skal vi ikke vise spinner
    clearTimeout(timeoutId);

    if (deleted) {
      UpdateFocusAfterDelete(uploadedFiles, index);
      setSrOnlyText(t('fileuploader.DeleteConfirmation'));
    } else {
      setSrOnlyText(t('fileuploader.GeneralDeleteError'));
    }
    setTimeout(() => {
      setSrOnlyText('');
    }, 3000);

    setFilesPendingDelete((prevState) => ({ ...prevState, [key]: false }));
  };
  const concatenatedClassnames = `${styles.container} ${className} ${
    classNames?.container ?? ''
  }`.trim();

  const ariaDescribedBy = [
    description && descriptionId,
    errorMessage && errorId,
    acceptedFileFormats && fileformatsId,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div
      ref={ref}
      className={concatenatedClassnames}
      lang={lang}
      data-testid={dataTestId}
      data-has-spacing={hasSpacing}
    >
      {label && (
        <LabelWithHelp
          classNames={classNames}
          htmlFor={id}
          hideLabel={hideLabel}
          showRequiredMark={showRequiredMark}
          description={description}
          descriptionId={descriptionId}
          helpSvgPath={helpSvgPath}
          helpText={helpText}
          titleHelpSvg={titleHelpSvg}
          onHelpToggle={onHelpToggle}
        >
          {label}
        </LabelWithHelp>
      )}

      <button
        ref={buttonRef}
        type={'button'}
        id={id}
        className={`${styles.dropZone} ${label && !hideLabel ? styles.dropZoneMarginTop : ''} ${
          errorMessage ? styles.dropZone_error : ''
        } ${isDragging && !isUploading ? styles.dropZone_dragging : ''}`.trim()}
        disabled={isUploading}
        aria-describedby={
          ariaDescribedBy.trim() !== '' ? ariaDescribedBy : undefined
        }
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleFileChange}
        onClick={(): void => {
          if (!isUploading) {
            inputRef?.current?.click();
          }
        }}
      >
        <div className={styles.removePointerEvents}>
          {isUploading ? (
            <Spinner
              classNames={{ title: styles.spinner }}
              size={'large'}
              color={'blue'}
            >
              {spinnerLabel}
            </Spinner>
          ) : (
            <AttachFileIcon className={styles.icon} size={'large'} />
          )}
          <label className={styles.innerLabel} htmlFor={id}>
            {!isUploading && buttonText}
          </label>
          <input
            ref={inputRef}
            data-testid={`${dataTestId}-input`}
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
          {acceptedFileFormatsDescription ??
            `${t('fileuploader.FormatLabel')} `}

          <span className={styles.fileFormatList}>
            {acceptedFileFormatsDisplay ??
              acceptedFormatsAsCommaSeparatedString}
          </span>
        </span>
      )}
      <ErrorMessage
        id={errorId}
        className={classNames?.errorMessage}
        showError={!!errorMessage}
      >
        {errorMessage}
      </ErrorMessage>
      <Alert
        showAlert={!!uploadResult}
        className={styles.alert}
        variant={uploadResult?.hasUploadFailed ? 'error' : 'success'}
      >
        {uploadResult?.statusMessage}
      </Alert>
      {uploadedFiles && (
        <ul className={styles.fileList}>
          {uploadedFiles?.map((file, index) => {
            const isNewFile = newFiles.some(
              (newFile) => newFile.id === file.id
            );
            const fileKey = file.id ?? file.name;
            return (
              <FileUploaderFile
                key={fileKey}
                href={file.href}
                fileIconTitle={fileIconTitle}
                shouldAnimate={isNewFile}
                showSpinner={filesPendingDelete[fileKey]}
                deleteButtonRef={(el) => {
                  deleteButtonRefs.current[fileKey] = el;
                }}
                onClick={(event): void => {
                  onFileDownload?.(event, file);
                }}
                onClickDelete={() => handleDeleteFile(file, index)}
              >
                {file.name}
              </FileUploaderFile>
            );
          })}
        </ul>
      )}
      <div className={styles.srOnly} aria-live={'polite'} aria-atomic={'true'}>
        {srOnlyText}
      </div>
    </div>
  );
}) as FileUploaderComponent;

FileUploader.useFileUploader = useFileUploader;

FileUploader.displayName = 'FileUploader';
