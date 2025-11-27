import { createContext } from 'react';

import { CardContextProps } from './Card.types';

export const CardContext = createContext<CardContextProps>(
  {} as CardContextProps
);
