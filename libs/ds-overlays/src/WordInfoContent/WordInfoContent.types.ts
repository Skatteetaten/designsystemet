import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface WordInfoContentProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Innhold i popup-boksen. Må være string eller et HTML-element som er tillatt i en span. */
  children: ReactNode;
}
