import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface FileUploaderFileProps extends BaseProps {
  /** Link til nedlastning av filen */
  href?: string;
  /** Overskriver default tittel på fil-ikonet */
  fileIconTitle?: string;
  /** Callback som kalles ved klikk på slett-knappen*/
  onClickDelete?: () => void;
  /** Overskriver default tittel på ikonet som viser at opplasting av fil er vellykket*/
  successIconTitle?: string;
  /** Filnavn */
  children: string;
}
