import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ErrorMessageProps extends BaseProps {
  /** Tekst for feilmeldingen */
  children?: string;
  /** Om feilmeldingen er synlig */
  showError?: boolean;
}
