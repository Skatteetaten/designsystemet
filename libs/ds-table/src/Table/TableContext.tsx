import { createContext } from 'react';

import { TableContextProps } from '../Table/Table.types';

export const TableContext = createContext<TableContextProps | null>(null);
