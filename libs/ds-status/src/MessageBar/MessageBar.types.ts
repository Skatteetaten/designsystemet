import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ErrorMessageProps extends BaseProps {
  /** Tekst for feilmeldingen */
  children: React.ReactNode;
  /** Definerer stilen */
  variant: boolean;
}
