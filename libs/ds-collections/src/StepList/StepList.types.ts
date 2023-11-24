import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { StepListStepProps } from '../StepListStep/StepListStep.types';

export interface StepListProps extends BaseProps {
  /** Stegene i lista. */
  children?: ReactNode;
}

export interface StepListComponent
  extends ForwardRefExoticComponent<
    StepListProps & RefAttributes<HTMLOListElement>
  > {
  Step: ForwardRefExoticComponent<
    StepListStepProps & RefAttributes<HTMLLIElement>
  >;
}
