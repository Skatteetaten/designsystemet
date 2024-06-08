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

export type FileUploaderError = Array<{
  error: string;
  files: Array<{ name: string; reason?: string; id?: string }>;
}>;

export type SuccessMethod<T> = (files: Array<UploadedFile>, data?: T) => void;

export type LoadingMethod = () => void;

export type FailureMethod<T> = (
  files: Array<UploadedFile>,
  errorMessage: T,
  succeededFiles?: Array<UploadedFile>
) => void;

export type RemoveMethod = (file: UploadedFile) => void;

/**
 * T kan brukes om man ønsker å definere en egen type til data som brukes til å rendre
 * innholdet i allerten som oppsummerer resultat av opplastingen
 */
export type UseFileUploaderReturn<T> = [
  /** Holder tilstand om filer som er lastet opp, data til statusmelding som beskriver resultat av opplasting og om opplasting pågår*/
  state: FileUploaderState,
  /** Bruker for å legge til filer i lista over opplastedete filer */
  SuccessMethod<T>,
  /** Setter tilstand om at opplasting pågår. */
  LoadingMethod,
  /** Brukes når opplasting av en eller flere filer var helt eller delvis mislykket. */
  FailureMethod<T>,
  /** Brukes for fjerning av filer i lista */
  RemoveMethod
];
