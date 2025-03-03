import { JSX } from 'react';

import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { StepListComponent, StepListProps } from './StepList.types';
import {
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
  getStepListStepShouldAutoFocusWhenActiveDefault,
} from '../StepListStep/defaults';
import { StepListStep } from '../StepListStep/StepListStep';

import styles from './StepList.module.scss';

export const StepList = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  children,
}: StepListProps): JSX.Element => {
  return (
    <ol
      ref={ref}
      id={id}
      className={`${styles.stepList} ${className}`.trim()}
      lang={lang}
      data-testid={dataTestId}
    >
      {children}
    </ol>
  );
}) as StepListComponent;

StepList.displayName = 'StepList';
StepList.Step = StepListStep;
StepList.Step.displayName = 'StepList.Step';

export {
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
  getStepListStepShouldAutoFocusWhenActiveDefault,
};
