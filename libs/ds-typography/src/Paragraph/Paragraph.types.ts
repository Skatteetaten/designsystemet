import { BaseProps, ParagraphVariant } from '@skatteetaten/ds-core-utils';

export interface ParagraphProps extends BaseProps {
  /** Tekst og markup for avsnittet */
  children: React.ReactNode | string;
  /** Margin under avsnittet */
  hasSpacing?: boolean;
  /** Definerer stilen til avsnittet */
  variant?: ParagraphVariant;
}
