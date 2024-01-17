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
  /**
   * Etter at en eller flere filer ble forsøkt lastet opp skal bruker få en oppsummering av
   * hvordan opplastingen gikk.
   */
  statusMessage?: ReactNode;
  /** Styrer visning av Alert som indikerer om opplastingen var vellykket eller ikke */
  hasUploadFailed?: boolean;
};

export interface FileUploaderCommonProps
  extends FileUploaderHTMLAttributes,
    BaseProps {
  /** Aksepterte filformater */
  acceptedFileFormats?: Array<string>;
  /** Overskriver av default tekst for aksepterte filformater */
  acceptedFileFormatsDisplay?: string;
  /** Overskriver tekst på filopplaster-knappen */
  children?: string;
  /** Skjuler label, tilleggstekst og hjelpeteskt, men er fortsatt synlig for skjermleser. */
  hideLabel?: LabelWithHelpProps['hideLabel'];
  /** Ledetekst */
  label?: LabelWithHelpProps['children'];
  /** Tilleggstekst */
  description?: LabelWithHelpProps['description'];
  /** Hjelpetekst */
  helpText?: LabelWithHelpProps['helpText'];
  /** Overskriver default hjelpeikon */
  helpSvgPath?: LabelWithHelpProps['helpSvgPath'];
  /** Overskriver default tooltip-tekst til hjelpeikon */
  titleHelpSvg?: LabelWithHelpProps['titleHelpSvg'];
  /** Om FileUploader skal markeres med stjerne */
  showRequiredMark?: LabelWithHelpProps['showRequiredMark'];
  /** Brukes i kombinasjon med shouldNormalizeFileName til å styre hvilke tegn som skal erstattes  */
  invalidCharacterRegexp?: RegExp;
  /** Overskriver ledetekst om gyldige filformater */
  acceptedFileFormatsDescription?: string;
  /** Overskriver default tittel på fil-ikonet som brukes i listen med filer som er lastet opp */
  fileIconTitle?: string;
  /** Overskriver default tittel på ikonet som viser at opplasting av fil er vellykket */
  successIconTitle?: string;
  /** Liste med opplastede filer som skal vises under filopplasteren */
  uploadedFiles?: Array<UploadedFile>;

  /**
   * Etter at en eller flere filer ble forsøkt lastet opp skal bruker få en oppsummering av
   * hvordan opplastingen gikk. uploadResult.hasUploadFailed angir om opplasting var vellykket og
   * uploadResult.statusMessage brukes til å vise en melding om hvordan det gikk med opplastingen.
   */
  uploadResult?: UploadResult;
  /** Om opplasting er underveis. */
  isUploading?: boolean;
  /** Erstatter tegn som er ugyldige. Bruk invalidCharacterRegexp for å overstyre hvilke tegn som skal erstattes. */
  shouldNormalizeFileName?: boolean;
  /**
   * Callback som inneholder liste med filer som ble lagt til av bruker.
   *
   * @param {File[]} Files filene som ble lagt til
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
  /** Navn på filen */
  name: string;
  /** lenke til nedlasting av filen */
  href?: string;
}

type FileUploaderDiscriminatedErrorProps =
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
  FileUploaderDiscriminatedErrorProps;

export interface FileUploaderComponent
  extends ForwardRefExoticComponent<
    FileUploaderProps & RefAttributes<HTMLDivElement>
  > {
  useFileUploader: <T>(
    renderStatus?: (status: UploadResultData<T>) => ReactNode
  ) => UseFileUploaderReturn<T>;
}
