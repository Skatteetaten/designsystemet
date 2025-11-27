import { ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { StepListStep } from './StepListStep/StepListStep';

export interface StepListProps extends BaseProps {
  ref?: Ref<HTMLOListElement>;
  /** Stegene i lista. */
  children?: ReactNode;
}

export interface StepListComponent extends React.FC<StepListProps> {
  Step: typeof StepListStep;
}
