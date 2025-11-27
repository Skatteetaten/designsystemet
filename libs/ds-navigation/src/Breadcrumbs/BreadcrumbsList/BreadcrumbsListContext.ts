import { createContext } from 'react';

import { BreadcrumbsListContextProps } from './BreadcrumbsList.types';

export const BreadcrumbsListContext =
  createContext<BreadcrumbsListContextProps>({} as BreadcrumbsListContextProps);
