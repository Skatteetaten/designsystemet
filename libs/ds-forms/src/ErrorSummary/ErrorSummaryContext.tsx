import { createContext } from 'react';

import { ErrorSummaryContextProps } from '../ErrorSummary/ErrorSummary.types';

export const ErrorSummaryContext =
  createContext<ErrorSummaryContextProps | null>(null);
