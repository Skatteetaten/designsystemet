import {
  Children,
  forwardRef,
  JSX,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { dsI18n, getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';
import { Icon, WarningSVGpath } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { getErrorSummaryTitleAsDefault } from './defaults';
import { ErrorSummaryComponent, ErrorSummaryProps } from './ErrorSummary.types';
import { ErrorSummaryContext } from '../ErrorSummaryContext/ErrorSummaryContext';
import { ErrorSummaryError } from '../ErrorSummaryError/ErrorSummaryError';

import styles from './ErrorSummary.module.scss';

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestId,
      content,
      shadowRootNode,
      title,
      titleAs = getErrorSummaryTitleAsDefault(),
      showErrorSummary,
      children,
    },
    ref
  ): JSX.Element => {
    const { t } = useTranslation('ds_forms', { i18n: dsI18n });
    const errors = Children.toArray(children);
    const contentWithoutChildrenClassName = !children
      ? styles.contentWithoutChildren
      : '';

    const errorSummaryRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => errorSummaryRef.current as HTMLDivElement);
    useEffect(() => {
      if (showErrorSummary) {
        errorSummaryRef.current?.focus();
      }
    }, [showErrorSummary]);

    return (
      <div
        ref={errorSummaryRef}
        className={styles.wrapper}
        id={id}
        lang={lang}
        data-testid={dataTestId}
        aria-live={'assertive'}
        tabIndex={-1}
        aria-atomic
      >
        {showErrorSummary && (
          <div className={`${styles.errorSummary} ${className}`.trim()}>
            <div className={styles.iconContainer}>
              <Icon
                svgPath={WarningSVGpath}
                className={styles.icon}
                size={'large'}
              />
            </div>
            <div className={styles.summaryContainer}>
              <Heading as={titleAs} level={4} hasSpacing>
                {title ??
                  t('errorsummary.Title', {
                    errorAmount: errors.length,
                  })}
              </Heading>
              {children && (
                <ErrorSummaryContext.Provider
                  value={{
                    shadowRootNode,
                  }}
                >
                  <LinkGroup>{children}</LinkGroup>
                </ErrorSummaryContext.Provider>
              )}
              {content && (
                <div
                  className={`${styles.content} ${contentWithoutChildrenClassName}`.trim()}
                >
                  {content}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
) as ErrorSummaryComponent;

ErrorSummary.displayName = 'ErrorSummary';
ErrorSummary.Error = ErrorSummaryError;
ErrorSummary.Error.displayName = 'ErrorSummary.Error';

export { getErrorSummaryTitleAsDefault };
