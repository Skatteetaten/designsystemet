import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

export interface DescriptionListElementCommonProps extends BaseProps {
  children: ReactNode;
  term: ReactNode;
}

export type DescriptionListElementProps = DescriptionListElementCommonProps;
