import { createContext } from 'react';

import { PopoverContextProps } from '../Popover/Popover.types';

export const PopoverContext = createContext<PopoverContextProps>(
  {} as PopoverContextProps
);
