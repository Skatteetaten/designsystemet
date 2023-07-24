import { ReactNode } from 'react';

import { BaseProps } from '@skatteetaten/ds-core-utils';

import { StepListStepProps } from '../StepListStep/StepListStep.types';

export interface StepListProps extends BaseProps {
  /** Stegene i lista. */
  children?: ReactNode;
}

export interface StepListComponent
  extends React.ForwardRefExoticComponent<
    StepListProps & React.RefAttributes<HTMLOListElement>
  > {
  Step: React.ForwardRefExoticComponent<
    StepListStepProps & React.RefAttributes<HTMLLIElement>
  >;
}
