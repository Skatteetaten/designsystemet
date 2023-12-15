import React, { ReactNode, useReducer, useState } from 'react';

import { dsI18n } from '@skatteetaten/ds-core-utils';
import { List } from '@skatteetaten/ds-typography';

import { UploadedFile } from './FileUploader.types';
import {
  UploadResultData,
  UseFileUploaderReturn,
  FileAction,
  FileUploaderError,
  SuccessMethod,
  FailureMethod,
  LoadingMethod,
  RemoveMethod,
  FileActionType,
} from './useFileUploader.types';

export const useFileUploader = <T,>(
  renderStatus?: (status: UploadResultData<T>) => ReactNode
): UseFileUploaderReturn<T> => {
  const reducer = (
    state: Array<UploadedFile>,
    action: FileAction
  ): Array<UploadedFile> => {
    switch (action.type) {
      case 'ERROR': {
        return (
          action.successFiles?.reduce((acc, curr) => {
            if (!acc.some((it) => it.name === curr.name)) {
              acc.push({ name: curr.name, href: curr?.href });
            }
            return acc;
          }, state) ?? state
        );
      }
      case 'SUCCESS': {
        return action.files.reduce((acc, curr) => {
          if (!acc.some((it) => it.name === curr.name)) {
            acc.push({ name: curr.name, href: curr.href });
          }
          return acc;
        }, state);
      }
      case 'REMOVE': {
        return state.filter((file) => file.name !== action.file);
      }
    }
    return [...state];
  };

  const initialState: Array<UploadedFile> = [];
  const [state, dispatch] = useReducer<
    (state: Array<UploadedFile>, action: FileAction) => Array<UploadedFile>
  >(reducer, initialState);

  const [uploadResult, setUploadResult] = useState<UploadResultData<T>>();
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const setSuccess: SuccessMethod<T> = (files, data) => {
    setIsUploading(false);
    dispatch({ type: FileActionType.SUCCESS, files });

    const successStatus = dsI18n.t('ds_forms:fileuploader.UploadedSummary', {
      fileCount: files.length,
    });

    setUploadResult({ uploadedFilesMessage: successStatus, data });
  };

  const setLoading: LoadingMethod = () => {
    setUploadResult(undefined);
    setIsUploading(true);
  };

  const setFailure: FailureMethod<T> = (files, errorMessage, succeeded?) => {
    dispatch({ type: FileActionType.ERROR, files, successFiles: succeeded });
    setIsUploading(false);
    setUploadResult({ data: errorMessage, hasUploadFailed: true });
  };
  const remove: RemoveMethod = (file) => {
    dispatch({ type: FileActionType.REMOVE, file });
    setUploadResult(undefined);
  };

  const isUploadError = (
    uploadStatusData: unknown
  ): uploadStatusData is FileUploaderError => {
    return (
      Array.isArray(uploadStatusData) &&
      !uploadStatusData.some((data) => {
        if (Array.isArray(data.files)) {
          if (data.files.some((file: unknown) => typeof file !== 'string')) {
            return true;
          }

          return typeof data.error !== 'string';
        }

        return true;
      })
    );
  };

  const renderFileStatusMessage = (status: UploadResultData<T>): ReactNode => {
    if (renderStatus) {
      return renderStatus(status);
    }
    if (status.hasUploadFailed && isUploadError(status.data)) {
      return status.data?.map((error) => (
        <>
          <span key={error.error}>{`${error.error}:`}</span>
          <List>
            {error.files.map((file) => (
              <List.Element key={file}>{file}</List.Element>
            ))}
          </List>
        </>
      ));
    } else {
      return status.uploadedFilesMessage;
    }
  };

  return [
    {
      uploadedFiles: state,
      uploadResult: uploadResult
        ? {
            hasUploadFailed: uploadResult?.hasUploadFailed,
            statusMessage: renderFileStatusMessage(uploadResult),
          }
        : undefined,
      isUploading,
    },
    setSuccess,
    setLoading,
    setFailure,
    remove,
  ];
};
