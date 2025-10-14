import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface WordInfoContentProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /**
   * Innhold i popup-boksen. Må være string eller et HTML-element som er tillatt i en span.
   * Finn ut hvilke elementer som er tillatt i en span: {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content}.
   */
  children: ReactNode;
}
