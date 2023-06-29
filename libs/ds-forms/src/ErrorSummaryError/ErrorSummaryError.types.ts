import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ErrorProps extends BaseProps {
  /** Tekst på feilen i ErrorSummary */
  children: string;
  /** Referanseid'en som ErrorSummary peker til */
  referenceId: string;
}
