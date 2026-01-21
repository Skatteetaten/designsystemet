import {
  Children,
  isValidElement,
  JSX,
  useMemo,
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
import { ErrorSummaryContext } from './ErrorSummaryContext';
import { ErrorSummaryError } from './ErrorSummaryError/ErrorSummaryError';
import { ErrorSummaryGroup } from './ErrorSummaryGroup/ErrorSummaryGroup';

import styles from './ErrorSummary.module.scss';

const isGroupElement = (child: React.ReactNode): boolean => {
  return (
    isValidElement(child) &&
    (child.type === ErrorSummaryGroup ||
      (child.type as { displayName?: string }).displayName ===
        'ErrorSummaryGroup')
  );
};

const countErrors = (childArray: React.ReactNode[]): number => {
  let count = 0;
  childArray.forEach((child) => {
    if (isValidElement(child)) {
      if (isGroupElement(child)) {
        // Tell feilene i gruppen
        const groupChildren = Children.toArray(
          (child.props as { children?: React.ReactNode }).children
        );
        count += groupChildren.length;
      } else {
        count += 1;
      }
    }
  });
  return count;
};

/**
 * ErrorSummary
 *
 * @see [Storybook](https://skatteetaten.github.io/designsystemet/?path=/docs/komponenter-errorsummary--docs) - Teknisk dokumentasjon
 * @see [Stil og tone](https://www.skatteetaten.no/stilogtone/designsystemet/komponenter/errorsummary/) - Brukerveiledning
 */
export const ErrorSummary = (({
  ref,
  id,
  className = getCommonClassNameDefault(),
  lang,
  'data-testid': dataTestId,
  content,
  shadowRootNode,
  title,
  titleAs = getErrorSummaryTitleAsDefault(),
  hasSpacing,
  showErrorSummary,
  children,
}: ErrorSummaryProps): JSX.Element => {
  const { t } = useTranslation('ds_forms', { i18n: dsI18n });

  const childArray = useMemo(() => Children.toArray(children), [children]);

  const contentWithoutChildrenClassName = !children
    ? styles.contentWithoutChildren
    : '';

  const hasGroups = useMemo(
    () => childArray.some(isGroupElement),
    [childArray]
  );

  const errorAmount = useMemo(() => countErrors(childArray), [childArray]);

  const errorSummaryRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => errorSummaryRef.current as HTMLDivElement);
  useEffect(() => {
    if (showErrorSummary) {
      errorSummaryRef.current?.focus();
    }
  }, [showErrorSummary]);

  const renderedChildren = useMemo(() => {
    if (!children) {
      return null;
    }

    // Hvis det ikke finnes grupper, pakk alle barn i en enkelt LinkGroup (bakoverkompatibel)
    if (!hasGroups) {
      return <LinkGroup>{children}</LinkGroup>;
    }

    // Håndterer blandet innhold: grupper og enkeltstående feil
    // Samler sammenhengende ikke-gruppe-barn og pakker dem i LinkGroup
    const result: React.ReactNode[] = [];
    let currentErrors: React.ReactNode[] = [];

    childArray.forEach((child, index) => {
      if (isGroupElement(child)) {
        // Pakk inn ventende feil i en LinkGroup før gruppen
        if (currentErrors.length > 0) {
          result.push(
            <LinkGroup key={`error-group-${index}`}>{currentErrors}</LinkGroup>
          );
          currentErrors = [];
        }
        result.push(child);
      } else {
        currentErrors.push(child);
      }
    });

    // Pakk inn gjenværende feil på slutten
    if (currentErrors.length > 0) {
      result.push(<LinkGroup key={'errors-end'}>{currentErrors}</LinkGroup>);
    }

    return result;
  }, [children, hasGroups, childArray]);

  return (
    <div
      ref={errorSummaryRef}
      className={styles.wrapper}
      id={id}
      lang={lang}
      data-testid={dataTestId}
      tabIndex={-1}
    >
      {showErrorSummary && (
        <div
          className={`${styles.errorSummary} ${className}`.trim()}
          data-has-spacing={hasSpacing}
        >
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
                  errorAmount,
                })}
            </Heading>
            <ErrorSummaryContext.Provider
              value={{
                shadowRootNode,
              }}
            >
              {renderedChildren}
            </ErrorSummaryContext.Provider>
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
}) as ErrorSummaryComponent;

ErrorSummary.displayName = 'ErrorSummary';
ErrorSummary.Error = ErrorSummaryError;
ErrorSummary.Error.displayName = 'ErrorSummary.Error';
ErrorSummary.Group = ErrorSummaryGroup;
ErrorSummary.Group.displayName = 'ErrorSummary.Group';
