import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import {
  UploadResultData,
  UseFileUploaderReturn,
} from './useFileUploader.types';
import { LabelWithHelpProps } from '../LabelWithHelp/LabelWithHelp.types';

type RequiredFileUploaderHTMLAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'multiple'
>;

type FileUploaderHTMLAttributes = Partial<RequiredFileUploaderHTMLAttributes>;
export type UploadResult = {
  statusMessage?: ReactNode;
  hasUploadFailed?: boolean;
};

export interface FileUploaderCommonProps
  extends FileUploaderHTMLAttributes,
    BaseProps {
  /** Aksepterte filformater */
  acceptedFileFormats?: Array<string>; //TODO bør vi bare motta accept attributet i stedet for å motta liste?
  /**TODO  */
  helpProps?: LabelWithHelpProps;
  /** Erstatter tegn som er ugyldige */
  invalidCharacterRegexp?: RegExp;
  /** Liste med opplastede filer som skal vises under filopplasteren */
  uploadedFiles?: Array<UploadedFile>;
  uploadResult?: UploadResult;
  /** Overskriving av tekst på knappen*/
  buttonText?: string;
  /** Overskriving av ledetekst om gyldige filformater */
  fileFormatsText?: string;
  /** Om opplasting er underveis. */
  isUploading?: boolean;
  /**
   * Callback som inneholder liste med filer som ble lagt til av bruker.
   *
   * @param {File[]} filene som ble lagt til
   */
  onFileChange?: (files: File[]) => void;
  /**
   * Kalles når fil skal fjernes.
   *
   * @param {string} file filen som skal fjernes
   * @returns {boolean} om DELETE kallet var vellykket
   */
  onFileDelete?: (file: string) => boolean;
}

export interface UploadedFile {
  /** Navn på filen*/
  name: string;
  /** lenke til nedlasting av filen */
  href?: string;
  /** Om filen har en feilmelding */
  errorMessage?: string;
}

type FileUploaderDiscriminatedProps =
  | {
      /** Tekst på feilmelding */
      errorMessage: string;
      /** Om FileUploader har en feil */
      hasError?: boolean;
    }
  | {
      /** Tekst på feilmelding */
      errorMessage?: never;
      /** Om FileUploader har en feil */
      hasError?: never;
    };

export type FileUploaderProps = FileUploaderCommonProps &
  FileUploaderDiscriminatedProps;

export interface FileUploaderComponent
  extends ForwardRefExoticComponent<
    FileUploaderProps & RefAttributes<HTMLDivElement>
  > {
  useFileUploader: <T>(
    renderStatus?: (status: UploadResultData<T>) => ReactNode
  ) => UseFileUploaderReturn<T>;
}
