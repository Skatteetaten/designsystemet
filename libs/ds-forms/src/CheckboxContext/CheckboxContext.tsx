import { createContext } from 'react';

import { CheckboxContextProps } from '../CheckboxGroup/CheckboxGroup.types';

export const CheckboxContext = createContext<CheckboxContextProps | null>(null);
