import { createContext } from 'react';

import { TableContextProps } from './Table.types';

export const TableContext = createContext<TableContextProps | null>(null);
