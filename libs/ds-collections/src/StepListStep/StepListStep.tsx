import { forwardRef, useId, useRef, JSX, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, InlineButton } from '@skatteetaten/ds-buttons';
import { Panel } from '@skatteetaten/ds-content';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { CheckIcon, EditSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import {
  getStepListStepShouldAutoFocusWhenActiveDefault,
  getStepListStepTitleAsDefault,
  getStepListStepVariantDefault,
} from './defaults';
import { StepListStepProps } from './StepListStep.types';

import styles from './StepListStep.module.scss';

/* eslint-disable sonarjs/no-nested-template-literals */
export const StepListStep = forwardRef<HTMLLIElement, StepListStepProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      editButtonText,
      introContent,
      introTitle,
      introTitleAs,
      nextButtonProps,
      nextButtonText,
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
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_collections', { i18n: dsI18n });
    const innerRef = useRef<HTMLDivElement>(null);
    const generatedId = useId();
    const titleId = `steptitle-${id ?? generatedId}`;

    useEffect(() => {
      if (
        shouldAutoFocusWhenActive &&
        innerRef.current &&
        variant === 'active'
      ) {
        innerRef.current.focus();
      }
    }, [variant, shouldAutoFocusWhenActive]);

    const circleClassName = `${styles.stepCircle}
        ${styles[`stepCircle_${variant}`]}`;

    const stepVariantClassName = styles[`step_${variant}`];

    const [stepLineVariantClassName, stepContentVariantClassName] =
      variant === 'positiveResult' || variant === 'neutralResult'
        ? [
            styles[`stepLine_${variant}`],
            `${styles[`stepContent_${variant}`]} ${
              hasResultContentFullWidth ? styles.stepContent_fullWidth : ''
            }`,
          ]
        : ['', ''];
    const concatenatedClassName = `${styles.step} ${stepVariantClassName} ${className}`;

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
      >
        <div
          ref={innerRef}
          className={`${styles.stepSideWrapper} ${
            ['neutralResult', 'positiveResult'].includes(variant)
              ? styles.stepSideWrapper_result
              : ''
          }`}
          id={id ? `${id}-focus-target` : undefined}
          tabIndex={-1}
          aria-current={variant !== 'passive' ? 'step' : undefined}
        >
          <span className={circleClassName}>{getCircleContent()}</span>
          <div className={`${styles.stepLine} ${stepLineVariantClassName}`} />
        </div>
        <Heading
          id={titleId}
          className={styles.stepHeading}
          as={titleAs}
          level={5}
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
          className={`${styles.stepContent} ${
            onEdit ? '' : styles.stepContent_noButton
          } ${stepContentVariantClassName}
          `}
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
              {editButtonText ?? t('steplist.Edit')}
            </InlineButton>
          )}
        </div>

        {variant === 'active' && onNext && (
          <>
            <div className={styles.nextLine}></div>
            <span className={styles.buttonWrapper}>
              <Button onClick={onNext} {...nextButtonProps}>
                {nextButtonText ?? t('steplist.Next')}
              </Button>
            </span>
          </>
        )}
      </li>
    );
  }
);

StepListStep.displayName = 'StepListStep';
