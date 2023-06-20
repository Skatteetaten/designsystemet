import { createContext } from 'react';

import { RadioGroupContextProps } from '../RadioGroup/RadioGroup.types';

export const RadioGroupContext = createContext<RadioGroupContextProps | null>(
  null
);
