import { UploadedFile, UploadResult } from './FileUploader.types';

export interface FileUploaderState {
  uploadedFiles: Array<UploadedFile>;
  uploadResult: UploadResult | undefined;
  isUploading: boolean;
}

export type UploadResultData<T = FileUploaderError> = {
  data?: T;
  uploadedFilesMessage?: string;
  hasUploadFailed?: boolean;
};

export enum FileActionType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  REMOVE = 'REMOVE',
}

interface FileActionSuccess {
  type: FileActionType.SUCCESS;
  files: Array<UploadedFile>;
}

interface FileActionError {
  type: FileActionType.ERROR;
  files: Array<UploadedFile>;
  successFiles?: Array<UploadedFile>;
}

interface FileActionDelete {
  type: FileActionType.REMOVE;
  file: UploadedFile;
}

export type FileAction = FileActionError | FileActionDelete | FileActionSuccess;

export type FileUploaderError = Array<{ error: string; files: Array<string> }>;

export type SuccessMethod<T> = (files: Array<UploadedFile>, data?: T) => void;

export type LoadingMethod = () => void;

export type FailureMethod<T> = (
  files: Array<UploadedFile>,
  errorMessage: T,
  succeededFiles?: Array<UploadedFile>
) => void;

export type RemoveMethod = (file: UploadedFile) => void;

export type UseFileUploaderReturn<T> = [
  state: FileUploaderState,
  SuccessMethod<T>,
  LoadingMethod,
  FailureMethod<T>,
  RemoveMethod
];
