import { ReactNode, Ref } from 'react';

import { BaseProps, HeadingAs } from '@skatteetaten/ds-core-utils';

import { ErrorSummaryError } from '../ErrorSummaryError/ErrorSummaryError';

export interface ErrorSummaryProps extends BaseProps {
  ref?: Ref<HTMLDivElement>;
  /** Liste med feil */
  children?: ReactNode;
  /** Valgfritt innhold */
  content?: ReactNode;
  /** Margin under komponenten */
  hasSpacing?: boolean;
  /**
   * Mulighet til å angi shadowRootNode slik at fokus kan settes når elementet
   * feilen hører til ligger i shadowDOM
   */
  shadowRootNode?: Document | ShadowRoot;
  /** Om komponenten skal vises */
  showErrorSummary?: boolean;
  /** Overskrift */
  title?: string;
  /** Rendrer overskriften som heading på gitt nivå */
  titleAs?: HeadingAs;
}

export interface ErrorSummaryComponent extends React.FC<ErrorSummaryProps> {
  Error: typeof ErrorSummaryError;
}

export interface ErrorSummaryContextProps {
  shadowRootNode?: Document | ShadowRoot;
}
