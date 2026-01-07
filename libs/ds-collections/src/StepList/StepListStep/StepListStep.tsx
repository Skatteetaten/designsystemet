import { useId, useRef, JSX, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { Panel } from '@skatteetaten/ds-content';
import {
  dsI18n,
  getCommonClassNameDefault,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import { CheckIcon, EditSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import {
  getStepListStepEditButtonTextDefault,
  getStepListStepNextButtonTextDefault,
  getStepListStepShouldAutoFocusWhenActiveDefault,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
} from './defaults';
import { StepListStepProps } from './StepListStep.types';

import styles from './StepListStep.module.scss';

export const StepListStep = ({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  editButtonText = getStepListStepEditButtonTextDefault(),
  introContent,
  introTitle,
  introTitleAs,
  nextButtonProps,
  nextButtonText = getStepListStepNextButtonTextDefault(),
  stepNumber,
  svgPath,
  svgTitle,
  title,
  titleAs = getStepListStepTitleAsDefault(),
  variant = getStepListStepVariantDefault(),
  onEdit,
  onNext,
  hasResultContentFullWidth,
  shouldAutoFocusWhenActive = getStepListStepShouldAutoFocusWhenActiveDefault(),
  children,
}: StepListStepProps): JSX.Element => {
  const { t } = useTranslation('ds_collections', { i18n: dsI18n });
  const innerRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const titleId = `steptitle-${id ?? generatedId}`;
  const isMobile = !useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    if (
      shouldAutoFocusWhenActive &&
      innerRef.current &&
      (variant === 'active' ||
        variant === 'positiveResult' ||
        variant === 'neutralResult')
    ) {
      innerRef.current.focus();
    }
  }, [variant, shouldAutoFocusWhenActive]);

  const concatenatedClassName = `${styles.step} ${className}`.trim();

  const getCircleContent = (): JSX.Element | number => {
    if (svgPath) {
      return (
        <Icon
          title={svgTitle}
          className={styles.stepCircleIcon}
          svgPath={svgPath}
        />
      );
    } else if (variant === 'positiveResult' || variant === 'neutralResult') {
      return (
        <CheckIcon
          title={t('steplist.ResultStepIconText')}
          className={styles.stepCircleIcon}
        />
      );
    }
    return stepNumber;
  };

  const hasStepIntro = (): boolean =>
    ['neutralResult', 'positiveResult'].includes(variant) &&
    !!(introTitle || introContent);

  return (
    <li
      ref={ref}
      id={id}
      className={concatenatedClassName}
      lang={lang}
      data-testid={dataTestId}
      data-variant={variant}
    >
      <div
        ref={innerRef}
        className={`${styles.stepSideWrapper} ${
          ['neutralResult', 'positiveResult'].includes(variant)
            ? styles.stepSideWrapper_result
            : ''
        }`.trim()}
        id={id ? `${id}-focus-target` : undefined}
        tabIndex={-1}
        aria-current={variant !== 'passive' ? 'step' : undefined}
      >
        <span className={styles.stepCircle}>{getCircleContent()}</span>
        <div className={styles.stepLine} />
      </div>
      <Heading
        id={titleId}
        className={styles.stepHeading}
        as={titleAs}
        level={isMobile ? 5 : 4}
      >
        {title}
      </Heading>
      {hasStepIntro() && (
        <Panel
          className={styles.resultIntro}
          color={variant === 'neutralResult' ? 'ochre' : 'forest'}
          variant={'filled'}
          title={introTitle}
          titleAs={introTitleAs}
        >
          {introContent}
        </Panel>
      )}

      <div
        className={styles.stepContent}
        data-full-width={hasResultContentFullWidth || undefined}
      >
        <div>{children}</div>
        {onEdit && (
          <InlineButton
            className={styles.stepEditButton}
            svgPath={EditSVGpath}
            ariaDescribedby={titleId}
            onClick={(): void => {
              onEdit();
              setTimeout(() => {
                innerRef?.current?.focus();
              });
            }}
          >
            {editButtonText}
          </InlineButton>
        )}
      </div>

      {variant === 'active' && onNext && (
        <>
          <div className={styles.nextLine}></div>
          <span className={styles.buttonWrapper}>
            <Button onClick={onNext} {...nextButtonProps}>
              {nextButtonText}
            </Button>
          </span>
        </>
      )}
    </li>
  );
};

StepListStep.displayName = 'StepListStep';
