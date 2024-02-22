import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

import { ErrorProps } from '../ErrorSummaryError/ErrorSummaryError.types';

export interface ErrorSummaryProps extends BaseProps {
  /** Liste med feil */
  children?: ReactNode;
  /** Valgfritt innhold */
  content?: ReactNode;
  /** Mulighet til å angi shadowRootNode slik at fokus kan settes når elementet feilen hører til ligger i shadowDOM */
  shadowRootNode?: Document | ShadowRoot;
  /** Om komponenten skal vises */
  showErrorSummary?: boolean;
  /** Overskrift */
  title?: string;
  /** Rendrer overskriften som heading på gitt nivå */
  titleAs?: HeadingAs;
}

export interface ErrorSummaryComponent
  extends ForwardRefExoticComponent<
    ErrorSummaryProps & RefAttributes<HTMLDivElement>
  > {
  Error: ForwardRefExoticComponent<
    ErrorProps & RefAttributes<HTMLAnchorElement>
  >;
}

export interface ErrorSummaryContextProps {
  shadowRootNode?: Document | ShadowRoot;
}
