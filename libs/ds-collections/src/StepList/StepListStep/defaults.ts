import { dsI18n, HeadingAs } from '@skatteetaten/ds-core-utils';

import { StepVariant } from './StepListStep.types';

export const getStepListStepTitleAsDefault = (): HeadingAs => 'h3';
export const getStepListStepVariantDefault = (): StepVariant => 'passive';
export const getStepListStepShouldAutoFocusWhenActiveDefault = (): boolean =>
  true;
export const getStepListStepEditButtonTextDefault = (): string =>
  dsI18n.t('ds_collections:steplist.Edit');
export const getStepListStepNextButtonTextDefault = (): string =>
  dsI18n.t('ds_collections:steplist.Next');
