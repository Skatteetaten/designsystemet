import { JSX } from 'react';

import { StepListComponent, StepListProps } from './StepList.types';
import { StepListStep } from './StepListStep/StepListStep';

import styles from './StepList.module.scss';

/**
 * StepList
 *
 * @see [Dokumentasjon](https://skatteetaten.github.io/designsystemet/byggeklosser/komponenter/steplist)
 */
export const StepList = ({
  ref,
  id,
  className = '',
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
};

export default StepList as StepListComponent;

StepList.displayName = 'StepList';
StepList.Step = StepListStep;
StepList.Step.displayName = 'StepList.Step';
