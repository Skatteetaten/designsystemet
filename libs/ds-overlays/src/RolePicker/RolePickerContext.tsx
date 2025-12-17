import { createContext } from 'react';

import { RolePickerContextProps } from '../RolePicker/RolePicker.types';

export const RolePickerContext = createContext<RolePickerContextProps | null>(
  null
);
