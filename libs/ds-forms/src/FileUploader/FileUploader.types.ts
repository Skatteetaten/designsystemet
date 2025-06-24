import { ComponentPropsWithoutRef, MouseEvent, ReactNode, Ref } from 'react';

import { BaseProps, Prettify } from '@skatteetaten/ds-core-utils';

import { useFileUploader } from './useFileUploader';
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
  ref?: Ref<HTMLDivElement>;
  classNames?: Prettify<
    {
      errorMessage?: string;
      container?: string;
    } & LabelWithHelpProps['classNames']
  >;
  /**
   * Styrer hvilke filformater som er mulig å velge i operativsystemets filutforsker.
   * Med Drag-and-drop vil det fortsatt være mulig å slippe inn alle filer.
   */
  acceptedFileFormats?: Array<string>;
  /** Overskriver av default tekst for aksepterte filformater */
  acceptedFileFormatsDisplay?: string;
  /** Overskriver tekst på filopplaster-knappen */
  children?: string;
  /** Tekst på feilmelding */
  errorMessage?: string;
  /** Margin under komponenten */
  hasSpacing?: boolean;
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
  /**
   * Liste med opplastede filer som skal vises under filopplasteren.
   * Det er mulig å angi href dersom filen skal kunne lastes ned igjen.
   * Det er også mulig å angi en id som brukes til key i rendring av lista med filer.
   * Hvis id ikke blir satt så faller komponenten tilbake på filnavn. Det betyr at dersom det er behov
   * for å kunne laste opp flere ulike filer med identisk filnavn så er det nødvendig å anngi unik id.
   */
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
   * @param {File[]} Files filene som ble lagt til
   */
  onFileChange?: (files: File[]) => void;
  /**
   * Kalles når fil skal fjernes.
   * @param {UploadedFile} file filen som skal fjernes
   * @returns {boolean} om DELETE kallet var vellykket
   */
  onFileDelete?: (file: UploadedFile) => boolean | Promise<boolean>;
  /**
   * Kalles når fil skal lastes ned. Brukes om man trenger å overstyre standard oppførsel til
   * lenkene og initiere nedlasting selv.
   * @param {MouseEvent} event MouseEvent for anchor som ble klikket på
   * @param {UploadedFile} file filen som skal fjernes
   */
  onFileDownload?: (
    event: MouseEvent<HTMLAnchorElement>,
    file: UploadedFile
  ) => void;
  /** Callback som kalles når hjelpetekst vises/skjules */
  onHelpToggle?: LabelWithHelpProps['onHelpToggle'];
}

export interface UploadedFile {
  /** Navn på filen */
  name: string;
  /** lenke til nedlasting av filen */
  href?: string;
  /**
   * Brukes som key i rendring av lista med filer og til å oppdage duplikat av fil.
   * Komponenten faller tilbake på filnavn som key hvis man ikke oppgir id.
   */
  id?: string;
}

export type FileUploaderProps = FileUploaderCommonProps;

export interface FileUploaderComponent extends React.FC<FileUploaderProps> {
  useFileUploader: typeof useFileUploader;
}
