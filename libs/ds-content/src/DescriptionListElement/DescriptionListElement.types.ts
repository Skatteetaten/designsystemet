import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DescriptionListElementCommonProps extends BaseProps {
  /** Begrep */
  term: ReactNode;
  /** Beskrivelse */
  children: ReactNode;
}

export type DescriptionListElementProps = DescriptionListElementCommonProps;
