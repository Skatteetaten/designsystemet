import { Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface ErrorMessageProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Tekst for feilmeldingen */
  children?: string;
  /** Om feilmeldingen er synlig */
  showError?: boolean;
}
