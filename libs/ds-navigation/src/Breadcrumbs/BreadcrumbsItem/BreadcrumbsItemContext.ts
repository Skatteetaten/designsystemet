import { createContext } from 'react';

import { BreadcrumbsItemContextProps } from './BreadcrumbsItem.types';

export const BreadcrumbsItemContext =
  createContext<BreadcrumbsItemContextProps>({} as BreadcrumbsItemContextProps);
