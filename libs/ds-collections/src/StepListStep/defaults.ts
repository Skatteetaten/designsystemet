import { HeadingAs } from '@skatteetaten/ds-core-utils';

import { StepVariant } from './StepListStep.types';

export const getStepListStepTitleAsDefault = (): HeadingAs => 'h3';
export const getStepListStepVariantDefault = (): StepVariant => 'passive';
export const getStepListStepShouldAutoFocusWhenActiveDefault = (): boolean =>
  true;
