import { FunctionComponent, ReactNode, Ref } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { StepListStep } from './StepListStep/StepListStep';

export interface StepListProps extends BaseProps {
  ref?: Ref<HTMLOListElement>;
  /** Stegene i lista. */
  children?: ReactNode;
}

export interface StepListComponent extends FunctionComponent<StepListProps> {
  Step: typeof StepListStep;
}
