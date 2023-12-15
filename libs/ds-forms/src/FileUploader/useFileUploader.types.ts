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

export type UploadedFileWithoutError = Pick<UploadedFile, 'name' | 'href'>;

export enum FileActionType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  REMOVE = 'REMOVE',
}

interface FileActionSuccess {
  type: FileActionType.SUCCESS;
  files: Array<UploadedFileWithoutError>;
}

interface FileActionError {
  type: FileActionType.ERROR;
  files: Array<UploadedFile>;
  successFiles?: Array<UploadedFileWithoutError>;
}

interface FileActionDelete {
  type: FileActionType.REMOVE;
  file: string;
}

export type FileAction = FileActionError | FileActionDelete | FileActionSuccess;

export type FileUploaderError = Array<{ error: string; files: Array<string> }>;

export type SuccessMethod<T> = (
  files: Array<UploadedFileWithoutError>,
  data?: T
) => void;

export type LoadingMethod = () => void;

export type FailureMethod<T> = (
  files: Array<{ name: string; errorMessage: string }>,
  errorMessage: T,
  succeededFiles?: Array<UploadedFileWithoutError>
) => void;

export type RemoveMethod = (file: string) => void;

export type UseFileUploaderReturn<T> = [
  state: FileUploaderState,
  SuccessMethod<T>,
  LoadingMethod,
  FailureMethod<T>,
  RemoveMethod
];
