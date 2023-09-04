import { forwardRef, useContext } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { getCommonClassNameDefault } from '@skatteetaten/ds-core-utils';

import { ErrorProps } from './ErrorSummaryError.types';
import { ErrorSummaryContext } from '../ErrorSummaryContext/ErrorSummaryContext';

export const ErrorSummaryError = forwardRef<HTMLAnchorElement, ErrorProps>(
  (
    {
      id,
      className = getCommonClassNameDefault(),
      lang,
      'data-testid': dataTestid,
      referenceId,
      children,
    },
    ref
  ): JSX.Element => {
    const context = useContext(ErrorSummaryContext);

    const scrollToId = (elementId: string): void => {
      const element = context?.shadowRootNode
        ? context?.shadowRootNode.getElementById(elementId)
        : document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
        element.focus();
      }
    };

    return (
      <LinkGroup.Link
        ref={ref}
        id={id}
        className={className}
        lang={lang}
        data-testid={dataTestid}
        href={`#${referenceId}`}
        onClick={(): void => scrollToId(referenceId)}
      >
        {children}
      </LinkGroup.Link>
    );
  }
);

ErrorSummaryError.displayName = 'ErrorSummaryError';
