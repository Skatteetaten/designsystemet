import { createContext } from 'react';

import { ChipsContextProps } from './Chips.types';

export const ChipsContext = createContext<ChipsContextProps>(
  {} as ChipsContextProps
);
