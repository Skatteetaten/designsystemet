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
        return action.successFiles ? state.concat(action.successFiles) : state;
      }
      case 'SUCCESS': {
        return state.concat(action.files);
      }
      case 'REMOVE': {
        if (action.file.id) {
          return state.filter((file) => file.id !== action.file.id);
        } else {
          return state.filter((file) => file.name !== action.file.name);
        }
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
    files.forEach((file) => {
      if (file.id && state.some((it) => it.id === file.id)) {
        throw Error('Filen er allerede i lista.');
      }
    });

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
    setIsUploading(false);

    dispatch({ type: FileActionType.ERROR, files, successFiles: succeeded });

    files.forEach((file) => {
      if (file.id && state.some((it) => it.id === file.id)) {
        throw new Error('Filen er allerede i lista.');
      }
    });

    setUploadResult({ data: errorMessage, hasUploadFailed: true });
  };
  const remove: RemoveMethod = (file) => {
    dispatch({ type: FileActionType.REMOVE, file });
    setUploadResult(undefined);
  };

  const hasNameAndId = (
    value: unknown
  ): value is { name: string; id?: string } =>
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    typeof value.name === 'string' &&
    (('id' in value && typeof value.id === 'string') || 'id'! in value);

  const isUploadError = (
    uploadStatusData: unknown
  ): uploadStatusData is FileUploaderError => {
    return (
      Array.isArray(uploadStatusData) &&
      !uploadStatusData.some((data) => {
        if (Array.isArray(data.files)) {
          if (data.files.some((file: unknown) => !hasNameAndId(file))) {
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
        <React.Fragment key={error.error}>
          <span>{`${error.error}:`}</span>
          <List>
            {error.files.map((file) => (
              <List.Element key={file.id ?? file.name}>
                {file.name}
              </List.Element>
            ))}
          </List>
        </React.Fragment>
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
