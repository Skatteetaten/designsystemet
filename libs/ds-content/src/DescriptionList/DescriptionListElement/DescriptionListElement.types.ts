import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DescriptionListElementCommonProps extends BaseProps {
  ref?: Ref<HTMLDListElement>;
  /** Begrep */
  term: ReactNode;
  /** Beskrivelse */
  children: ReactNode;
}

export type DescriptionListElementProps = DescriptionListElementCommonProps;
