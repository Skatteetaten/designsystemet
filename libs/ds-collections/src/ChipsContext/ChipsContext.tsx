import { createContext } from 'react';

import { ChipsContextProps } from '../Chips/Chips.types';

export const ChipsContext = createContext<ChipsContextProps>(
  {} as ChipsContextProps
);
